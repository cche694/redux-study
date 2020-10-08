import React, { Component } from "react";
import { Input, Button, List } from "antd";
import { Row, Col } from "antd";
import "./index.css";
import store from "../Store/index.js";
import { connect } from "react-redux";
import {
  changInputValue,
  addItem,
  deleteItem,
} from "../Store/actionCreator.js";

const TodoList = (props) => {
  return (
    <div className="wrapper">
      <Row gutter={[16, 16]}>
        <Col span={5}>
          <Input
            onChange={(e) => {
              props.onValueChange(e);
            }}
            onKeyUp={(e) => {
              props.onKeyUp(e);
            }}
            value={props.inputValue}
          />
        </Col>
        <Col span={5} offset={1}>
          <Button
            type="primary"
            onClick={() => {
              props.handleBtnClick();
            }}
          >
            Primary Button
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={5}>
          <List
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
              <List.Item
                onClick={() => {
                  props.handleDelete(index);
                }}
              >
                {item}
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};
// store.dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    onValueChange(e) {
      const action = changInputValue(e.target.value);
      dispatch(action);
    },
    handleBtnClick() {
      const action = addItem();
      dispatch(action);
    },
    onKeyUp(e) {
      if (e.keyCode === 13) {
        this.handleBtnClick();
      }
    },
    handleDelete(index) {
      const action = deleteItem(index);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
