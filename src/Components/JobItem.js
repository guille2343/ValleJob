import React, { useState } from "react";
import JobDetails from "./JobDetails";
import "../Css/JobItem.css";

const JobItem = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = () => {
    setShowDetails(true);
  };

  const handleClose = () => {
    setShowDetails(false);
  };

  return (
    <div className="job-item">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p>
        <strong>Salario:</strong> {job.salary}
      </p>
      <button onClick={handleDetailsClick}>Ver Detalles</button>
      {showDetails && <JobDetails job={job} onClose={handleClose} />}
    </div>
  );
};

export default JobItem;
