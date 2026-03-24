import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <form>
        <h3>Create an Account</h3>
        <input />
        <br />
        <input />
        <br />
        <input />
        <br />
        <input />
        <br />
        <button>Sign Up</button>
        <br />
        <p>
          Already have an account? <Link to="/">Sign In</Link>
        </p>
      </form>
    </>
  );
}

export default SignUp;
