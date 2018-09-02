import loadIC from './loadIC';

const initialize = (options) => {
  if (typeof window === 'undefined') return false;
  //loads intercom script on page
  loadIC(options);

  options ? internalIc('create', undefined, options) : internalIc('create', undefined, 'auto')
  
  return true;
}

const ic =(...args) => {
  if (args.length > 0) {
    internalIc(...args);
  }
  return window.ic;
}

const internalIc = (...args) => {
  if (!window.ic) {
    return console.warn('ReactIC.initialize must be called first');
  }
  return window.ic(...args);
};



export default {
  initialize,
  ic
};
