import { Text, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

interface FinbalanceLogoProps {
  variant?: 'light' | 'dark';
}

export default function FinbalanceLogo({ variant = "light" }: FinbalanceLogoProps) {
  const boxFill  = variant === "light" ? "#ffffff" : "#0b9387";
  const boxText  = variant === "light" ? "#0b9387" : "#ffffff";
  const mainText = variant === "light" ? "#ffffff" : "#0b9387";

  const FONT_SIZE = 26;

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

      {/* Caja "Fin" — SVG solo para el rectángulo, Text nativo para la palabra */}
      <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
        <Svg width={55} height={35} viewBox="0 0 58 38">
          <Rect x="0" y="0" width="55" height="35" rx="8" fill={boxFill} />
        </Svg>
        <Text style={{
          position: 'absolute',
          fontFamily: 'OdorMeanChey',
          fontSize: FONT_SIZE,
          color: boxText,
          lineHeight: 40,
        }}>
          Fin
        </Text>
      </View>

      {/* "balance" */}
      <Text style={{
        fontFamily: 'OdorMeanChey',
        fontSize: FONT_SIZE,
        color: mainText,
      }}>
        balance
      </Text>

      {/* "TEAM" */}
      <Text style={{
        fontFamily: 'OdorMeanChey',
        fontSize: FONT_SIZE,
        color: mainText,
        marginLeft: 10,
      }}>
        TEAM
      </Text>

    </View>
  );
}
