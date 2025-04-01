import React from "react";
import "../Css/JobDetails.css";

const JobDetails = ({ job, onClose }) => {
  if (!job) return null;

  const handleApply = () => {
    alert("Postulación exitosa");
    onClose();
  };

  return (
    <div className="job-details-overlay">
      <div className="job-details">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h3>{job.title}</h3>
        <p>{job.description}</p>
        <p>
          <strong>Salario:</strong> {job.salary}
        </p>
        <button className="apply-button" onClick={handleApply}>
          Postularse
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
