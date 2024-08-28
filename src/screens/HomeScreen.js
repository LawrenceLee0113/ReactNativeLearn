// screens/HomeScreen.js
import React from 'react';
import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Home Screen</Text> */}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="前往基本元件頁面"
        onPress={() => navigation.navigate('Basic')}
      />
      
    </View>
  );
}
