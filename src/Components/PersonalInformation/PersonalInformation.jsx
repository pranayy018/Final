import React, { useEffect, useState } from "react";
import "./personalInformation.css";
import { getDoctorList, getPatientDetails } from "../../Store/Interactions";
import { useSelector } from "react-redux";
import ShowDiagnosis from "../ShowDiagnosis/ShowDiagnosis";

const PersonalInformation = () => {
  const account = useSelector((state) => state.Provider.account);
  const medicalStorage = useSelector((state) => state.MedicalStorage.contract);
  const transferInProgress = useSelector(
    (state) => state.MedicalStorage.transferInProgress
  );
  const [details, setDetails] = useState(null);
  const [doctorList, setDoctorList] = useState(null);
  const [showDiagnosis, setShowDiagnosis] = useState(false);
  const [fileData, setFileData] = useState(null); // State to hold uploaded file data

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        // e.target.result contains the file contents (e.g., base64 string)
        setFileData(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Here you can perform actions with the uploaded file data
    // For demonstration, we'll just show an alert
    if (fileData) {
      alert("File uploaded successfully!");
    } else {
      alert("Please upload a file first.");
    }
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await getPatientDetails(medicalStorage, account);
      const doctorList = await getDoctorList(medicalStorage, account);
      setDoctorList(doctorList);
      setDetails(details);
    };
    if (medicalStorage && account) {
      fetchDetails();
    }
  }, [medicalStorage, account, transferInProgress]);

  return (
    <div className="personalInformation">
      <h2>Personal Information</h2>
      <p>
        <strong>Name:</strong> {details && details[0]}
      </p>
      <p>
        <strong>Age:</strong>
        {details && Math.round(details[1] * 100000) / 100000}
      </p>
      <p>
        <strong>Problem:</strong> {details && details[2]}
      </p>

      {/* File upload input
      <div>
        <label htmlFor="fileUpload">Upload File:</label>
        <input
          id="fileUpload"
          type="file"
          accept=".pdf, .doc, .docx" // Acceptable file types
          onChange={handleFileUpload}
        />
      </div>

      {/* Submit button */}
      {/* <button className="btn" onClick={handleSubmit}>
        Submit File
      </button> */} 

      {/* Toggle button for showing/hiding diagnosis */}
      <button
        className="btn"
        style={showDiagnosis ? { backgroundColor: "red" } : null}
        onClick={() => setShowDiagnosis(!showDiagnosis)}
      >
        {showDiagnosis ? "Hide Diagnosis" : "Show Diagnosis"}
      </button>

      {/* Show diagnosis if toggle is enabled */}
      {showDiagnosis && (
        <div>
          {doctorList &&
            doctorList.map((doctors, index) => (
              <ShowDiagnosis doctor={doctors} key={index} />
            ))}
        </div>
      )}
    </div>
  );
};

export default PersonalInformation;
