import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function JobOverview({ company, status, date }) {
  let jobOverviewColor;

  if (status === "Interview") {
    jobOverviewColor = "#35b3b2";
  } else if (status === "Offer") {
    jobOverviewColor = "#f6953e";
  } else if (status === "Rejected") {
    jobOverviewColor = "#ef5235";
  }

  return (
    <div className="job-overview">
      <h5>{company}</h5>
      <div className="job-status" style={{ backgroundColor: jobOverviewColor }}>
        <p>{status}</p>
      </div>
      <p>{date}</p>
      <Link to="/">
        <FontAwesomeIcon icon={faCircleInfo} style={{ color: "black" }} />
      </Link>
    </div>
  );
}

export default JobOverview;
