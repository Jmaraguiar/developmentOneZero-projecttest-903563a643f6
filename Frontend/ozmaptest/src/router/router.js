import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { UserList } from "../pages/UserList";
import { UserUpdate } from "../pages/UserUpdate";





function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<MainPage/>}/>
          <Route path="/userlist" element={<UserList/>}/>
          <Route path="/userUpdate/:id" element={<UserUpdate/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;