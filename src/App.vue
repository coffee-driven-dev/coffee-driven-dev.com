<template>
  <div id="app">

	<!-- NAV -->
	<cdd-top-bar :collapsed="isNavCollapsed" />

	<!-- PAGE -->
	<!-- <cdd-app-navigation /> -->
	<transition name="page">
    	<router-view/>
	</transition>

	<!-- FOOTER -->
	<cdd-footer />

  </div>
</template>

<script>
import { mapState } from "vuex";
import CddAppNavigation from "./components/AppNavigation.vue";
import CddTopBar from "./components/TopBar.vue";
import CddFooter from "@components/Footer.vue";

export default {
  name: "App",
  components: {
    CddAppNavigation,
    CddTopBar,
    CddFooter
  },
  computed: {
    ...mapState({
      activePage: state => state.page
    }),
    isNavCollapsed() {
      return this.activePage !== "home";
    }
  }
};
</script>

<style lang="scss">
@import "~@styles/_global.scss";
@import "~@styles/_reset.scss";
@import "~@styles/_border-box.scss";
@import "~@styles/_fonts.scss";

body {
  background: $background;
  color: #5c5c5c;
}

// App
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-enter-active {
  transition: opacity 0.25s ease-out;
}

.page-leave-active {
  transition: opacity 0.25s ease-in;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
