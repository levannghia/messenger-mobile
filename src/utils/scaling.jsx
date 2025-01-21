import { Dimensions, StatusBar } from "react-native";

export const screensWidth = Dimensions.get('window').width;
export const screensHeight = Dimensions.get('window').height;
export const statusBarHeight = StatusBar.currentHeight;