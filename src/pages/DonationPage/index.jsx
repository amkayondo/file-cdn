import React, { Component } from "react";
import styled from "styled-components";
import VideoPlayer from "../../components/VideoPlayer";
import StripePay from "../../components/StripePay";
import { VideoSrc } from '../../data'
import BreakPoint from "../../utils/BreackPoint";

const Container = styled.div`
  // display: flex;
  // flex-direction: row;
  // height: 100%;
  // width: 100%;
`;

const Rect = styled.div`
  width: 668px;
  height: 657px;
  background-color: #fff;
`;

const Rect1 = styled.div`
  width: 698px;
  height: 100%;
  background-color: #fff;
`;

const RectRow = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
`;

class Index extends Component {
  render() {
    return (
      <BreakPoint name="desktop">
      <Container id="desktop-vr">
        <RectRow>
          <Rect>
            <VideoPlayer 
            srcUrl={VideoSrc}
            />
          </Rect>
          <Rect1>
            <StripePay/>
          </Rect1>
        </RectRow>
      </Container>
      </BreakPoint>
    );
  }
}
export default Index;
