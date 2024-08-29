import React from "react";
import { View , Text, Button } from "react-native";

import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/actions/themeActions';

export default function ReduxPage() {
    
  
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();
    return (
        <View>
            <Text>Current Theme: {theme}</Text>
            <Button title="Toggle Theme" onPress={() => dispatch(toggleTheme())} />
        </View>
    );
}
