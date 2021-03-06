import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp22178795Navigator from '../features/SignUp22178795/navigator';
import SignIn43178794Navigator from '../features/SignIn43178794/navigator';
import Settings4178793Navigator from '../features/Settings4178793/navigator';
import NotificationList6178791Navigator from '../features/NotificationList6178791/navigator';
import Messaging7178790Navigator from '../features/Messaging7178790/navigator';
import Camera9178788Navigator from '../features/Camera9178788/navigator';
import Tutorial10178787Navigator from '../features/Tutorial10178787/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp22178795: { screen: SignUp22178795Navigator },
SignIn43178794: { screen: SignIn43178794Navigator },
Settings4178793: { screen: Settings4178793Navigator },
NotificationList6178791: { screen: NotificationList6178791Navigator },
Messaging7178790: { screen: Messaging7178790Navigator },
Camera9178788: { screen: Camera9178788Navigator },
Tutorial10178787: { screen: Tutorial10178787Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
