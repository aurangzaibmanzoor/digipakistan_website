import React from "react";
import ReactDOM from "react-dom";
import "./styles/Styles.scss";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import fbConfig from "./config/fbConfig";
import "animate.css";
import "@fortawesome/fontawesome-free/css/all.css";

const store = createStore(
  rootReducer,
  compose(
    reactReduxFirebase(fbConfig, {
      attachAuthIsReady: true,
      useFirestoreForProfile: true,
      userProfile: "users",
    }),
    reduxFirestore(fbConfig),
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

window.onbeforeunload = () => {
  window.sessionStorage.removeItem("First Load");
  window.sessionStorage.removeItem("Msg");
};

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});
