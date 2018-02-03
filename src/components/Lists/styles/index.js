import styled from 'styled-components';

/** Default values */
const specialFont = "MillerBanner";
const paddingSide = "1rem";
const fontSize = "1.4em";

export const Margin = styled.div`
  margin: .4rem 0;
`;

/** List Header */
export const HeaderText = styled.h1`
  font-family: ${specialFont};
  font-size: 2rem;
  font-weight: 100;
`;

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: 4.5rem 1fr;
  border-bottom: solid .5px #b69f58;
  margin-top: 1rem;
`;

export const WrapperItem1 = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  padding-top: 1.5rem;
  padding-left: ${paddingSide};
`;

export const WrapperItem2 = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  text-align: center;
`;

export const WrapperItem3 = styled.div`
  grid-row: 1 / 2;
  grid-column: 3 / 4;
  text-align: right;
  padding-top: 1.8rem;
  padding-right: ${paddingSide};
`;

/** List Price Menu */
export const PriceListWrapper = HeaderWrapper.extend`
  grid-template-rows: 3rem;
  grid-template-columns: 45% 45% 10%;
  margin-top: .5rem;
  padding-bottom: .8rem;
`;
export const PriceListItemMenu1 = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  font-size: 1rem;
  padding-left: ${paddingSide};
`;

export const PriceListItemMenu2 = styled.div`
  grid-row: 1 / 2;
  grid-column: 3 / 4;
  padding-top: 1rem;
`;

/** List Items */
export const ListTitle = styled.div`
  font-family: ${specialFont};
  font-size: 1.5em;
  padding-top: .2rem;
  padding-bottom: .7rem;
`;

export const SmallFont = styled.div`
  font-size: .8rem;
  padding-top: .3rem;
`;

export const StyledListItem = styled.section`
  margin: 1rem;
  border-bottom: solid .5px #eeeeee;
  display: grid;
  grid-template-columns: 20% 45% 25% auto;
  grid-template-rows: 6rem;
  font-size: ${fontSize};
  font-weight: 100;
`;

export const StyledItem1 = WrapperItem1.extend`
  padding-top: 1.5rem;
  padding-left: 0;
`;

export const StyledItem2 = WrapperItem2.extend`
  padding-top: 0;
  text-align: left;
`;

export const StyledItem3 = WrapperItem3.extend`
  padding-top: 1.5rem;
  padding-right: 0;
  text-align: right;
`;

export const StyledItem4 = styled.div`
  grid-row: 1 / 2;
  grid-column: 4 / 5;
  padding-top: 2rem;
  padding-right: 0;
  text-align: right;
`;
