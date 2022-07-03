import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'

function TodoItem(props){
    const {item} = props

    return <View style={ styles.itemContainer }>
    <View>
      <TouchableOpacity style={{ marginTop: -2 }} onPress={ () => alert('Finished')  }>
        <Text> { (item.isFinished) ? `✅` : `🕘` } </Text>
      </TouchableOpacity>
    </View>
    <View style={{ flex: 1 }}>
      <Text style={{ color: 'black'}}>{item.title}</Text>
    </View>
    <View style={{ justifyContent: 'center' }}>
      <TouchableOpacity style={{ marginTop: -2 }} onPress={ () => alert('Delete') }>
        <Text>{`❌`}</Text>
      </TouchableOpacity>
    </View>
  </View>
}
const styles = StyleSheet.create({
    itemContainer : {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      marginHorizontal : 10,
      marginTop: 10,
      paddingHorizontal: 10,
      paddingVertical: 15,
      borderRadius: 5,
      borderColor: 'gray',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowColor: 'gray',
      elevation: 2
    }
  });
export default TodoItem