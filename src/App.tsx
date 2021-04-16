import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

export function App() {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar/>
      <Content/>
    </div>
  )
}