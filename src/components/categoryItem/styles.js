import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  containerGridItem: {
    flex: 1,
    borderRadius: 6,
    margin: 15,
    height: 130,
    width: 130,
  },
  container: {
    flex: 1,
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  titleButton: {
    fontFamily: theme.fontsFamily.buttons,
    fontSize: 20,
  },
});
