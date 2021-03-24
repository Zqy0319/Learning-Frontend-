import React from "react";
import "./Styles.css";
import 'antd/dist/antd.css';
import { Input, Space } from "antd";
const { Search } = Input;

const onSearch = (value) => console.log(value);

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function CustomLinkExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/pageA">page A</Link>
          </li>
          <li>
            <Link to="/pageB">page B</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/pageA">
            <PageA />
          </Route>
          <Route path="/pageB">
            <PageB />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const PageA = () => (
  <div style={{ position: "relative", left: 30 }}>
    <h1>This is page A</h1>
    <Space direction="vertical">
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{ width: 200}}
      />
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        enterButton
        style={{ width: 200 }}
      />
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </Space>
  </div>
);  

function PageB() {
  return (
    <div>
      <h2>This is Page b</h2>
    </div>
  );
}
