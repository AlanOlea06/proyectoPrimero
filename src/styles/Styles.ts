import { Dimensions, StyleSheet } from 'react-native';

// ─── Utilidades de pantalla ───────────────────────────────────────────────────
const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

const isNarrow = SCREEN_W < 600;
const isMedium = SCREEN_W >= 600 && SCREEN_W < 900;

const CARD_W     = isNarrow ? '100%' : isMedium ? '44%' : '30%';
const CARD_MIN_H = isNarrow ? SCREEN_H * 0.35 : 240;
const FONT_NAME  = isNarrow ? 26 : 28;
const FONT_DESC  = isNarrow ? 18 : 18;

// Altura fija para la barra superior de la tarjeta (imagen + nombre)
// ¡IMPORTANTE! Debe ser un número, no porcentaje, para que height:'100%' en imagen funcione
const TOP_BAR_H  = isNarrow ? 110 : 120;
const IMG_W      = isNarrow ? 110 : 120;

export const Styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  inicio: {
    flex: 1,
    flexDirection: isNarrow ? 'column' : 'row',
    flexWrap: isNarrow ? 'nowrap' : 'wrap',
    justifyContent: isNarrow ? 'flex-start' : 'center',
    alignItems: isNarrow ? 'stretch' : 'flex-start',
    paddingVertical: 16,
    paddingHorizontal: isNarrow ? 14 : 0,
  },

  tarjeta: {
    backgroundColor: '#0b9387',
    width: CARD_W,
    minHeight: CARD_MIN_H,
    borderRadius: isNarrow ? 16 : 20,
    marginVertical: isNarrow ? 10 : 8,
    marginHorizontal: isNarrow ? 0 : 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 18,
  },

  topBarTarjeta: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: '100%',
    height: TOP_BAR_H,      // ← número fijo, no minHeight ni porcentaje
    alignItems: 'center',
  },

  imagen: {
    width: IMG_W,
    height: TOP_BAR_H,      // ← mismo número que el contenedor, no '100%'
    resizeMode: 'cover',
  },

  tarjetaName: {
    fontSize: FONT_NAME,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'OdorMeanChey',
    flexShrink: 1,
    paddingHorizontal: 10,
  },

  tarjetaBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: isNarrow ? 16 : 20,
    fontFamily: 'OdorMeanChey',
    fontSize: FONT_DESC,
  },
});
