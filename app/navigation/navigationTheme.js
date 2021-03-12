import { DefaultTheme } from '@react-navigation/native';
import colors from '../config/colors';

// override default navigation theme color
export default {
  // copy default theme and change color
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,   // override top left menu color
    background: "white"
  }
}