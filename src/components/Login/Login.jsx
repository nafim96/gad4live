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
      <h1>This is login form working.. coming soon...</h1>
    </div>
  );
};

export default Login;
