<template>
  <div class="home">
	  <cdd-row>
		<cdd-card class="home-card">

			<h2>Video Series</h2>		
			<section class="card-deck-row">			
				<!-- Navigate Left -->
				<div class="navigate-arrow navigate-arrow--left">
					<cdd-card-deck-arrow-left />
				</div>			
				
				<div class="card-deck-container">
					<template
						v-for="(x, i) in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
					>
						<cdd-card-deck class="card-deck-item" :key="i" />
					</template>
				</div>

				<!-- Navigate Right -->
				<div class="navigate-arrow navigate-arrow--right">
					<cdd-card-deck-arrow-right />
				</div>
			</section>

			<h2>Quick Clips</h2>
			<section class="card-deck-row">			
				<!-- Navigate Left -->
				<div class="navigate-arrow navigate-arrow--left">
					<cdd-card-deck-arrow-left />
				</div>	

				<div class="card-deck-container">
					<template
						v-for="(x, i) in [1, 2, 3, 4]"
					>
						<cdd-card-deck class="card-deck-item" :key="i" />
					</template>
				</div>

				<!-- Navigate Right -->
				<div class="navigate-arrow navigate-arrow--right">
					<cdd-card-deck-arrow-right />
				</div>
			</section>

			<h2>Medium Posts</h2>
		</cdd-card>
	  </cdd-row>
  </div>
</template>

<script>
import CddRow from "@components/Row.vue";
import CddCard from "@components/Card.vue";
import CddCardDeck from "@components/CardDeck.vue";
import CddCardDeckArrowRight from "@components/CardDeckArrowRight.vue";
import CddCardDeckArrowLeft from "@components/CardDeckArrowLeft.vue";

export default {
  name: "home",
  components: {
    CddCard,
    CddCardDeck,
    CddCardDeckArrowRight,
    CddCardDeckArrowLeft,
    CddRow
  }
};
</script>

<style lang="scss" scoped>
@import "~@styles/_global.scss";

.home-card {
  display: flex;
  flex-wrap: wrap;
}

h2 {
  margin-top: 35px;
  margin-left: 30px;
  margin-bottom: 15px;
}

.card-deck-row {
  display: flex;
  flex-direction: row;
}

.navigate-arrow {
  width: 30px;

  @media (max-width: $SM) {
    display: none;
  }
}

.card-deck-container {
  display: flex;
  width: 100%;
  flex-basis: 984px;
  justify-content: space-between;

  overflow-x: auto;
  overflow-y: hidden;
  padding: 5px 0;
  scroll-behavior: smooth;

  @media (max-width: $MD) {
    flex-basis: 820px;
  }

  @media (max-width: $SM) {
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
