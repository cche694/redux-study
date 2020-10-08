import React, { Component } from "react";
import store from "./Store";
import {changInputValue,addTodoItem,deleteTodoItem,initListAction,getInitList} from './Store/actionCreator.js'
import TodoListUI from "./TodoListUI";
import axios from "axios"



class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }
  componentDidMount(){
    const action=getInitList()
    console.log(action)
    store.dispatch(action)
  }
  onInputChange(e) {
    const action=changInputValue(e.target.value)
    store.dispatch(action);
  }
  handleStoreChange = () => {
    this.setState(store.getState());
  };
  btnOnClick = () => {
   const action=addTodoItem()
    store.dispatch(action);
  };
  deleteItem(index) {
    const action=deleteTodoItem(index)
    store.dispatch(action);
  }
  render() {
    return (
     <TodoListUI
     onInputChange={(e)=>{this.onInputChange(e)}}
     btnOnClick={this.btnOnClick}
     deleteItem={(index)=>{this.deleteItem(index)}}
     list={this.state.list}
     inputValue={this.state.inputValue}/>
    );
  }
}

export default TodoList;
