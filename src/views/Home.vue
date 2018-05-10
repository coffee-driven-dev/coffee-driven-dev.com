<template>
  <div class="home">
	  <cdd-row>
		<cdd-card style="display: flex; flex-wrap: wrap;">

			<h2 style="margin-top: 55px; margin-bottom: 15px;">Video Series</h2>
			<section style="display: flex; flex-direction: row;">			
				<!-- Navigate Left -->
				<!-- TODO -->

				
				
				<div class="card-deck-container">
					<template
						v-for="(x, i) in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
					>
						<cdd-card-deck class="card-deck-item" :key="i" />
					</template>
				</div>

				<!-- Navigate Right -->
				<!-- TODO: -->
			</section>

				<h2 style="margin-top: 55px; margin-bottom: 15px;">Quick Clips</h2>
				<div class="card-deck-container">
					<template
						v-for="(x, i) in [1, 2, 3, 4]"
					>
						<cdd-card-deck class="card-deck-item" :key="i" />
					</template>
				</div>
				<h2>Medium Posts</h2>
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
@import "~@styles/_global.scss";

.card-deck-container {
  display: flex;
  width: 100%;
  justify-content: space-between;

  overflow-x: auto;
  overflow-y: hidden;
  padding: 5px 0;
  scroll-behavior: smooth;
}

@media (max-width: $SM) {
  .card-deck-container {
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
    overflow-x: auto;
  }
}

.card-deck-item {
  flex-grow: 1;
}
</style>
