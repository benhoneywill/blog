import styled from "@emotion/styled";

export const PublishedAt = styled.p`
  color: #777777;
  font-family: "Lato", sans-serif;
  margin-top: 0.8rem;
`;

export const PostTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};

  a {
    color: inherit;
  }
`;
