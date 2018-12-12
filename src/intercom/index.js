import loadIC from './loadIC';

const initialize = (options) => {
  if (typeof window === 'undefined') return false;
  //loads intercom script on page
  loadIC(options);
}



export default {
  initialize
};
