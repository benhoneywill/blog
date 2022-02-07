import React from "react";
import PropTypes from "prop-types";

import { useTheme } from "../../contexts/theme";
import GithubIcon from "../../icons/github.svg";
import LinkIcon from "../../icons/link.svg";

// Styles
import {
  ProjectTitle,
  Wrapper,
  ContentWrapper,
  Description,
  ProjectImage,
  ProjectActions
} from "./project.styles";

const Project = ({ project }) => {
  const { darkMode } = useTheme();

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

        <ProjectActions>
          <a
            href={project.frontmatter.link}
            rel="noreferrer"
            target="_blank"
            title="Go to project"
          >
            <LinkIcon fill={darkMode ? "#FFFFFF" : "#111111"} />
          </a>
          {project.frontmatter.github && (
            <a
              href={project.frontmatter.github}
              rel="noreferrer"
              target="_blank"
              title="Go to github repo"
            >
              <GithubIcon fill={darkMode ? "#FFFFFF" : "#111111"} />
            </a>
          )}
        </ProjectActions>

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
      github: PropTypes.string.isRequired,
      image: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.object.isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default Project;
