<template>
  <div class="about">

	<!-- <cdd-app-navigation :page="selectedFace" /> -->

	<section style="background-color: white; min-height: 200px;">
		<cdd-row>
			<h1 style="color: dodgerblue">About</h1>

			<ul>
				<li>Medium</li>
				<li>Twitch</li>
				<li>Youtube</li>
				<li>Newsletter / Archive</li>
				<li>Join / Contact</li>
			</ul>
		</cdd-row>
	</section>

	<transition-group
		class="face-container"
		name="flip-list"
		tag="ul"
	>
		<li
			v-for="face in faces"
			:key="face.name"
			class="face-item"
			@click="shuffle"
		>
			<img :src="face.src" />
		</li>
	</transition-group>


  </div>
</template>

<script>
import CddRow from "@components/Row.vue";
import CddAppNavigation from "@components/AppNavigation.vue";

// This library is overkill
import _ from "lodash";

// Images
import db from "../assets/team/danny-brown.jpeg";
import so from "../assets/team/sean-ocallahan.jpg";
import wl from "../assets/team/william-lopez.jpeg";

export default {
  name: "AboutView",
  components: {
    CddRow,
    CddAppNavigation
  },
  data() {
    return {
      selectedFace: "danny",
      faces: [
        {
          name: "danny",
          src: db
        },
        {
          name: "sean",
          src: so
        },
        {
          name: "william",
          src: wl
        }
      ]
    };
  },
  methods: {
    shuffle: function() {
      debugger;
      this.faces = _.shuffle(this.faces);
    }
  }
};
</script>

<style lang="scss" scoped>
.face-container {
  display: flex;
  justify-content: space-around;
}
.face-item {
  cursor: pointer;
  width: 75px;
  height: 75px;
  border-radius: 100%;
  overflow: hidden;

  //
  transition: all 2s ease-in-out;

  img {
    width: 100%;
    height: 100%;
  }
}

.face-item:first-child {
  height: 125px;
  width: 125px;
  transition: all 2s ease-in-out;
}

.flip-list-move {
  transition: transform 1s;
}
</style>
