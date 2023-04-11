import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0rem 2rem;
  width: 100%;
  height: 100vh;

  & > * {
    opacity: 0;
    transform: translateX(-100%);
    animation: fadeInRight 0.8s ease-out forwards;
  }

  & > *:nth-child(2) {
    animation-delay: 0.2s;
  }

  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  @media (max-width: 600px) {
    gap: 2.5rem;
  }
`;
export const TitleText = styled.h1`
  font-family:  "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2rem;
  color: #f69203;
  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
export const LeadText = styled.h1`
  font-family:  "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  color: #f5b151;
  word-break: break-word;
  width: 45rem;
  @media (max-width: 600px) {
    font-size: 14px;
    width: 100%;
    padding: 0rem 0rem;
  }
`;

export const Profile = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  border: 3px solid #f69203; 
  @media (max-width: 1200px) {
    width: 15rem;
    height: 15rem;
  }
  @media (max-width: 600px) {
    width: 10rem;
    height: 10rem;
  }
`;
