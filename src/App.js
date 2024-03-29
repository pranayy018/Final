import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Doctor, Patient, Register} from "./Container";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadAccount,
  loadMedicalStorage,
  loadNetwork,
  loadProvider,
  subscribeToEvents,
} from "./Store/Interactions";
import config from "./config.json";
import { Alert } from "./Components";
import Login from "./Container/Login/Login";
import Home from "./Container/Home/Home";
function App() {
  const dispatch = useDispatch();
  const loadBlockchainData = async () => {
    const provider = loadProvider(dispatch);
    const chainId = await loadNetwork(provider, dispatch);
    window.ethereum.on("accountChanged", () => {
      loadAccount(provider, dispatch);
    });
    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });
    const medicalStorage = loadMedicalStorage(
      provider,
      config[chainId].MedicalStorage.address,
      dispatch
    );
    subscribeToEvents(medicalStorage, dispatch);
  };
  useEffect(() => {
    loadBlockchainData();
  });
  return (
    <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Patient" element={<Patient />}></Route>
          <Route path="/Doctor" element={<Doctor />}></Route>
        </Routes>
          <Alert />

    </div>
  );
}

export default App;
