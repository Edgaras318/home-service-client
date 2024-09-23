import React, { useState } from "react";
import { useUserStore } from "@/stores/userStore"; // Import Zustand store
import { useNavigate } from "react-router-dom"; // For redirect
import styles from "./Register.module.scss"; // Import CSS Module styles

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({ username: "", password: "", confirmPassword: "" });
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
        const confirmPasswordError = password !== confirmPassword ? "Passwords do not match." : "";
        return { username: usernameError, password: passwordError, confirmPassword: confirmPasswordError };
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (validationErrors.username || validationErrors.password || validationErrors.confirmPassword) {
            setErrors(validationErrors);
            return;
        }

        // Simulate an API call
        try {
            const userData = { username };
            setUser(userData);
            navigate("/");
        } catch (error) {
            setErrors({ username: "", password: "Registration failed. Please try again." });
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h1>Register</h1>
                <form onSubmit={handleRegister}>
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
                    <div className={styles.inputGroup}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                setErrors((prev) => ({ ...prev, confirmPassword: "" })); // Clear error on change
                            }}
                            placeholder="Repeat your password"
                            required
                        />
                        {errors.confirmPassword && <p className={styles.errorText}>{errors.confirmPassword}</p>}
                    </div>
                    <button type="submit" className={styles.loginButton}>
                        Register
                    </button>
                </form>

                <div className={styles.signUpLink}>
                    <p>Already have an account?</p>
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Register;
