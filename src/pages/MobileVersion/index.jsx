import React from "react";
import styled from "styled-components";
import BreakPoint from "../../utils/BreackPoint";
import propTypes from 'prop-types';
import { VideoSrc } from '../../data'
import VideoPlayerMobile from "../../components/VideoPlayerMobile";
import StripePayMobile from '../../components/StripePayMobile'

const MobileView = (props) => {
  return (
    <BreakPoint name="phone">
    <Container>
      <div className="topctnd">
      <VideoPlayerMobile
            srcUrl={VideoSrc}
            />
      </div>
      <div className="btmctnd">
      <StripePayMobile/>
      </div>
    </Container>
    </BreakPoint>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export default MobileView;
