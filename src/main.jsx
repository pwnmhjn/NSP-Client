import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { nerdStore } from "../app/store.js";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={nerdStore}>
    <App />
  </Provider>
);
