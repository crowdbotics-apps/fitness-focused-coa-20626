import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList108391Navigator from '../features/NotificationList108391/navigator';
import Settings108390Navigator from '../features/Settings108390/navigator';
import Settings108382Navigator from '../features/Settings108382/navigator';
import UserProfile108380Navigator from '../features/UserProfile108380/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList108391: { screen: NotificationList108391Navigator },
Settings108390: { screen: Settings108390Navigator },
Settings108382: { screen: Settings108382Navigator },
UserProfile108380: { screen: UserProfile108380Navigator },

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
