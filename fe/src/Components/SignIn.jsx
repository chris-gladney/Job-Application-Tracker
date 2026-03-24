import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <form>
        <h3>Login</h3>
        <input type="text" placeholder="Email Address" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <input type="checkbox" name="remember-me" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
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
