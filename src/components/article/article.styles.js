import styled from "@emotion/styled";

export const ArticleWrapper = styled.article`
  margin: 3.2rem auto;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const PublishedAt = styled.p`
  color: #777;
  font-family: "Lato", sans-serif;
`;

export const MarkdownWrapper = styled.div`
  margin-bottom: 3.2rem;
`;
