<template>
  <div id="app">

	<!-- BLUE SECTION -->
	<div class="blue" :class="{ collapsed: isNavCollapsed }">
		<!-- NAV -->
		<cdd-top-bar />

		<!-- HERO CTA -->
		<transition name="fade">
			<cdd-row v-if="!isNavCollapsed" style="justify-content: space-between; flex-wrap: wrap;">
				<div class="hero-container">
					<h1 style="margin: 10px 0; color: #FFF; font-size: 33px;">Community. Lorem Ipsum. Education. Fun!</h1>
				</div>
				<div class="graphic-container">
					<cdd-twitch-player />

				</div>
			</cdd-row>
		</transition>
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
import { mapState } from "vuex";
import CddAppNavigation from "./components/AppNavigation.vue";
import CddTopBar from "./components/TopBar.vue";
import CddTwitchPlayer from "@components/TwitchPlayer.vue";
import CddFooter from "@components/Footer.vue";

export default {
  name: "App",
  components: {
    CddAppNavigation,
    CddTopBar,
    CddTwitchPlayer,
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
  min-width: 350px;
  overflow-x: hidden;
}

// App
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/*
 * PAGE Transition
*/
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

// Blue container
.blue {
  background: $primary;
  padding-bottom: 150px;
  width: 100%;
  overflow: hidden;
  max-height: 600px;

  transition-delay: 0.15s;
  transition-duration: 0.3s;
  transition-property: max-height, padding-bottom;
  transition-timing-function: ease-in-out;

  &.collapsed {
    overflow: hidden;
    max-height: 75px;
    padding-bottom: 0;
  }
}

.hero-container {
  width: 50%;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.graphic-container {
  align-items: flex-end;
  min-width: 400px; // Vid player min
  width: 37.5%;
  display: flex;
  flex-direction: column;
  margin: 25px 0 10px 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
