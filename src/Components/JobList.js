import React, { useState, useEffect } from "react";
import JobItem from "./JobItem";
import "../Css/JobList.css";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("http://localhost:5000/jobs");
      const data = await response.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  return (
    <div className="job-list">
      <h2>Ofertas de Empleo</h2>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
