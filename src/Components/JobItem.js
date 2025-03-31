import React from "react";
import "../Css/JobItem.css";

const JobItem = ({ job }) => {
  return (
    <div className="job-item">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p>
        <strong>Salario:</strong> {job.salary}
      </p>
      <button>Ver Detalles</button>
    </div>
  );
};

export default JobItem;
