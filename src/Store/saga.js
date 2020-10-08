import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from "./actionCreator";
import axios from "axios";

function* todoSagas() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}
function* getInitList() {
  try {
    const res = yield axios.get(
      "https://www.fastmock.site/mock/96b7e89baa78750252e85c76d46d8cfe/list/api/list"
    );
    const data = res.data.data;
    const action = initListAction(data.list);
    yield put(action);
  } catch (errMsg) {
      console.log(errMsg)
  }
}

export default todoSagas;
