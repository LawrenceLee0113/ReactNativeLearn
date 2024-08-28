import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function ShowPage({ route, navigation }) {
    const { times } = route.params;

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: `點擊 ${times} 次(傳遞參數)`,
        });
    }, [navigation, times]);

    return (
        <View>
            <Text style={styles.title}>這是 Show 頁面</Text>
            <Text>
                您剛剛點擊的次數是
                <Text style={{ color: 'red',fontWeight:"700",fontSize:24 }}> {times} </Text>
                次
            </Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        marginBottom: 10,
    },
});