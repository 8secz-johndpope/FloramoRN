import { Platform } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../../styles/colors';

const nthHeaderStyles = ScaledSheet.create({

  container: {
    borderBottomColor: colors.gray2,
    borderTopColor: colors.transparent,
    borderLeftColor: colors.transparent,
    borderRightColor: colors.transparent,
    borderWidth: 0.25,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowColor: colors.gray1,
        shadowOffset: { height: 2, width: 0 },
        alignItems: 'center',
      },
      android: {
        alignItems: 'flex-start',
        paddingLeft: '20@s',
        elevation: 8,
      },
    }),
  },

  containerWithBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 0,
    ...Platform.select({
      ios: {
        justifyContent: 'space-between',
        paddingTop: '15@vs',
      },
      android: {
        justifyContent: 'flex-start',
      },
    }),
  },

  backButton: {
    marginLeft: 15,
    paddingHorizontal: 15,
    height: '100%',
    justifyContent: 'center',
    ...Platform.select({
      ios: {},
      android: {
        marginRight: 15,
      },
    }),
  },

});

export default nthHeaderStyles;
