import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <form>
        <h3>Create an Account</h3>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="orange-button">Sign Up</button>
        <p>
          Already have an account? <Link to="/">Sign In</Link>
        </p>
      </form>
    </>
  );
}

export default SignUp;
