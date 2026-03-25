import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <form className="sign-in">
        <h3>Login</h3>
        <input type="email" placeholder="Email Address" />

        <input type="password" placeholder="Password" />

        <div className="checked">
          <input type="checkbox" name="remember-me" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="orange-button">Login</button>

        <button className="forgot-password">Forgot Password?</button>

        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </>
  );
}

export default SignIn;
