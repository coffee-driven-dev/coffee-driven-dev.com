<template>
  <div id="app">

	<div class="blue">
		<nav class="top-bar">
			<div class="row">
				<div class="brand">
					<img src="https://placehold.it/50x50" />
					coffee_driven_dev
				</div>
				<div class="navigation">
					<button>Log In</button>
					<button class="primary">Sign Up</button>
				</div>
			</div>
		</nav>
	</div>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
	<app-navigation />

	<transition name="page">
    	<router-view/>
	</transition>
  </div>
</template>

<script>
import AppNavigation from "./components/AppNavigation.vue";

export default {
  name: "App",
  components: {
    AppNavigation
  }
};
</script>

<style lang="scss">
@import "~@styles/_reset.scss";
@import "~@styles/_border-box.scss";
@import "~@styles/_fonts.scss";

$blue: #32cdff;

// App
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.row {
  display: flex;
  margin: 0 auto;
  width: 1082px;
}

.brand {
  display: flex;
  margin-top: 10px;
}

.navigation {
  height: 60px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  padding: 10px 0;
  flex-grow: 1;

  button {
    padding: 0 10px;
    margin: 0 5px;
    background: none;
    outline: transparent;
    border: none;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &.primary {
      background: #fff;
      border-radius: 10px;
      color: $blue;
    }
  }
}

.blue {
  background: $blue;
  overflow: hidden;
  padding-bottom: 150px;
  width: 100;
}

.top-bar {
  background-color: $blue;
  // only on other pages
  // box-shadow: 0 3px 5px rgba(0,0,0,.05);
  box-sizing: border-box;
  height: 60px;
  margin-bottom: 30px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 5;
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
