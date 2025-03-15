import React, { useState } from "react";
import styled from "styled-components";

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setPasswordMatchError("Passwords do not match");
    } else {
      setPasswordMatchError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatchError("Passwords do not match");
      return;
    }
    // In a real application, you would handle form submission here
    console.log("Form submitted:", { firstName, lastName, email, password });
    // Reset form fields after submission (optional)
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPasswordMatchError("");
  };

  return (
    <StyledWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our app.</p>
        <div className="flex">
          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <span>Firstname</span>
          </label>
          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <span>Lastname</span>
          </label>
        </div>
        <label>
          <input
            className="input"
            type="email"
            placeholder=""
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
        </label>
        <label>
          <input
            className="input"
            type="password"
            placeholder=""
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>
        <label>
          <input
            className="input"
            type="password"
            placeholder=""
            required
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <span>Confirm password</span>
        </label>
        {passwordMatchError && <p className="error-message">{passwordMatchError}</p>}
        <button className="submit" type="submit">Submit</button>
        <p className="signin">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #0a0a0a; /* Added a background color for the wrapper to see the form better */

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 500px;
    height: auto; /* Changed to auto to adjust height based on content */
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
  .signin,
  .error-message {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  .error-message {
    color: #ff4d4d; /* Red color for error message */
    margin-top: -5px; /* Adjust margin to be closer to the input */
    margin-bottom: 5px;
    font-size: 0.8em;
  }


  .signin {
    text-align: center;
  }

  .signin a {
    color: #00bfff;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
    display: block; /* Make label a block element to take full width */
    margin-bottom: 5px; /* Add some margin between labels */
  }

  .form label .input {
    background-color: #333;
    color: #fff;
    width: calc(100% - 12px); /* Adjust width to account for padding and border */
    padding: 20px 5px 5px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
    box-sizing: border-box; /* Include padding and border in element's total width and height */
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
    cursor: pointer; /* Add cursor pointer for better UX */
  }

  .submit:hover {
    background-color: #00bfff96;
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .form {
      width: 90%; /* Form takes up more width on smaller screens */
      max-width: 500px; /* But doesn't exceed the original width */
      padding: 15px;
    }

    .flex {
      flex-direction: column; /* Stack firstname and lastname on smaller screens */
      gap: 10px;
    }

    .title {
      font-size: 24px; /* Slightly smaller title on smaller screens */
      padding-left: 25px;
    }

    .title::before,
    .title::after {
      height: 14px;
      width: 14px;
    }

    .title::after {
      width: 16px;
      height: 16px;
    }
  }

  @media (max-width: 576px) {
    .form {
      width: 95%; /* Even wider on very small screens */
      padding: 10px;
    }
    .message,
    .signin {
      font-size: 14px; /* Slightly smaller message/signin text */
    }

    .submit {
      font-size: 15px; /* Slightly smaller submit button text */
    }
  }
`;

export default RegisterPage;