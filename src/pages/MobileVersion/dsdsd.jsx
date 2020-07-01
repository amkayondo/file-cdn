import React from "react";
import styled from "styled-components";
import BreakPoint from "../../utils/BreackPoint";
import propTypes from 'prop-types';
import { VideoSrc } from '../../data'
import VideoPlayerMobile from "../../components/VideoPlayerMobile";
import StripePayMobile from '../../components/StripePayMobile'

const { object } = propTypes;


const Mobilemode = (props) => {
  return (
    <BreakPoint name="phone">
    <Rect id="mobile-vr">
    <VideoPlayerMobile
            srcUrl={VideoSrc}
            />
    </Rect>
    <StripePayMobile/>
    </BreakPoint>
  );
}

const Rect = styled.div`
  display: flex;
  // width: 360px;
  height: 2024px;
  background-color: #E6E6E6;
  flex-direction: column;
  margin-top: 22px;
  border-radius: 22px;
  // margin-left: 7px
`;

const ButtonOverlay = styled.button`
display: block;
background: #D62379;
height: 100%;
width: 100%;
color: #fff;
border: none;
font-size: 30px;
border-radius: 22px;
text-align: center;
font-weight: 700;
 `;
const Button = styled.div`
  width: 200px;
  height: 60px;
  background-color: rgba(126,211,33,1);
  margin-top: 638px;
  margin-left: 80px;
  border-radius: 22px;
`;

Mobilemode.propTypes = {
  children: object
}

export default Mobilemode;
