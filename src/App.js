import { Route, Routes } from 'react-router-dom';
import Dasboard from './page/dasboard';
import Detail from './page/detail';
import Add from './page/add';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Button } from 'antd';


export const RootContex = createContext();

function App() {
  const [data, setData] = useState([{title : {nama : 'agung'}}])
  const [request, setRequest] = useState([])
  const [parameter, setParameter] = useState('')

  
  useEffect(() => {
    const storage = JSON.stringify(localStorage.getItem('data'))
    console.log(storage);
    localStorage.setItem('data', storage)
    setData(storage)
  }, [data])

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
