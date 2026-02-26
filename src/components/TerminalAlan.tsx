import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Animated,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";

// ─── Types ─────────────────────────────────────────────────────────────────────

type LineType = "output" | "error" | "info" | "command" | "prompt";

interface TerminalLine {
  id: string;
  text: string;
  type: LineType;
}

// ─── ASCII Train frames ────────────────────────────────────────────────────────

const TRAIN_FRAMES = [
  [
    "      ====        ________                ___________    ",
    "  _D _|  |_______/        \\__I_I_____===__|_________|   ",
    "   |(_)---  |   H\\________/ |   |        =|___ ___|     ",
    "   /     |  |   H  |  |     |   |         ||_| |_||     ",
    "  |      |  |   H  |__--------------------| [___] |     ",
    "  | ________|___H__/__|_____/[][]~\\_______|       |     ",
    "  |/ |   |-----------I_____I [][] []  D   |=======|__   ",
    "__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__  ",
    " |/-=|___|=    ||    ||    ||    |_____/~\\___/         ",
    "  \\_/       \\O=====O=====O=====O_/      \\_/           ",
  ],
  [
    "      ====        ________                ___________    ",
    "  _D _|  |_______/        \\__I_I_____===__|_________|   ",
    "   |(_)---  |   H\\________/ |   |        =|___ ___|     ",
    "   /     |  |   H  |  |     |   |         ||_| |_||     ",
    "  |      |  |   H  |__--------------------| [___] |     ",
    "  | ________|___H__/__|_____/[][]~\\_______|       |     ",
    "  |/ |   |-----------I_____I [][] []  D   |=======|__   ",
    "__/ =| o |=-O~\\  /O~\\  /O~\\  /O~\\ ____Y___________|__ ",
    " |/-=|___|=    ||    ||    ||    |_____/~\\___/         ",
    "  \\_/       \\O=====O=====O=====O_/      \\_/           ",
  ],
];

const LOADING_STEPS = [
  { text: "Booting AlanOS...",         pct: 10  },
  { text: "Loading kernel modules...", pct: 25  },
  { text: "Mounting filesystems...",   pct: 40  },
  { text: "Starting services...",      pct: 60  },
  { text: "Configuring network...",    pct: 75  },
  { text: "Initializing shell...",     pct: 90  },
  { text: "Done.",                     pct: 100 },
];

function makeBar(pct: number, width = 30): string {
  const filled = Math.round((pct / 100) * width);
  return "[" + "█".repeat(filled) + "░".repeat(width - filled) + `] ${pct}%`;
}

// ─── Commands ──────────────────────────────────────────────────────────────────

const USER = "alan";
const HOST = "portfolio";

type CommandResult = { text: string; type: LineType }[];

const COMMANDS: Record<string, () => CommandResult> = {
  help: () => [
    { text: "Comandos disponibles:", type: "info" },
    { text: "  whoami   – who am I?",          type: "output" },
    { text: "  skills   – my tech stack",       type: "output" },
    { text: "  status   – what I'm doing now",  type: "output" },
    { text: "  goals    – where I'm headed",    type: "output" },
    { text: "  projects – my work",             type: "output" },
    { text: "  contact  – reach me",            type: "output" },
    { text: "  date     – current date/time",   type: "output" },
    { text: "  echo     – print something",     type: "output" },
    { text: "  clear    – clear terminal",      type: "output" },
    { text: "  help     – show this message",   type: "output" },
  ],

  whoami: () => [
    { text: "Alan Olea Batres", type: "info" },
    { text: "Estudiante de Tecnologías de la Información", type: "output" },
    { text: "Apasionado por el desarrollo de software y los sistemas.", type: "output" },
  ],

  skills: () => [
    { text: "── Languages ──────────────────", type: "info" },
    { text: "  Python          ████████░░  80%", type: "output" },
    { text: "  JavaScript      ███████░░░  70%", type: "output" },
    { text: "  HTML / CSS      █████████░  90%", type: "output" },
    { text: "── Frameworks ─────────────────", type: "info" },
    { text: "  React Native    ███████░░░  70%", type: "output" },
    { text: "── Databases ──────────────────", type: "info" },
    { text: "  MySQL           ██████░░░░  60%", type: "output" },
  ],

  status: () => [
    { text: "● Actualmente aprendiendo bases de datos avanzadas", type: "info" },
    { text: "● Construyendo proyectos con React Native", type: "output" },
    { text: "● Explorando backend con Python/FastAPI", type: "output" },
  ],

  goals: () => [
    { text: "» Convertirme en desarrollador profesional", type: "info" },
    { text: "» Contribuir a proyectos open source", type: "output" },
    { text: "» Dominar arquitecturas de software modernas", type: "output" },
    { text: "» Trabajar en productos que impacten personas", type: "output" },
  ],

  projects: () => [
    { text: "── Projects ───────────────────", type: "info" },
    { text: "  AlanOS Terminal  – This very terminal you're using", type: "output" },
    { text: "  Portfolio App    – React Native personal portfolio", type: "output" },
    { text: "  DB Manager       – Python + MySQL CRUD tool",        type: "output" },
  ],

  contact: () => [
    { text: "── Contact ─────────────────────", type: "info" },
    { text: "  GitHub   : github.com/alan-olea",    type: "output" },
    { text: "  Email    : alan@example.com",        type: "output" },
    { text: "  LinkedIn : linkedin.com/in/alan",    type: "output" },
  ],

  date: () => [
    { text: new Date().toString(), type: "output" },
  ],

  clear: () => [
    { text: "__CLEAR__", type: "output" },
  ],
};

function runCommand(raw: string): CommandResult {
  const parts = raw.trim().split(/\s+/);
  const cmd   = parts[0].toLowerCase();
  const args  = parts.slice(1);

  if (cmd === "echo") {
    return [{ text: args.join(" ") || "", type: "output" }];
  }

  const fn = COMMANDS[cmd];
  if (fn) return fn();
  return [{ text: `bash: ${cmd}: command not found`, type: "error" }];
}

// ─── Boot Animation Component ─────────────────────────────────────────────────

interface BootScreenProps {
  onDone: () => void;
}

function BootScreen({ onDone }: BootScreenProps) {
  const [frame, setFrame]     = useState(0);
  const [step, setStep]       = useState(0);
  const [trainX, setTrainX]   = useState(60); // offset from right in chars
  const scrollRef              = useRef<ScrollView>(null);

  useEffect(() => {
    // Train + loading progress loop
    let tick = 0;
    const interval = setInterval(() => {
      tick++;
      setFrame((f) => (f + 1) % TRAIN_FRAMES.length);
      setTrainX((x) => Math.max(x - 3, -10));

      const newStep = Math.min(Math.floor(tick / 3), LOADING_STEPS.length - 1);
      setStep(newStep);

      if (newStep === LOADING_STEPS.length - 1 && tick > (LOADING_STEPS.length - 1) * 3 + 4) {
        clearInterval(interval);
        setTimeout(onDone, 600);
      }

      scrollRef.current?.scrollToEnd({ animated: false });
    }, 140);

    return () => clearInterval(interval);
  }, [onDone]);

  const trainLines = TRAIN_FRAMES[frame];
  const currentStep = LOADING_STEPS[step];

  return (
    <ScrollView
      ref={scrollRef}
      style={bootStyles.screen}
      contentContainerStyle={bootStyles.content}
      scrollEnabled={false}
    >
      {/* Header */}
      <Text style={bootStyles.header}>
        {"    ___    __           ____  _____"}
      </Text>
      <Text style={bootStyles.header}>
        {"   /   |  / /___ _____ / __ \\/ ___/"}
      </Text>
      <Text style={bootStyles.header}>
        {"  / /| | / / __ `/ __ \\/ / / /\\__ \\ "}
      </Text>
      <Text style={bootStyles.header}>
        {" / ___ |/ / /_/ / / / / /_/ /___/ / "}
      </Text>
      <Text style={bootStyles.header}>
        {"/_/  |_/_/\\__,_/_/ /_/\\____//____/  "}
      </Text>
      <Text style={bootStyles.subheader}>{"\n  AlanOS v1.0  –  Personal Terminal\n"}</Text>

      {/* Scrolling train */}
      <View style={bootStyles.trainContainer}>
        {trainLines.map((line, i) => (
          <Text key={i} style={bootStyles.train}>
            {" ".repeat(Math.max(trainX, 0)) + line}
          </Text>
        ))}
      </View>

      {/* Spacer */}
      <Text style={bootStyles.gap}>{""}</Text>

      {/* Loading steps */}
      {LOADING_STEPS.slice(0, step + 1).map((s, i) => (
        <Text key={i} style={[bootStyles.step, i === step ? bootStyles.stepActive : bootStyles.stepDone]}>
          {i < step ? `[  OK  ] ${s.text}` : `[......] ${s.text}`}
        </Text>
      ))}

      {/* Progress bar */}
      <Text style={bootStyles.bar}>{"\n" + makeBar(currentStep.pct)}</Text>
    </ScrollView>
  );
}

const bootStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000",
  },
  content: {
    padding: 12,
    paddingTop: 40,
  },
  header: {
    color: "#0f0",
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 11,
    lineHeight: 16,
  },
  subheader: {
    color: "#0a0",
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 12,
  },
  trainContainer: {
    marginTop: 10,
    overflow: "hidden",
  },
  train: {
    color: "#0f0",
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 9,
    lineHeight: 13,
    letterSpacing: 0,
  },
  gap: {
    marginTop: 10,
  },
  step: {
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 12,
    lineHeight: 18,
  },
  stepDone: {
    color: "#0a0",
  },
  stepActive: {
    color: "#0f0",
  },
  bar: {
    color: "#0f0",
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 13,
    marginTop: 4,
  },
});

// ─── Main Terminal Component ───────────────────────────────────────────────────

export default function TerminalAlan() {
  const [booted, setBooted]   = useState(false);
  const [lines, setLines]     = useState<TerminalLine[]>([
    { id: "w0", text: "AlanOS Terminal v1.0",  type: "info"   },
    { id: "w1", text: 'Type "help" to begin.', type: "output" },
    { id: "w2", text: "",                       type: "output" },
  ]);
  const [input, setInput]     = useState("");

  const scrollRef  = useRef<ScrollView>(null);
  const inputRef   = useRef<TextInput>(null);
  const cursorAnim = useRef(new Animated.Value(1)).current;

  // Cursor blink
  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(cursorAnim, { toValue: 0, duration: 530, useNativeDriver: true }),
        Animated.timing(cursorAnim, { toValue: 1, duration: 530, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, []);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 50);
  }, []);

  const handleSubmit = useCallback(() => {
    const trimmed = input.trim();
    setInput("");

    const cmdLine: TerminalLine = {
      id: Math.random().toString(36),
      text: `${USER}@${HOST}:~$ ${trimmed}`,
      type: "command",
    };

    const result = runCommand(trimmed);
    const isClear = result.some((r) => r.text === "__CLEAR__");

    if (isClear) {
      setLines([]);
    } else {
      const newLines: TerminalLine[] = result.map((r) => ({
        id: Math.random().toString(36),
        text: r.text,
        type: r.type,
      }));
      setLines((prev) => [...prev, cmdLine, ...newLines, { id: Math.random().toString(36), text: "", type: "output" }]);
    }
    scrollToBottom();
  }, [input, scrollToBottom]);

  const textColor = (type: LineType): string => {
    switch (type) {
      case "command": return "#0f0";
      case "error":   return "#f55";
      case "info":    return "#0f0";
      default:        return "#0d0";
    }
  };

  if (!booted) {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <BootScreen onDone={() => setBooted(true)} />
      </>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Output */}
        <TouchableOpacity
          style={styles.outputArea}
          activeOpacity={1}
          onPress={() => inputRef.current?.focus()}
        >
          <ScrollView
            ref={scrollRef}
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            onContentSizeChange={scrollToBottom}
          >
            {lines.map((line) => (
              <Text key={line.id} style={[styles.text, { color: textColor(line.type) }]}>
                {line.text}
              </Text>
            ))}

            {/* Active prompt */}
            <View style={styles.promptRow}>
              <Text style={styles.promptLabel}>{USER}@{HOST}:~$ </Text>
              <Text style={styles.inputText}>{input}</Text>
              <Animated.View style={[styles.cursor, { opacity: cursorAnim }]} />
            </View>

            {/* Hidden real input */}
            <TextInput
              ref={inputRef}
              style={styles.hiddenInput}
              value={input}
              onChangeText={setInput}
              onSubmitEditing={handleSubmit}
              autoCorrect={false}
              autoCapitalize="none"
              autoComplete="off"
              spellCheck={false}
              returnKeyType="send"
              blurOnSubmit={false}
              caretHidden
            />
          </ScrollView>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
}

// ─── Styles ────────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  outputArea: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 10,
    paddingBottom: 6,
  },
  text: {
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 15,
    lineHeight: 22,
  },
  promptRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    flexWrap: "wrap",
  },
  promptLabel: {
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 15,
    lineHeight: 22,
    color: "#0f0",
  },
  inputText: {
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontSize: 15,
    lineHeight: 22,
    color: "#0f0",
  },
  cursor: {
    width: 9,
    height: 18,
    backgroundColor: "#0f0",
    marginLeft: 1,
    marginBottom: -2,
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    width: 1,
    height: 1,
  },
});
