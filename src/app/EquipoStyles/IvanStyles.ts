import { Dimensions, StyleSheet } from 'react-native';

const { width: W } = Dimensions.get('window');
const isNarrow = W < 600;


// Deep Navy Noir: fondo casi negro, acento azul eléctrico, detalles dorados
const C = {
  bg:         '#070b14',   // negro azulado profundo
  surface:    '#08025c',   // superficie de cards
  surfaceAlt: '#111a2e',   // superficie alternativa
  border:     '#1e2d4a',   // borde sutil
  accent:     '#2563ff',   // azul eléctrico
  accentGlow: '#3b82f6',   // azul más claro para glow
  gold:       '#eecc6f',   // dorado para detalles especiales
  textPrimary:'#f0f4ff',   // blanco azulado
  textSecond: '#8899bb',   // gris azulado
  textMuted:  '#4a5a7a',   // muted
  chivas:     '#c41e3a',   // rojo chivas para la card especial
};

export { C }; // exportamos para usarlo en Ivan.tsx

export const Styles = StyleSheet.create({

  // Layout 
  mainContainer: {
    flex: 1,
    backgroundColor: C.bg,
  },
  scrollContent: {
    paddingBottom: 120,
  },

  // Header 
  headerContainer: {
    backgroundColor: C.surface,
    paddingTop: 50,
    paddingBottom: 40,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: C.accent,
    // Sombra azulada
    shadowColor: C.accent,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 12,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  imageWrapper: {
    // Borde dorado alrededor de la foto
    borderWidth: 2,
    borderColor: C.gold,
    borderRadius: 16,
    padding: 3,
    marginRight: 20,
    shadowColor: C.gold,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
  },
  image: {
    width: isNarrow ? 110 : 140,
    height: isNarrow ? 130 : 165,
    borderRadius: 13,
  },
  headerTextBlock: {
    flex: 1,
    paddingBottom: 4,
  },
  headerBadge: {
    backgroundColor: C.accent,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
    marginBottom: 8,
  },
  headerBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  headerName: {
    fontSize: isNarrow ? 42 : 50,
    fontWeight: '900',
    color: C.textPrimary,
    fontFamily: 'OdorMeanChey',
    lineHeight: isNarrow ? 36 : 44,
    marginBottom: 6,
  },
  headerTagline: {
    color: C.gold,
    fontSize: 25,
    fontStyle: 'italic',
    letterSpacing: 0.5,
  },
  headerBio: {
    color: C.textSecond,
    fontSize: isNarrow ? 22 : 24,
    lineHeight: 22,
    borderLeftWidth: 2,
    borderLeftColor: C.accent,
    paddingLeft: 12,
    marginTop: 4,
  },

  // Sección 
  section: {
    paddingHorizontal: 20,
    paddingTop: 28,
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: C.border,
    marginLeft: 12,
  },
  subHeader: {
    color: C.textPrimary,
    fontSize: 25,
    fontWeight: '800',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: C.textPrimary,
    marginBottom: 16,
    letterSpacing: 0.3,
  },

  // Cards 
  cardChivas: {
    backgroundColor: C.surfaceAlt,
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: C.chivas,
    shadowColor: C.chivas,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  cardChivasAccent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: C.gold,
    letterSpacing: 0.5,
  },
  cardText: {
    color: C.textSecond,
    fontSize: 20,
    fontStyle: 'italic',
    lineHeight: 24,
  },

  //List Items 
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: C.surface,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: C.border,
  },

  listTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: C.textPrimary,
    marginBottom: 2,
  },
  listText: {
    color: C.textSecond,
    fontSize: 20,
    lineHeight: 20,
  },

  // Skills 
  skillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    gap: 8,
  },
  skillTag: {
    backgroundColor: 'transparent',
    color: C.accentGlow,
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 8,
    fontWeight: '700',
    fontSize: 13,
    borderWidth: 1,
    borderColor: C.accent,
    overflow: 'hidden',
  },

  // ── Galería ──────────────────────────────────────────────────────────────────
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  galleryImage: {
    width: (W - 40 - 6 * 2) / 3,   // 3 columnas con gaps
    height: (W - 40 - 6 * 2) / 3,
    borderRadius: 10,
    resizeMode: 'cover',
  },

  // Redes Sociales 
  socialButton: {
    backgroundColor: C.surface,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: C.border,
    alignSelf: 'flex-start',
    gap: 8,
  },
  socialText: {
    color: C.textPrimary,
    fontWeight: '700',
    fontSize: 18,
  },

  // Divider decorativo 
  divider: {
    height: 1,
    backgroundColor: C.border,
    marginHorizontal: 20,
    marginVertical: 8,
  },
});
