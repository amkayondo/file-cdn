import React, { Component } from "react";
import styled from "styled-components";
import VideoPlayer from "../../components/VideoPlayer";
import StripePay from "../../components/StripePay";
import { VideoSrc } from '../../data'

const Container = styled.div`
  // display: flex;
  // flex-direction: row;
  height: 100%;
  width: 100%;
`;

const Rect = styled.div`
  width: 668px;
  height: 768px;
  background-color: #fff;
`;

const Rect1 = styled.div`
  width: 698px;
  height: 768px;
  background-color: #fff;
`;

const RectRow = styled.div`
  height: 768px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
`;


// const srcUrl = 

class Index extends Component {
  render() {
    return (
      <Container >
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
    );
  }
}
export default Index;
