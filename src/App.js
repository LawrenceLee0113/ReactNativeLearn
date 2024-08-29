import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '@screens/HomeScreen';
import DetailsScreen from '@screens/DetailsScreen';
import BasicComponentPage from '@screens/BasicReactNativeComponent';
import ShowPage from '@screens/Show';
import ThemeChagePage from '@screens/ThemeChagePage';
import FetchPage from '@screens/FetchPage';

// 基本跳轉
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// 下方跳轉
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { ThemeProvider } from '@context/ThemeContext';

// 側邊跳轉
// import { createDrawerNavigator } from '@react-navigation/drawer';
// const Drawer = createDrawerNavigator();


import store from '@store';
import ReduxPage from '@screens/ReduxPage';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <ThemeProvider>{/* 這裡是全局變數Context */}
      <Provider store={store}>{/* 這裡是全局變數Redux */}
      <NavigationContainer>

        {/* 基本的導覽頁跳轉 */}
        {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '首頁' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: '轉跳頁面(範例)' }}/>
        <Stack.Screen name="Basic" component={BasicComponentPage} options={{ title: '基本元件範例頁面' }}/>
        <Stack.Screen name="ShowPage" component={ShowPage} options={{ title: '參數傳遞範例頁面' }}/>
      </Stack.Navigator> */}


        {/* 下方選單導覽頁跳轉 */}
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={{ title: '首頁' }} />
          <Tab.Screen name="Basic" component={BasicComponentPage} options={{ title: '元件' }} />
          <Tab.Screen name="ThemeChagePage" component={ThemeChagePage} options={{ title: '全局變數' }} />
          <Tab.Screen name="FetchPage" component={FetchPage} options={{ title: '獲取API' }} />
        </Tab.Navigator>

        {/* 側邊選單導覽頁跳轉 失敗 */}
        {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="BasicComponentPage" component={BasicComponentPage} />
      </Drawer.Navigator> */}
      </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}