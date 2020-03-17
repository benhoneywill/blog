import styled from "@emotion/styled";

export const SocialIconsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const SocialIconItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0.2rem 1rem 0.2rem 0;

  @media (max-width: 600px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const SocialIconLink = styled.a`
  display: inline-flex;
  align-items: center;
  transition: opacity 0.1s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
