import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//import { createSwitchNavigator } from 'react-navigation-stack';

import WelcomenScreen from './src/WelcomeScreen';
import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';
import Internal from './src/Inrenal';
import External from './src/External';
import ProjectSpecified from './src/ProjectSpecified';
import Report from './src/Report';


const App = createSwitchNavigator({

  WelcomenScreen: WelcomenScreen,
  Screen1: Screen1,
  Screen2: Screen2,
  Internal: Internal,
  External: External,
  ProjectSpecified: ProjectSpecified,
  Report: Report,
}
);

export default createAppContainer(App);


