import {
  createAppContainer,
  NavigationActions,
  StackActions,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import Splash from './Splash';
// import Signup from './Signup';
import Login from './Login';
// import Home from './Home';

const AuthStack = createStackNavigator(
  {
    Login: Login,
    // CreateAccount: Signup,
  },
  {
    initialRouteName: 'Login',
    mode: 'modal',
    headerMode: 'none',
  },
);

const MainNavigator = createStackNavigator(
  {
    // Splash: Splash,
    Auth: AuthStack,
    // App: Home,
  },
  {
    initialRouteName: 'Auth',
    mode: 'modal',
    headerMode: 'none',
  },
);

const Main = createAppContainer(MainNavigator);

export default Main;
