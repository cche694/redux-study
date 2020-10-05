import React, { Component } from "react";
import { Input } from "antd";
import { Button } from "antd";
import { List } from "antd";
import store from "./Store";

class TodoList extends Component {
  constructor(props) {
    super(props);
    
    this.state = store.getState();
    store.subscribe(this.handleStoreChange)
  }
  onInputChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value,
    };
    store.dispatch(action)
  }
  handleStoreChange=()=>{
    console.log('store change')
    this.setState(store.getState())
  }
  render() {
    return (
      <div>
        <Input
          placeholder="todo"
          style={{ width: 300 }}
          value={this.state.inputValue}
          onChange={(e) => {
            this.onInputChange(e);
          }}
        ></Input>
        <Button type="primary" style={{ marginLeft: 20 }}>
          Primary Button
        </Button>
        <List
          style={{ width: 300, marginTop: 20 }}
          bordered
          dataSource={this.state.list}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}

export default TodoList;
