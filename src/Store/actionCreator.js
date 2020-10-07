import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
} from "./actionTypes.js";
import axios from 'axios'

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
export const getTodoList = () => {
  return (dispatch) => {
    axios
      .get(
        "https://www.fastmock.site/mock/96b7e89baa78750252e85c76d46d8cfe/list/api/list"
      )
      .then((res) => {
        const data = res.data.data;
        const action=initListAction(data.list)
        dispatch(action);
      });
  };
};
