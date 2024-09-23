import React, { useState } from "react";
import { useUserStore } from "@/stores/userStore"; // Import Zustand store
import { useNavigate } from "react-router-dom"; // For redirect
import styles from "./Login.module.scss"; // Import CSS Module styles

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const setUser = useUserStore((state) => state.setUser); // Zustand setUser function
  const navigate = useNavigate(); // For redirecting after login

  const validateUsername = (username) => {
    if (username.length < 3) return "Username must be at least 3 characters.";
    if (username.length > 20) return "Username must be no more than 20 characters.";
    if (!/^[a-zA-Z0-9_]+$/.test(username)) return "Username can only contain letters, numbers, and underscores.";
    return "";
  };

  const validatePassword = (password) => {
    if (password.length < 8) return "Password must be at least 8 characters.";
    if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter.";
    if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter.";
    if (!/[0-9]/.test(password)) return "Password must contain at least one number.";
    if (!/[!@#$%^&*]/.test(password)) return "Password must contain at least one special character.";
    return "";
  };

  const validate = () => {
    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);
    return { username: usernameError, password: passwordError };
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (validationErrors.username || validationErrors.password) {
      setErrors(validationErrors);
      return;
    }

    // Simulate an API call
    try {
      const userData = { username };
      setUser(userData);
      navigate("/");
    } catch (error) {
      setErrors({ username: "", password: "Login failed. Please try again." });
    }
  };

  return (
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label htmlFor="username">Username</label>
              <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setErrors((prev) => ({ ...prev, username: "" })); // Clear error on change
                  }}
                  placeholder="Type your username"
                  required
              />
              {errors.username && <p className={styles.errorText}>{errors.username}</p>}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((prev) => ({ ...prev, password: "" })); // Clear error on change
                  }}
                  placeholder="Type your password"
                  required
              />
              {errors.password && <p className={styles.errorText}>{errors.password}</p>}
            </div>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </form>

          <div className={styles.socialLogin}>
            <div className={`${styles.socialIcon} ${styles.facebookIcon}`}>F</div>
            <div className={`${styles.socialIcon} ${styles.twitterIcon}`}>T</div>
            <div className={`${styles.socialIcon} ${styles.googleIcon}`}>G</div>
          </div>

          <div className={styles.signUpLink}>
            <p>Or Sign Up Using</p>
            <a href="/signup">Sign Up</a>
          </div>
        </div>
      </div>
  );
};

export default Login;
