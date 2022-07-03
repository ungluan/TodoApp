import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import TodoItem from './TodoItem';
import {createStore, combineReducers} from 'redux';
import {connect} from 'react-redux';

function TodoScreen(props) {
  console.log(JSON.stringify(props));
  const {data} = props.data;
  const [searchText, setSearchText] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          height: 60,
          // justifyContent: 'center',
          marginHorizontal: 16,
          borderRadius: 12,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder={'Search foods'}
          onChangeText={text => setSearchText(text)}
          style={{
            flex: 1,
            borderWidth: 1,
            borderRadius: 12,
            height: 45,
            color: 'black',
            paddingLeft: 34,
            marginEnd: 12,
          }}
        />
        <Button title="Add" onPress={() => alert('Add')} />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          key={item => item.title}
          renderItem={({item}) => <TodoItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

export default connect(state => {
  return {
    data: state,
  };
},
dispatch => {
    return {
        onFinishedItem: (index) => dispatch(finishTask(index)),
        onDeleteItem: (index) => dispatch(deleteTask(index))
    }
}
)(TodoScreen);
