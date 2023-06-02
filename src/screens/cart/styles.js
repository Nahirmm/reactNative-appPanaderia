import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  footerContainer: {
    backgroundColor: theme.colors.primary,
    padding: 10,
  },
  buttonDisabled: {
    padding: 20,
    backgroundColor: theme.colors.grey,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonConfirm: {
    padding: 20,
    backgroundColor: theme.colors.white,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textButtonConfirm: {
    fontSize: 18,
    fontFamily: theme.fontsFamily.text,
  },
  totalContainer: {},
  textTotal: {
    fontSize: 18,
    fontFamily: theme.fontsFamily.buttons,
  },
});
