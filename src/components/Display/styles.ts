import styled from "styled-components";
import colors from "../../styles/colors";

const { success, ledOn, ledOff } = colors;

export const ContainerSegments = styled.div`
  height: 40%;
  display: flex;
  column-gap: 15px;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  padding: 50px;
`;

export const Segment = styled.div`
  height: 15px;
  width: 80px;
  position: relative;
  border-radius: 6px;

  &.segment_a {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  }
  &.segment_b {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    border-top-right-radius: 10px;
    transform: rotate(90deg);
    top: 21px;
    left: 34px;
  }
  &.segment_c {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    border-top-left-radius: 10px;
    transform: rotate(90deg);
    top: 85px;
    left: 34px;
  }
  &.segment_d {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    transform: rotate(180deg);
    top: 105px;
  }
  &.segment_e {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    border-top-right-radius: 10px;
    transform: rotate(270deg);
    top: 55px;
    right: 34px;
  }
  &.segment_f {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    border-top-left-radius: 10px;
    transform: rotate(270deg);
    bottom: 39px;
    right: 34px;
  }
  &.segment_g {
    clip-path: polygon(0 50%, 12% 0, 88% 0, 100% 50%, 88% 100%, 12% 100%);
    bottom: 14px;
    left: 3px;
    width: 74px;
  }
  &.on {
    background-color: ${ledOn};
  }
  &.off {
    background-color: ${ledOff};
  }
`;
