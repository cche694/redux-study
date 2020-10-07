import React, { Component } from "react";
import { Input } from "antd";
import { Button } from "antd";
import { List } from "antd";
const TodoListUI = (props) => {
  return (
    <div>
      <Input
        placeholder="todo"
        style={{ width: 300 }}
        value={props.inputValue}
        onChange={(e) => {
          props.onInputChange(e);
        }}
      ></Input>
      <Button
        type="primary"
        style={{ marginLeft: 20 }}
        onClick={props.btnOnClick}
      >
        Primary Button
      </Button>
      <List
        style={{ width: 300, marginTop: 20 }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              props.deleteItem(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoListUI;
