import React from "react";
import PropTypes from "prop-types";

// Styles
import {
  ProjectTitle,
  Wrapper,
  ContentWrapper,
  Description,
  ProjectImage
} from "./project.styles";

const Project = ({ project }) => {
  return (
    <Wrapper>
      <a href={project.frontmatter.link} rel="noreferrer" target="_blank">
        <ProjectImage
          fluid={project.frontmatter.image.childImageSharp.fluid}
          alt={project.frontmatter.title}
        />
      </a>

      <ContentWrapper>
        <ProjectTitle>
          <a href={project.frontmatter.link} rel="noreferrer" target="_blank">
            {project.frontmatter.title}
          </a>
        </ProjectTitle>

        <Description>{project.frontmatter.description}</Description>
      </ContentWrapper>
    </Wrapper>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      description: PropTypes.string.isRequired,
      image: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.object.isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default Project;
