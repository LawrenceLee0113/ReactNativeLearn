// src/screens/DataFetchingScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';

const DataFetchingScreen = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    // Axios

    const [axiosData, setAxiosData] = useState(null);
    const [axiosLoading, setAxiosLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setAxiosData(response.data);
                setAxiosLoading(false);
            })
            .catch(error => {
                console.error(error);
                setAxiosLoading(false);
            });
    }, []);

    if (loading || axiosLoading) {
        return <ActivityIndicator />;
    }

    return (
        <View>
            <View style={{ height: "50%", padding: 20 }}>
                <Text style={{fontSize:16,fontWeight:"400",marginBottom:20}}>Fetch API</Text>
                <ScrollView>
                    {data.map(item => (
                        <View key={item.id}>
                            <Text>USER ID: {item.id}</Text>
                            <Text>TITLE: {item.title}</Text>
                            <Text></Text>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={{ height: "50%", padding: 20 }}>

                <Text style={{fontSize:16,fontWeight:"400",marginBottom:20}}>Axios</Text>
                <ScrollView>
                    {axiosData.map(item => (
                        <View key={item.id}>
                            <Text>USER ID: {item.id}</Text>
                            <Text>TITLE: {item.title}</Text>
                            <Text></Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

export default DataFetchingScreen;
