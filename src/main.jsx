import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { nerdStore, persistor } from "../app/store.js";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={nerdStore}>
      <App />
    </Provider>
  </PersistGate>
);
