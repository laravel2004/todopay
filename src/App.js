import { Route, Routes } from "react-router-dom";
import Dasboard from "./page/dasboard";
import Detail from "./page/detail";
import Add from "./page/add";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Button } from "antd";

export const RootContex = createContext();

function App() {
  const [data, setData] = useState([]);
  const [request, setRequest] = useState([]);
  const [parameter, setParameter] = useState("");

  useEffect(() => {
    var retrievedObject = localStorage.getItem("data");
    var json = JSON.parse(retrievedObject);
    console.log("json: ", json);
    if (json) {
      setData(json);
    }
  }, []);

  return (
    <RootContex.Provider
      value={{ data, setData, request, setRequest, parameter, setParameter }}
    >
      <Routes>
        <Route path="/" element={<Dasboard />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </RootContex.Provider>
  );
}

export default App;
