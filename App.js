import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style= {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}>Daily tasks</Text>
    
        <View style={styles.items}></View>
        <Task text ={'Task 1'} />
      
        <Task text={'Task 2'} />
        
    </View>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AFEEEE',

  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
sectionTitle:{
  frontSize:24,
  frontWeight:'bold',
},
items:{
  marginTop: 30,
},
});
