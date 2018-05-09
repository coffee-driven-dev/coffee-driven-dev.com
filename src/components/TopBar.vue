<template>
	<div class="blue" :class="{ collapsed: collapsed }">
		<nav class="container">
			<cdd-row>
				<div class="brand">
					<img src="https://placehold.it/50x50" />
					<span>coffee_driven_dev</span>
				</div>
				<div class="navigation">
					<router-link to="about">About Us</router-link>
					<a href="https://www.twitch.tv/dannyrbrown" class="primary">Follow Us</a>
				</div>
			</cdd-row>
			<transition name="fade">
				<cdd-row v-if="!collapsed" style="justify-content: space-between">
					<div class="hero-container">
						<h1 style="margin: 10px 0; color: #FFF; font-size: 33px;">Community. Lorem Ipsum. Education. Fun!</h1>
					</div>
					<div class="graphic-container">
						<cdd-twitch-player />

					</div>
				</cdd-row>
			</transition>
		</nav>
	</div>
</template>

<script>
import CddTwitchPlayer from "@components/TwitchPlayer.vue";
import CddRow from "@components/Row.vue";

export default {
  name: "TopBar",
  components: {
    CddRow,
    CddTwitchPlayer
  },
  props: {
    collapsed: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@styles/_global.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.blue {
  background: $primary;
  padding-bottom: 150px;
  width: 100%;
  max-height: 9999px;

  transition-delay: 2s;
  transition-duration: 0.3s;
  transition-property: max-height, padding-bottom;
  transition-timing-function: ease-in-out;

  &.collapsed {
    overflow: hidden;
    max-height: 75px;
    padding-bottom: 0;
  }
}

.container {
  background-color: $primary;
  margin-bottom: 30px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 5;

  &.shadow {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
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
  width: 37.5%;
  display: flex;
  flex-direction: column;
  margin: 25px 0 10px 0;
}

.brand {
  display: flex;
  margin-top: 10px;

  // Replace with SVG
  span {
    display: flex;
    margin-left: 15px;
    font-size: 28px;
    align-items: center;
    justify-content: center;
    color: white;
  }
}

.navigation {
  height: 60px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  padding: 10px 0;
  flex-grow: 1;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0 10px;
    margin: 0 5px;
    background: none;
    outline: transparent;
    border: none;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.5px;
    transition-duration: 0.2s;
    transition-property: background-color, color, opacity;

    &.primary {
      background: #fff;
      border-radius: 10px;
      color: $primary;
    }

    &:hover {
      opacity: 0.75;
    }
  }
}
</style>
