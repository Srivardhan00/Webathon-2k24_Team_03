import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <BackgroundImage>
        <ButtonContainer>
          <Link to="signup">
            <Button>Sign Up</Button>
          </Link>
          <Link to="login">
            <Button>Login</Button>
          </Link>
        </ButtonContainer>
      </BackgroundImage>
    </div>
  );
};
const BackgroundImage = styled.div`
  background-image: url(https://i.pinimg.com/564x/83/64/e9/8364e9e019d3ee62d9604918eb311e95.jpg);
  background-size: cover;
  background-position: center;
  height: 85vh;
  width: 100vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #48d1cc;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007f67;
  }
`;

export default HomePage;
