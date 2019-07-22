import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const encyclopediaStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  detailRow: {
    flexDirection: 'row',
    minHeight: 24,
    marginBottom: 8,
    alignItems: 'center',
  },
  noMargin: {
    marginBottom: 0,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  lifeForm: {
    borderWidth: 1,
    borderRadius: 5,
  },
  galleryPhoto: {
    width: 128,
    height: 128,
    marginRight: 16,
  },
  overlayButton: {
    position: 'absolute',
  },
  overlayButtonTop: {
    top: 15,
  },
  overlayButtonBottom: {
    bottom: 15,
  },
  overlayButtonRight: {
    right: 15,
  },
  overlayButtonLeft: {
    left: 15,
  },
  overlay: {
    backgroundColor: colors.overlayBackground,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1000,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tropicosButton: {
    padding: 8,
    backgroundColor: colors.primary100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tropicosLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default encyclopediaStyles;
