// screens/HomeScreen.js
import React , { useContext } from 'react';
import { Button, View, Text } from 'react-native';
import { ThemeContext } from '@context/ThemeContext';


import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/actions/themeActions';


export default function HomeScreen({ navigation }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // if (!theme || !setTheme) {
  //     console.error('ThemeContext is not defined correctly');
  //     return null;
  // }

  
  const redux_theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{ redux_theme }</Text>
      <Button
        title="Go to Details"
        color={theme.textColor}
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="前往基本元件頁面"
        color={theme.textColor}
        
        onPress={() => navigation.navigate('Basic')}
      />
    </View>
  );
}
