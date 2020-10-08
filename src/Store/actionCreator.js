import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
  GET_INIT_LIST
} from "./actionTypes.js";


export const changInputValue = (index) => ({
  type: CHANGE_INPUT_VALUE,
  value: index,
});
export const addTodoItem = () => {
  return {
    type: ADD_TODO_ITEM,
  };
};
export const deleteTodoItem = (index) => ({
  type: DELETE_TODO_ITEM,
  index: index,
});
export const initListAction = (listdata) => {
  return {
    type: INIT_LIST_ACTION,
    list: listdata,
  };
};
export const getInitList=()=>{
  return {
    type:GET_INIT_LIST
  }
}

