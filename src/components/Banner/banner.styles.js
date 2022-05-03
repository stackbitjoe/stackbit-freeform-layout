import styled from "styled-components";

export const BannerWrapper = styled.div`
  text-align: center;
  padding-top: 75px;
  padding-bottom: 75px;
`;

export const BannerTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const BannerTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 5rem;
  font-weight: bold;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: radial-gradient( circle farthest-corner at 49.1% 130%, rgba(182,0,117,1) 0.2%, rgba(58,3,71,1) 71% );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const BannerTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

export const BannerStatWrapper = styled.div`
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #5930e5;
`;