import React from 'react';
import './resource/base.css';
import { Outlet, useNavigate } from "react-router-dom"
export default function App() {
  let navigate = useNavigate();
  function toLogin() {
    navigate('/login')
  }
  function toList() {
    navigate('/list')
  }
  return (
    <div>
      <div onClick={toLogin}>登录</div>
      <div onClick={toList}>列表</div>
      <Outlet />
    </div>
  )
}