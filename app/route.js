import { createStackNavigator } from "react-navigation";
import HomeScreen from "./components/Home";
import ProfileScreen from "./components/Profile";

export default MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);