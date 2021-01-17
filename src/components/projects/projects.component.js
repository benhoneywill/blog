import React from "react";
import PropTypes from "prop-types";

// Components
import Project from "../project";

// Styles
import { Wrapper, ProjectItem } from "./projects.styles";

const Projects = ({ projects, marginTop }) => {
  return (
    <Wrapper marginTop={marginTop}>
      {projects.map(({ node }) => (
        <ProjectItem key={node.id}>
          <Project project={node} />
        </ProjectItem>
      ))}
    </Wrapper>
  );
};

Projects.defaultProps = {
  marginTop: 0
};

Projects.propTypes = {
  marginTop: PropTypes.number,
  projects: PropTypes.arrayOf(
    PropTypes.shape({ node: PropTypes.object.isRequired })
  ).isRequired
};

export default Projects;
