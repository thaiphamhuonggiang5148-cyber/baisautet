import React, { useState } from 'react';
import './Login.css';

const DangNhap = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">

        <div className="login-header">
          <div className="logo-circle">
        
            <svg viewBox="0 0 100 100" width="60" height="60">
              <circle cx="50" cy="50" r="45" fill="#4a8c82" opacity="0.1" />
              <path d="M30 50 Q50 20 70 50 T30 50" fill="none" stroke="#4a8c82" strokeWidth="2" />
              <circle cx="50" cy="50" r="5" fill="#4a8c82" />
            </svg>
          </div>
          <h1 className="brand-name">HANDMADESHOP</h1>
        </div>

        <h2 className="form-title">Đăng Nhập</h2>

        <form className="login-form">
  
          <div className="input-field">
            <label>Tên đăng nhập hoặc email <span className="star">*</span></label>
            <input type="text" placeholder="Nhập email của bà..." required />
          </div>
          <div className="input-field">
            <label>Mật khẩu <span className="star">*</span></label>
            <div className="password-container">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Nhập mật khẩu..." 
                required 
              />
              <button 
                type="button" 
                className="eye-toggle" 
                onClick={togglePassword}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 19c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                ) : (
             
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                )}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" /> Ghi nhớ mật khẩu
            </label>
            <a href="#forgot" className="forgot-pw">Quên mật khẩu?</a>
          </div>

          <button type="submit" className="submit-btn">ĐĂNG NHẬP</button>
        </form>

        <p className="signup-link">
          Chưa có tài khoản? <a href="#signup">Đăng ký ngay</a>
        </p>
      </div>
    </div>
  );
};

export default Login;