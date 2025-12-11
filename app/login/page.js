
export default function LoginPage() {
  return (
    <section className="login-section">
      <div className="login-card">
        <h2>Welcome 👋</h2>
        <p>Login to access your study materials and solutions.</p>
        <form className="login-form">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <div className="login-links">
            <a href="#">Forgot Password?</a>
            <a href="#">Create Account</a>
          </div>
        </form>
      </div>
    </section>
  );
}
