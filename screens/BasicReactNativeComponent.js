import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function BasicComponentPage({ navigation }) {
  // 使用 useState 來管理計數器的狀態
  const [count, setCount] = useState(0);

  // 處理按鈕按下事件的方法
  const handlePress = () => {
    setCount(count + 1); // 將 count + 1
  };
  const handlePress2 = () => {
    alert('Button Pressed!');
  };

  return (
    <ScrollView style={styles.body}>
      {/* <View style={styles.header}></View> */}

      {/* 計數器 */}
      <View style={styles.section}>
        <Text style={styles.title}>我的計數器</Text>
        <View style={styles.container}>

          <Text style={[styles.countText, styles.blue]}>{count}</Text>
          <Button title="增加" onPress={handlePress} />
        </View>
        <Text>前往Show Page</Text>
        <Button
            title="前往Show Page"
            onPress={() => navigation.navigate('ShowPage', { times: count })}
        />

      </View>

      {/* 放入照片測試 */}
      <View style={styles.section}>
        <Text style={styles.title}>放入照片測試</Text>
        <View style={styles.imgContainer}>

          <Image
            style={styles.img}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          />
        </View>
        <View style={styles.imgContainer}>

          <Image
            style={styles.img}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          />
        </View>
      </View>

      {/* 按鈕 */}
      <View style={styles.section}>
        <Text style={styles.title}>按鈕測試</Text>
        <Text>:TouchableOpacity</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress2}>
          <Text style={styles.buttonText}>Press Me</Text>
        </TouchableOpacity>
      </View>

      {/* 滑動區段 */}

      <View style={styles.section}>
        <Text style={styles.title}>滑動區段</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>Item 1</Text>
          <Text style={styles.text}>Item 2</Text>
          <Text style={styles.text}>Item 3</Text>
          <Text style={styles.text}>Item 3</Text>
          <Text style={styles.text}>Item 3</Text>
          <Text style={styles.text}>Item 3</Text>
          <Text style={styles.text}>Item 3</Text>
          <Text style={styles.text}>Item 3</Text>
          <Text style={styles.text}>Item 3</Text>
          {/* More items */}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

// 樣式設定
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
    height: 300,
  },
  text: {
    fontSize: 18,
    margin: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
  },
  section: {
    marginBottom: 30,
  },
  body: {
    padding: 20,
  },
  header: {
    height: 50,
  },
  img: {
    width: 100,
    height: 100,
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
  },
  blue: {
    color: 'blue',
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
  },
  countText: {
    fontSize: 24,
    marginBottom: 20,
  },
});
