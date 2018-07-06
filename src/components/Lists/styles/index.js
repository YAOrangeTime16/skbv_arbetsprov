import styled from 'styled-components';

/** List Page
 *  - Default values
 *  - Header
 *  - Price List
 *  - List Items
 */

/** Default values */
const fontSize = "1.5em";
const paddingSide = "1rem";
const specialFont = `"MillerBanner", serif`;
const themeColor = "#b69f58";

export const Margin = styled.div`
  margin: .4rem 0;
`;

/** Header */
export const HeaderText = styled.h1`
  font-family: ${specialFont};
  font-size: 2rem;
  font-weight: 100;
  margin-top: 1rem;
`;

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: 4.5rem 1fr;
  border-bottom: solid .5px ${themeColor};
  padding-top: 1rem;
`;

export const Column1 = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  padding-top: 1.5rem;
  padding-left: ${paddingSide};
`;

export const Column2 = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  text-align: center;
`;

export const Column3 = styled.div`
  grid-row: 1 / 2;
  grid-column: 3 / 4;
  text-align: right;
  padding-top: 1.8rem;
  padding-right: ${paddingSide};
`;

/** Price List */
export const PriceListWrapper = HeaderWrapper.extend`
  grid-template-rows: 3rem;
  grid-template-columns: 45% 45% 10%;
  margin-top: .5rem;
  padding-bottom: .5rem;
  padding-top: 0rem;
`;
export const PriceListItemMenu1 = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  font-size: ${fontSize};
  padding-left: ${paddingSide};
`;

export const PriceListItemMenu2 = styled.div`
  grid-row: 1 / 2;
  grid-column: 3 / 4;
  padding-top: 1rem;
  text-align: right;
  padding-right: ${paddingSide};
`;

/** List Items */
export const ListTitle = styled.div`
  font-family: ${specialFont};
  font-size: 1.5em;
  padding-bottom: .7rem;
`;

export const SmallFont = styled.div`
  font-size: .8rem;
  padding-top: .3rem;
`;

export const SalonListWrapper = styled.section`
  margin: 1rem;
  border-bottom: solid .5px #eeeeee;
  display: grid;
  grid-template-columns: 20% 55% 15% auto;
  grid-template-rows: 6rem;
  font-size: 1.45em;
`;

export const SalonColumn1 = Column1.extend`
  padding-top: 1.5rem;
  padding-left: 0;
`;

export const SalonColumn2 = Column2.extend`
  padding-top: 0;
  text-align: left;
`;

export const SalonColumn3 = Column3.extend`
  padding-top: 1.5rem;
  padding-right: 0;
  text-align: right;
`;

export const SalonColumn4 = styled.div`
  grid-row: 1 / 2;
  grid-column: 4 / 5;
  padding-top: 2rem;
  padding-right: 0;
  text-align: right;
`;
