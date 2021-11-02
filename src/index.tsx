import React from "react";
import ReactDOM from "react-dom";
import "./css/reset.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
const BodyBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #e7f5ff;
`;
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BodyBackground>
        <App />
      </BodyBackground>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
