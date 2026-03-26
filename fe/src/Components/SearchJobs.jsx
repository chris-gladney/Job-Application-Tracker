import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchJobs() {
  return (
    <div className="search-applications">
      <h4>Recent Applications</h4>
      <div className="search-bar">
        <form>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Search jobs..." />
        </form>
      </div>
    </div>
  );
}

export default SearchJobs;
