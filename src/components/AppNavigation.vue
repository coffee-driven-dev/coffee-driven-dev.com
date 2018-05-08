<template>
    <!--we use the page to update the class with a conditional-->
	<svg :class="{ 'active' : (page === 'about') }" xmlns="http://www.w3.org/2000/svg" width="447" height="442" viewBox="0 0 447 442">
		<!-- we use the transition group component, we need a g tag because it’s SVG-->
		<transition-group name="layout" tag="g">
		<rect class="items rect" ref="rect" key="rect" width="171" height="171"/>
		<circle class="items circ" key="circ" id="profile" cx="382" cy="203" r="65"/>
		<g class="items text" id="text" key="text">
			<rect x="56" y="225" width="226" height="16"/>
			<rect x="56" y="252" width="226" height="16"/>
			<rect x="56" y="280" width="226" height="16"/>
		</g>
		<rect class="items footer" key="footer" id="footer" y="423" width="155" height="19" rx="9.5" ry="9.5"/>
		</transition-group>
	</svg>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'AppNavigation',
	computed: mapState(['page'])
}
</script>

<style lang="scss" scoped>
.items {
  transition: all 0.4s ease;
}

#text {
  transform-origin: 50% 50%;
}

svg {
  fill: #A8DADC;
}

.active {
  fill: #E63946;
  .rect { 
    transform: translate3d(0, 30px, 0); 
  }
  .circ {
    transform: translate3d(30px, 0, 0) scale(0.5);
  }
  .text {
    transform: rotate(90deg) scaleX(0.08) translate3d(-300px, -35px, 0);
  }
  .footer {
    transform: translate3d(100px, 0, 0);
  }
}
</style>