<template>
  <div class="home">
	  <cdd-row>
		<cdd-card style="display: flex; flex-wrap: wrap;">
			<section style="padding: 0 30px;">
				<h2>Video Series</h2>
				<cdd-card-deck />
				<h2>Quick Clips</h2>
				<cdd-card-deck />
				<h2>Medium Posts</h2>
			</section>
		</cdd-card>
	  </cdd-row>
  </div>
</template>

<script>
import CddRow from "@components/Row.vue";
import CddCard from "@components/Card.vue";
import CddCardDeck from "@components/CardDeck.vue";

export default {
  name: "home",
  components: {
    CddCard,
    CddCardDeck,
    CddRow
  }
};
</script>

<style lang="scss" scoped>
</style>
