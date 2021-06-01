import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  return (
    <div>
      <Navbar />
      <h5>This is login form working.. coming soon...</h5>
      <h1 style={{ textAlign: "center", color: "red" }}>
        Gousol Azam Divine Mission
      </h1>
    </div>
  );
};

export default Login;
