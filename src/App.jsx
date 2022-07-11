import React from 'react';
import { Button } from 'antd';
import './resource/base.css';
import {Outlet } from "react-router-dom"
export default function App(){
  return (
    <div>
       <Button type="primary">Button</Button>
       <Outlet/>
    </div>
  )
}