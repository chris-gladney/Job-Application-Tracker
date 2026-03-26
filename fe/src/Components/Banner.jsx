import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <button>
              <FontAwesomeIcon icon={faRightFromBracket} />
              Logout
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Banner;
