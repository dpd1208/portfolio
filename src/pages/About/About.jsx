import React, { Component } from "react";
import PropTypes from "prop-types";
import { SectionWrapper } from "./About.styled";

const About = ({ testId, className }) => {
  return (
    <SectionWrapper
      className={className}
      data-test-id={testId && `${testId}-about`}
    >
      <h2 style={{ margin: '0px' }}>STUFF</h2>
      <p>Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:</p>
      <ol>
        <li>Nulla pulvinar diam</li>
        <li>Facilisis bibendum</li>
        <li>Vestibulum vulputate</li>
        <li>Eget erat</li>
        <li>Id porttitor</li>
      </ol>
    </SectionWrapper>
  );
};

About.propTypes = {
  /**
   * Id used for testing
   */
  testId: PropTypes.string,
  /**
   * Class name
   */
  className: PropTypes.string
};

About.defaultProps = {
  testId: null,
  className: null
};

export default About;
