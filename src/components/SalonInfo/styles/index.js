import styled from 'styled-components';
/** Default variables */
const specialFont = "MillerBanner";
const paddingSide = "1rem";
const themeColor = "#b69f58";

/** Salon Header */
export const SalonImage = styled.div`
  background-image: url(../assets/salon01.png);
  background-color: #000000;
`;

export const ButtonAlign = styled.div`
  display: grid;
  grid-template-rows: 2.5rem;
  grid-template-columns: 30% 55% 15%;
  padding-top: 1.5rem;
`;

export const ArrowBack = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  padding-top: .7rem;
  padding-left: ${paddingSide};
`;

export const Heart = styled.div`
  grid-row: 1 / 2;
  grid-column: 3 / 4;
`;

export const SalonName = styled.p`
  font-family: ${specialFont};
  font-weight: 200;
  font-size: 1.5rem;
  padding-left: ${paddingSide};
  margin-bottom: .3rem;
`;

export const TextWhite = styled.div`
  color: #ffffff;
`;

export const StarAdjuster = styled.div`
  padding-left: ${paddingSide};
  padding-bottom: 1rem;
`;

/** Salon Menu */
export const Background = styled.div`
background-color: #eeeeee;
`;
export const Menu = styled.section`
  display: grid;
  grid-template-rows: 2rem;
  grid-template-columns: auto;
  text-align: center;
  padding-top: .8rem;
  font-size: 1.3rem;
  background-color: #ffffff;
`;

export const MenuItem1 = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  border-bottom: ${props=>props.selected ? "solid 2px #b69f58" : 'none' };
`;

export const MenuItem2 = styled.div`
grid-row: 1 / 2;
grid-column: 2 / 3;
border-bottom: ${props=>props.selected ? "solid 2px #b69f58" : 'none' }
`;

/** Salon Info Items */
export const SalonWrapper = styled.section`
  display: grid;
  grid-template-rows: 3rem;
  padding: 1rem 0;
  line-height: 3rem;
  background-color: #ffffff;
  font-size: 1.5em;
`;
export const SalonInfoItem = styled.div`
display: grid;
grid-template-rows: 3rem;
grid-template-columns: 2.5rem 1fr;
border-bottom: solid .5px #eeeeee;
margin: 0 1rem;
`;

export const ImageAdjuster = styled.div`
  margin-top: .5rem;
`;

export const Description = styled.article`
  line-height: 1rem;
  padding: 0 ${paddingSide};
`;