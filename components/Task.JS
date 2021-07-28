import React from 'reat';
import { ViewBase, Text, StyleSheet } from 'react-native';

const Task = (props) => {
    return (
        <View style = {styles.item}>
          <View style={styles.itemLest}>
            <View style = {stayles.square}></View>
            <Text style = {styles.itemText}>{props.text}</Text>
           </View>
           <View style = {styles.circular}></View>
        </View>

    )
}

const styles =StyleSheet.creat({
   item:{
       backgroundColor : '#FFF',
       padding :15,
       borderRedius:10,
       flexDirection :'row',
       alignItems:'center',
       justifyContent:'sapce-between',
       marginBottom:20,
   },
   itemLeft:{
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap'
    

   },
   square:{
    width: 24,
    hight:24,
    backgroundColor: '#55BCF6',
    opacity : 0.4,
    borderRedius: 5,
    marginRight:15,
   },
   itemText:{
       maxWidth:'80%',
   },
   circular:{
       width:12,
       height:12,
       borderColor:'#55BCF6',
       borderWidth:2,
       borderRadius:5,
   },
});

export default Task;