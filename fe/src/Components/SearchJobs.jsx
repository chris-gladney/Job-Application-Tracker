import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import JobOverview from "./JobOverview";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const testData = [
  {
    company: "Company One Ltd",
    stage: "Interview",
    dateApplied: "22nd March",
  },
  {
    company: "Company Two Ltd",
    stage: "Offer",
    dateApplied: "22nd March",
  },
  {
    company: "Company Three Ltd",
    stage: "Rejected",
    dateApplied: "22nd March",
  },
  {
    company: "Company Four Ltd",
    stage: "Rejected",
    dateApplied: "22nd March",
  },
  {
    company: "Company Five Ltd",
    stage: "Offer",
    dateApplied: "22nd March",
  },
  {
    company: "Company Six Ltd",
    stage: "Interview",
    dateApplied: "22nd March",
  },
  {
    company: "Company Seven Ltd",
    stage: "Interview",
    dateApplied: "22nd March",
  },
  {
    company: "Company Eight Ltd",
    stage: "Rejected",
    dateApplied: "22nd March",
  },
  {
    company: "Company Nine Ltd",
    stage: "Rejected",
    dateApplied: "22nd March",
  },
  {
    company: "Company Ten Ltd",
    stage: "Offer",
    dateApplied: "22nd March",
  },
];

function SearchJobs() {
  const [searchText, setSearchText] = useState("");

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredJobs = testData.filter((job) => {
    return job.company.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="search-applications">
      <div className="search-bar">
        <Link to="/add-job">
          <button className="add-job">+ Job</button>
        </Link>
        <div className="search-bar-wrapper">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="Search jobs..."
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </div>
      </div>
      <div className="current-applications">
        {filteredJobs.map((job, i) => {
          return (
            <JobOverview
              key={i}
              company={job.company}
              status={job.stage}
              date={job.dateApplied}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SearchJobs;
