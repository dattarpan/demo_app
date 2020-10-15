import {
  createAppContainer,
  NavigationActions,
  StackActions,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import Splash from './Splash';
import Signup from './src/Signup';
import Login from './src/Login';
import Home from './src/Home';
import Profile from './src/Profile';

const AuthStack = createStackNavigator(
  {
    Login: Login,
    CreateAccount: Signup,
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
    App: Home,
    Profile: Profile
  },
  {
    initialRouteName: 'Auth',
    mode: 'modal',
    headerMode: 'none',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
