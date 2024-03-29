import React, { useState } from "react";
import "./login.css";
import down from "../../data/doc.png"
import {
  checkDoctorAlreadyExists,
  checkPatientAlreadyExists,
  loadAccount,
} from "../../Store/Interactions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const medicalStorage = useSelector((state) => state.MedicalStorage.contract);
  const provider = useSelector((state) => state.Provider.connection);
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("patient");
  const submitHandler = async (e) => {
    e.preventDefault();
    await loadAccount(provider, dispatch);
    if (loginType === "patient") {
      const patientLogin = await checkPatientAlreadyExists(
        provider,
        medicalStorage
      );
      if (patientLogin) {
        navigate("/Patient", {
          state: {},
        });
      } else {
        alert("You are not registered as a patient, please register first");
      }
    } else {
      const doctorLogin = await checkDoctorAlreadyExists(
        provider,
        medicalStorage
      );

      if (doctorLogin) {
        navigate("/Doctor", {
          state: {},
        });
      } else {
        alert("You are not registered as a doctor, please register first");
      }
    }
  };
  return (
    <div className="loginPage">
      <div className="container-main" id="loginPage">
        <h2 className="title">Login</h2>
        <form onSubmit={submitHandler} className="form">
          <div className="form-group">
            <p>Are you a ?</p>
            <div className="inputContainer">
              <img className="down" alt="down-arrow" src={down}></img>
              <select
                name="loginAs"
                onChange={(e) => setLoginType(e.target.value)}
                value={loginType}
              >
                
                <option value="0" disabled>
                  Select type of registration
                </option>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
              </select>
            </div>

          </div>

          <div className="form-group">
            <button type="submit">
              <p class="btn2"><span class="spn2">Login</span></p>
            </button>

            <p className="para">Don't have an account? <a href="/signup">Sign Up.</a></p>
          </div>
        </form>
      </div>

    </div>

  );
};

export default Login;
