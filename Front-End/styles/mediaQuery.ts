const tabletQuery = () => `@media all and (max-width:1140px)`;
const mobileQuery = () => `@media all and (max-width:600px)`;
const mobileLargeQuery = () => `@media all and (max-width:550px)`;
const mobileHalfQuery = () => `@media all and (max-width:450px)`;
export const media = {
  tablet: tabletQuery,
  mobile: mobileQuery,
  mobile_550: mobileLargeQuery,
  mobile_450: mobileHalfQuery,
};
