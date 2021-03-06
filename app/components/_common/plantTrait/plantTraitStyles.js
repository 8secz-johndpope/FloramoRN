import { StyleSheet } from 'react-native';

const plantTraitStyles = StyleSheet.create({
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
  withBorder: {
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default plantTraitStyles;
