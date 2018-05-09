<template>
	<nav class="container">
		<cdd-row>
			<div class="brand">
				<img src="https://placehold.it/50x50" />
				<span>coffee_driven_dev</span>
			</div>
			<div class="navigation">
				<button>Log In</button>
				<button class="primary">Sign Up</button>
			</div>
		</cdd-row>
		<cdd-row style="justify-content: space-between">
			<div class="hero-container">
				<h1 style="margin: 10px 0; color: #FFF; font-size: 33px;">Community. Lorem Ipsum. Education. Fun!</h1>
			</div>
			<div class="graphic-container">
				<img src="https://placehold.it/271x257" />
			</div>
		</cdd-row>
	</nav>
</template>

<script>
import CddRow from "@components/Row.vue";

export default {
  name: "TopBar",
  components: {
    CddRow
  }
};
</script>

<style lang="scss" scoped>
@import "~@styles/_global.scss";

.container {
  background-color: $blue;
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
</style>
