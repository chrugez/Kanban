import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForgotPassword, Login, SignUp } from "../pages";

const AuthRouter = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 h-full">
      <div className="hidden md:flex items-center justify-center">
        <img src="src/assets/Logo_Large.png" alt="logo" />
      </div>
      <div className="flex items-center justify-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default AuthRouter;
