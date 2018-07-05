import styled from 'styled-components';
//import img from '../assets/salon01.png';
/** Salon Info Page
 *  - Default variables
 *  - Header
 *  - Menu
 *  - List Items
 */

/** Default variables */
const specialFont = `"MillerBanner", serif`;
const paddingSide = "1rem";
const themeColor = "#b69f58";
const fontSize = "1.5em";

/** Header */
export const ArrowBack = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  padding-top: .7rem;
  padding-left: ${paddingSide};
`;

export const SalonImage = styled.div`
  background-image: url(${props=>props.img});
  background-size: cover;
  background-color: #666666;
  height: 16rem;
  @media all and (min-width: 768px){
    height: 24rem;
  }
`;

export const ButtonAlign = styled.div`
  display: grid;
  grid-template-rows: 2.5rem;
  grid-template-columns: 30% 55% 15%;
  padding-top: 1.5rem;
`;

export const Heart = styled.div`
  grid-row: 1 / 2;
  grid-column: 3 / 4;
  text-align: right;
  padding-right: ${paddingSide};
  cursor: pointer;
`;

export const SalonName = styled.p`
  font-family: ${specialFont};
  font-weight: 200;
  font-size: 1.5rem;
  margin-bottom: .3rem;
`;

export const TextBox = styled.div`
background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) );
  color: #ffffff;
  height: 6rem;
  padding-top: 6rem;
  padding-left: 1.5rem;  
  
  @media all and (min-width: 768px){
    padding-top: 14rem;
  }
`;

export const StarContainer = styled.div`
  padding-bottom: 1rem;
  font-size: 1.3em;
`;

/** Menu */
export const Background = styled.div`
background-color: #eeeeee;
`;
export const Menu = styled.section`
  display: grid;
  grid-template-rows: 2rem;
  grid-template-columns: auto;
  text-align: center;
  padding-top: .8rem;
  font-size: ${fontSize};
  background-color: #ffffff;
`;

export const MenuItem1 = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  border-bottom: ${props=>props.selected ? `solid 2px ${themeColor}` : 'none' };
  `;

export const MenuItem2 = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: ${props=>props.selected ? `solid 2px ${themeColor}` : 'none' }
`;

/** List Items */
export const SalonWrapper = styled.section`
  display: grid;
  grid-template-rows: 3rem;
  padding: 1rem 0;
  line-height: 3rem;
  background-color: #ffffff;
  font-size: ${fontSize};
`;
export const SalonInfoItem = styled.div`
display: grid;
grid-template-rows: 3rem;
grid-template-columns: 2.5rem 11rem 1fr;
border-bottom: solid .5px #eeeeee;
margin: 0 1rem;
`;

export const ImageAdjuster = styled.div`
  margin-top: .4rem;
`;

export const Description = styled.article`
  line-height: 1.2rem;
  font-size: .9rem;
  padding: 1rem ${paddingSide};
`;