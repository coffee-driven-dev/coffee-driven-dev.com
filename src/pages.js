import store from './store';

const beforeEachGuard = function(routeName) {
  // go tell the store to update the page
  console.log(store)
  store.commit("updatePage", routeName);
};

export { beforeEachGuard };
