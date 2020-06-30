import React from "react";
import MediaQuery from "react-responsive";
import propTypes from 'prop-types';

const breakPoints = {
    desktop: '(min-width: 1025px)',
    tablet: '(min-width: 768px) and (max-width: 1024px)',
    phone: '(max-width: 1000px)',
}

const { string, object } = propTypes;

const BreakPoint = (props) => {
    const breakPoint = breakPoints[props.name] || breakPoints.desktop;
    return(
        <MediaQuery query={breakPoint}>
            { props.children }
        </MediaQuery>
    )
}

BreakPoint.propTypes = {
    name: string,
    children: object,
  }

export default BreakPoint;
