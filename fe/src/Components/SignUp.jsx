import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <form>
        <h3>Create an Account</h3>
        <input type="text" placeholder="Full Name" />
        <br />
        <input type="text" placeholder="Email Address" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <input type="password" placeholder="Confirm Password" />
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
