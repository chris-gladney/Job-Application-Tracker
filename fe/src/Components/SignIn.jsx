import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <form>
        <h3>Login</h3>
        <input />
        <br />
        <input />
        <br />
        <button>Login</button>
        <br />
        <button>Forgot Password?</button>
        <br />
        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </>
  );
}

export default SignIn;
