import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    fontFamily: theme.fontsFamily.title,
    fontSize: 20,
    paddingBottom: 20,
  },
  details: {
    fontFamily: theme.fontsFamily.text,
    fontSize: 18,
    padding: 5,
  },
});
