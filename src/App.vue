<template>
  <div id="app">

	<!-- NAV -->
	<div class="blue">
		<cdd-top-bar />
	</div>

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
import CddAppNavigation from "./components/AppNavigation.vue";
import CddTopBar from "./components/TopBar.vue";
import CddFooter from "@components/Footer.vue";

export default {
  name: "App",
  components: {
    CddAppNavigation,
    CddTopBar,
    CddFooter
  }
};
</script>

<style lang="scss">
@import "~@styles/_global.scss";
@import "~@styles/_reset.scss";
@import "~@styles/_border-box.scss";
@import "~@styles/_fonts.scss";

body {
  background: #f7f7f7;
  color: #5c5c5c;
}

// App
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.blue {
  background: $blue;

  padding-bottom: 150px;
  width: 100%;
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
