import { Route, Routes } from 'react-router-dom';
import Dasboard from './page/dasboard';
import Detail from './page/detail';
import Add from './page/add';
import { createContext, useEffect, useState } from 'react';

export const RootContex = createContext();

function App() {
  const [data, setData] = useState([])
  const [request, setRequest] = useState([])
  const [parameter, setParameter] = useState('')

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('data')))
    setParameter(JSON.parse(localStorage.getItem('index')))
  }, [])

  return (
    <RootContex.Provider value={{data,setData, request, setRequest, parameter, setParameter}} >
      <Routes>
          <Route path='/' element = {<Dasboard />} />
          <Route path='/detail' element = {<Detail />} />
          <Route path='/add' element = {<Add />} />
      </Routes>
    </RootContex.Provider>
  );
}

export default App;
