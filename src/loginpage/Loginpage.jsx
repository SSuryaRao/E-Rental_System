import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <StyledWrapper>
      <form className="form">
        <p className="title">Login</p>
        <p className="message">Login now and get full access to our app.</p>
        <label>
          <input className="input" type="email" placeholder="" required />
          <span>Email</span>
        </label>
        <label>
          <input className="input" type="password" placeholder="" required />
          <span>Password</span>
          <a href="#">Forgot Password?</a>
        </label>
        <button className="submit">Sign in</button>
        <p className="signup">
          Don't have an account?<a href="#">Sign up</a>
        </p>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 500px;
    height:350px;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    background-color: #1a1a1a;
    color: #fff;
    border: 1px solid #333;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: #00bfff;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #00bfff;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message,
  .signup {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  .signup {
    text-align: center;
  }

  

  .signup a:hover {
    text-decoration: underline royalblue;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    background-color: #333;
    color: #fff;
    width: 100%;
    padding: 20px 5px 5px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 12.5px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    color: #00bfff;
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .input {
    font-size: medium;
  }

  .submit {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: 0.3s ease;
    background-color: #00bfff;
  }

  .submit:hover {
    background-color: #00bfff96;
  }
    a{
        color:#00bfff;
        position:right;
    }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }
    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

export default Login;
