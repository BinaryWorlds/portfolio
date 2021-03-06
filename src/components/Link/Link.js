import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useEventGA from '../../hooks/useEventGA';

const Button = styled.a`
  color: inherit;
  text-decoration: inherit;
  font-size: inherit;
`;

function Link({ children, link, aria, isBlank, className, download, eventProps }) {
  const [handleEvent] = useEventGA();

  const handleClick = () => handleEvent({ ...eventProps, action: `Selected ${aria}` });

  return (
    <Button
      onClick={handleClick}
      href={link}
      target={isBlank ? '_blank' : '_self'}
      rel="noreferrer"
      aria-label={aria}
      download={download}
      className={className}>
      {children}
    </Button>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  aria: PropTypes.string,
  download: PropTypes.string,
  isBlank: PropTypes.bool,
  className: PropTypes.string.isRequired,
  eventProps: PropTypes.objectOf(PropTypes.string).isRequired,
};

Link.defaultProps = {
  isBlank: true,
  download: null,
  aria: null,
};

export default Link;
