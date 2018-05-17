<template>
  <div id="app">

	<!-- BLUE SECTION -->
	<div class="blue" :class="{ collapsed: isNavCollapsed }">
		<!-- NAV -->
		<cdd-top-bar />

		<!-- HERO CTA -->
		<transition name="fade">
			<cdd-row v-if="!isNavCollapsed" class="magic">
				<div class="hero-container">
					<h1>
						Live social coding; join the 💬, level up your 💻, sip a bit of ☕ 
					</h1>
					<cdd-tiny-letter-form />
				</div>
				<div class="graphic-container">
					<cdd-twitch-player />
				</div>
			</cdd-row>
		</transition>
	</div>

	<!-- PAGE -->
	<!-- <cdd-app-navigation /> -->
	<transition name="page" mode="out-in">
    	<router-view/>
	</transition>

	<!-- FOOTER -->
	<cdd-footer />

  </div>
</template>

<script>
import { mapState } from "vuex";
import CddRow from "@components/Row.vue";
import CddTinyLetterForm from "@components/TinyLetterForm.vue";
import CddTopBar from "@components/TopBar.vue";
import CddTwitchPlayer from "@components/TwitchPlayer.vue";
import CddFooter from "@components/Footer.vue";

export default {
  name: "App",
  components: {
    CddRow,
    CddTopBar,
    CddTwitchPlayer,
    CddTinyLetterForm,
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
  min-width: 320px; // iPhone 5/SE
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
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease-out;
  transition-delay: 0.3s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

// Blue container
.blue {
  background: $primary;
  padding-bottom: 150px;
  width: 100%;
  overflow: hidden;
  max-height: 900px;

  transition-duration: 0.55s;
  transition-property: max-height, padding-bottom;
  transition-timing-function: ease-in-out;

  &.collapsed {
    overflow: hidden;
    max-height: 75px;
    padding-bottom: 0;
  }
}

/* Stacked layout at $SM */
.magic {
  justify-content: space-between;

  @media (max-width: $SM) {
    flex-wrap: wrap;
    // Center when we snap to column
    align-items: center;
    justify-content: center;
  }
}

// On Mobile
// Reverse order, video first, then subscribe
.hero-container {
  display: flex;
  max-width: 450px;
  flex-grow: 1;

  // effects children
  flex-direction: column;
  align-content: center;
  justify-content: center;

  h1 {
    display: inline;
  }
}

// Make video larger
.graphic-container {
  display: flex;
  flex-grow: 1;
  height: 300px;
  max-width: 400px;
  margin: 25px 0 10px 0;

  @media (max-width: $SM) {
    flex-grow: 1;
    max-height: 400px;
    max-width: 550px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
