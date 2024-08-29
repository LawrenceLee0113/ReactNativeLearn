import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { ThemeContext } from '@context/ThemeContext';
import ThemedButton from '@components/ThemedButton';
import HomeScreen from '@screens/HomeScreen';
// import { Provider } from 'react-redux';
// import store from '@store';
import ReduxPage from '@screens/ReduxPage';




export default function ThemeChagePage() {
    const { theme, toggleTheme } = useContext(ThemeContext);


    return (
        <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}>
            <View>

                <Text style={{ fontSize: 16, fontWeight: "400" }}>全局變數修改有兩種：Context、Redux</Text>
                <Text>* Context：React Native內建，輕量化、易上手，適合簡單</Text>
                <Text>* Redux：社群支持第三方套件工具，有很多功能，學習曲線較大，適合大專案</Text>
            </View>
        
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>


            <View style={{marginBottom:40}}>

                <Text style={{ fontSize: 16, fontWeight: "600" }}>這裡使用 Context</Text>
                <Text>Current Theme: {theme.mode}</Text>
                <Button title="Toggle Theme" onPress={() => toggleTheme()} />
                <ThemedButton>
                    123456
                </ThemedButton>
            </View>
            
            <View>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>這裡使用 Redux</Text>

                    <ReduxPage />
            </View>
        </View>

        </View>
    );
}

