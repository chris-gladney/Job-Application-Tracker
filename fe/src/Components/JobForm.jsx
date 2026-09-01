import { useNavigate } from "react-router-dom";

function JobForm() {
  const navigate = useNavigate();

  return (
    <>
      <form>
        <h3>Add Job Application</h3>
        <input type="text" placeholder="Company Name" />
        <input type="text" placeholder="Job Title" />
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="Date" pattern="\d{2}/\d{2}/\d{4}" />
        <textarea placeholder="Notes"></textarea>
        <div className="job-settings">
          <button className="cancel" onClick={() => navigate("/jobs-board")}>
            Cancel
          </button>
          <button className="orange-button">Save Job</button>
        </div>
      </form>
    </>
  );
}

export default JobForm;
