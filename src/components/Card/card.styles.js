import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 300px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #000;
`;

const CardImageStyle = styled.div`
  grid-area: image;
  background-image: url('${(props) => props.background}');
  background-position: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

export const CardImage = ({ background }) => {
  return <CardImageStyle background={background} />;
};

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  color: #ed50fd;
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
  color: #fff;
`;