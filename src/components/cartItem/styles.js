import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: theme.colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 10,
  },
  headerContainer: {
    marginBottom: 5,
  },
  titleHeader: {
    color: theme.colors.black,
    fontSize: 22,
    fontFamily: theme.fontsFamily.title,
  },
  containConteiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
  },
  quantity: {
    color: theme.colors.black,
    fontSize: 18,
    marginRight: 30,
    fontFamily: theme.fontsFamily.text,
  },
  price: {
    color: theme.colors.black,
    fontSize: 18,
    fontFamily: theme.fontsFamily.text,
  },
});
