<template>
	<nav>
		<cdd-row>
			<router-link to="/">
				<div class="brand">
					<cdd-logo fill-start="#FFF" fill-end="#FFF" height="60" />
					<cdd-logo-text class="logo-text" :height="35" />
				</div>
			</router-link>
			<div class="menu">
				<router-link to="about">About</router-link>
				<a href="https://www.twitch.tv/dannyrbrown" class="primary">Susbscribe</a>
			</div>
		</cdd-row>
	</nav>
</template>

<script>
import CddRow from "@components/Row.vue";
import CddLogo from "@components/svgs/Logo.vue";
import CddLogoText from "@components/svgs/LogoText.vue";

export default {
  name: "TopBar",
  components: {
    CddRow,
    CddLogo,
    CddLogoText
  }
};
</script>

<style lang="scss" scoped>
@import "~@styles/_global.scss";

// Container
nav {
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

// Logo/Brand
.brand {
  display: flex;
  margin-top: 10px;

  .logo-text {
    margin-left: 5px;
    margin-top: 8px;
  }
}

@media (max-width: $XS) {
  .logo-text {
    display: none;
  }
}

// Menu
.menu {
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
