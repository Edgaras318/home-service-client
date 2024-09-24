import React, { useState } from 'react';
import { useUserStore } from '@/stores/userStore';
import { useNavigate } from 'react-router-dom';
import InputField from "@/components/common/InputField/InputField"; // New reusable input field component
import { validateUsername, validatePassword } from "@/utils/validators"; // Moved validation to separate file
import styles from './Login.module.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

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
      navigate('/');
    } catch (error) {
      setErrors({ username: '', password: 'Login failed. Please try again.' });
    }
  };

  return (
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <InputField
                label="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setErrors((prev) => ({ ...prev, username: '' }));
                }}
                error={errors.username}
                placeholder="Type your username"
            />
            <InputField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({ ...prev, password: '' }));
                }}
                error={errors.password}
                placeholder="Type your password"
            />
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
