import store from "./store";

const beforeEachGuard = function(routeName) {
  store.commit("updatePage", routeName);
};

export { beforeEachGuard };
