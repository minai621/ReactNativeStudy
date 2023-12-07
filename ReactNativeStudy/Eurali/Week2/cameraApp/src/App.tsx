import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';
import {requestPermissions} from './utils/requestPermissions';
import AddButton from './components/AddButton';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheetComp from './components/BottomSheet';
import StackNavigation from './navigators/Stack';
import useStore from './store';

function App(): JSX.Element {
  const isHome = useStore(state => state.isHome);

  useEffect(() => {
    setTimeout(async () => {
      SplashScreen.hide();
      await requestPermissions(Platform.OS);
    }, 1000);
  });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <BottomSheetComp />
        {/* <TabNavigation /> */}
        <StackNavigation />
      </NavigationContainer>
      {isHome && <AddButton />}
    </GestureHandlerRootView>
  );
}

export default App;
