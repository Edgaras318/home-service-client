import React, { useState, useEffect } from 'react';
import styles from './Topbar.module.scss';
import logo from '@/assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import Button from "@/components/common/Button/Button";
import { useUserStore } from '@/stores/userStore';

const Topbar = () => {
  const { user, clearUser } = useUserStore();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'See our services', text: 'Home' },
    { href: '/services', label: 'See our services', text: 'Services' },
    { href: '/about', label: 'About us', text: 'About Us' },
  ];

  const handleButtonClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    clearUser();
    navigate('/'); // Redirect to home after logout
    setIsDropdownOpen(false); // Close dropdown on logout
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Effect to close dropdown when user state changes
  useEffect(() => {
    if (user) {
      setIsDropdownOpen(false); // Close dropdown when user logs in
    }
  }, [user]);

  const renderUserAvatar = () => {
    if (user && user.username) {
      const firstLetter = user.username.charAt(0).toUpperCase();
      return (
          <div className={styles.avatar} onClick={toggleDropdown} aria-label="User Menu">
            {firstLetter}
            {isDropdownOpen && (
                <div className={styles.dropdown}>
                  <button onClick={handleLogout} className={styles.logoutButton}>
                    Logout
                  </button>
                </div>
            )}
          </div>
      );
    }
    return null;
  };

  return (
      <div className={styles.topbar}>
        <div className={styles.leftSide}>
          <img
              src={logo}
              alt='Logo'
              aria-label='Company logo'
              className={styles.logo}
          />
          <nav className={styles.nav}>
            <ul>
              {navLinks.map((link, index) =>
                  <li key={index}>
                    <Link to={link.href} aria-label={link.label}>
                      {link.text}
                    </Link>
                  </li>
              )}
            </ul>
          </nav>
        </div>
        {user ? (
            renderUserAvatar()
        ) : (
            <Button size="large" text="Login / Sign Up" onClick={handleButtonClick} />
        )}
      </div>
  );
};

export default Topbar;
