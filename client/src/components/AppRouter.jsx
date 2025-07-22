import React, { useContext } from 'react';
import {Switch, Route, Redirect, Routes, Navigate} from "react-router-dom"
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '..';

const AppRouter = () => {
  const {user, device} = useContext(Context)
  console.log(user);
  
  return (
    <Routes>
        {user.isAuth && authRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element}/>
        ))}
        {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element}/>
        )
        )}
        <Route path="*" element={<Navigate to="/" replace/>}/>
    </Routes>
  );
};

export default AppRouter;