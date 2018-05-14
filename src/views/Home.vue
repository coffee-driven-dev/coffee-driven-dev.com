<template>
  <div class="home">
	  <cdd-row>
		<cdd-card class="home-card">

			<h2>Video Series</h2>		
			<section ref="video-deck-row" class="card-deck-row">			
				<!-- Navigate Left -->
				<div
					class="navigate-arrow navigate-arrow--left"
					@click="scrollLeft($refs['video-deck'])"
					v-show="showVideoLeft"
				>
					<cdd-card-deck-arrow-left />
				</div>			
				
				<div ref="video-deck" class="card-deck-container">
					<template
						v-for="(x, i) in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
					>
						<cdd-card-deck class="card-deck-item" :key="i" />
					</template>
				</div>

				<!-- Navigate Right -->
				<div
					class="navigate-arrow navigate-arrow--right"
					@click="scrollRight($refs['video-deck'], $refs['video-deck-row'])"
					v-show="showVideoRight"
				>
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
  },
  data() {
    return {
      cardWidth: 164,
      showVideoLeft: false,
      showVideoRight: true
    };
  },
  methods: {
    scrollLeft(cardContainer) {
      const xPosition = cardContainer.scrollLeft;
      const newPosition = xPosition - this.cardWidth * 3;
      cardContainer.scrollLeft = newPosition;
      //
      this.showVideoRight = true;
      // Hide left arrow if at beginning
      const atStart = newPosition <= 0;
      if (atStart) {
        this.showVideoLeft = false;
      }
    },
    scrollRight(cardContainer, parent) {
      const xPosition = cardContainer.scrollLeft;
      const newPosition = xPosition + this.cardWidth * 1;
      cardContainer.scrollLeft = newPosition;
      // Show left
      this.showVideoLeft = true;
      //
      const arrowButtonWidth = 50;
      const maxScroll =
        parent.offsetWidth - arrowButtonWidth * 2 - cardContainer.offsetWidth;
      const atEnd = newPosition >= maxScroll;
      if (atEnd) {
        this.showVideoRight = false;
      }
    }
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
  margin-left: 55px;
  margin-bottom: 15px;

  @media (max-width: $SM) {
    margin-left: 30px;
  }
}

.card-deck-row {
  display: flex;
  flex-direction: row;
}

.navigate-arrow {
  align-items: center;
  display: flex;
  flex-basis: 49px;
  width: 49px;
  flex-direction: column;
  height: 188px;
  justify-content: center;
  padding: 5px 0;

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
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    display: none;
  }

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
