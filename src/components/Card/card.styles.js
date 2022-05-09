import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 300px;
  grid-template-areas: "image" "text";
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  background-color: #000;
  margin-bottom: 15px;
`;

const CardImageStyle = styled.div`
  grid-area: image;
  background-image: url('${(props) => props.background}');
  background-position: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-size: cover;
`;

export const CardImage = ({ background }) => {
  return <CardImageStyle background={background} />;
};

export const CardTextWrapper = styled.div`
  grid-area: text;
  text-align: center;
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
  font-size: 15px;
  font-weight: 300;
  color: #fff;
`;