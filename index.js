/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {TodoScreen} from './src/screens/index';
import {Provider} from 'react-redux';
import React from 'react';
import {createStore, combineReducers} from 'redux';

// state
let appState = {
  data: [
    {title: 'Go to the office', isFinished: true},
    {title: 'Prepare tasks for today', isFinished: false},
    {title: 'Team meeting', isFinished: false},
    {title: 'Commit tasks changed', isFinished: false},
  ],
};
// Action
const finishTask = index => {
  return {
    type: 'FINISHED',
    atIndex: index,
  };
};
const deleteTask = index => {
  return {
    type: 'DELETE',
    atIndex: index,
  };
};
// Reducer
const taskListReducer = (state = appState, action) => {
  switch (action.type) {
    case 'FINISHED': {
      let newList = state.data;
      newList[action.atIndex].isFinished = true;
      state = {
        ...state,
        data: newList,
      };
    }
    case 'DELETE': {
      let newList = state.data;
      newList = newList.filter((item, i) => i !== action.atIndex);
      state = {
        ...state,
        data: newList,
      };
    }
    default:
      state;
  }
  return state;
};

const reducer = combineReducers({
  taskListReducer: taskListReducer,
});
// Store
const store = createStore(taskListReducer);
console.log('al ' + store.state);

AppRegistry.registerComponent(appName, () => () => (
  <Provider store={store}>
    <TodoScreen />
  </Provider>
));
