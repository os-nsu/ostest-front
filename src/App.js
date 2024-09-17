"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_svg_1 = require("./assets/react.svg");
var vite_svg_1 = require("/vite.svg");
var Bars_tsx_1 = require("./components/Bars.tsx");
var Appbar_tsx_1 = require("./components/Appbar.tsx");
require("./App.css");
function App() {
    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
    var a = 10;
    a = 'dfsdfsdf';
    a = {};
    console.log('err');
    return (<>
      <Appbar_tsx_1.default />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={vite_svg_1.default} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={react_svg_1.default} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Vite + React + MUI + Axios</h1>
      <div className="card">
        <Bars_tsx_1.default />
      </div>
      <div className="card">
        <button onClick={function () { return setCount(function (count) { return count + 1; }); }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>);
}
exports.default = App;
