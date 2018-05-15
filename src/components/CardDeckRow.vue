<template>
	<section ref="parent" class="card-deck-row">			
		<!-- Navigate Left -->
		<div
			class="navigate-arrow navigate-arrow--left"
			:class="{ 'disabled': !showLeftArrow }"
			@click="scrollLeft"
		>
			<cdd-card-deck-arrow-left />
		</div>			
		
		<div ref="cardcontainer" class="card-deck-container">
			<template
				v-for="(x, i) in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
			>
				<cdd-card-deck class="card-deck-item" :key="i" />
			</template>
		</div>

		<!-- Navigate Right -->
		<div
			class="navigate-arrow navigate-arrow--right"
			:class="{ 'disabled': !showRightArrow }"
			@click="scrollRight"
		>
			<cdd-card-deck-arrow-right />
		</div>
	</section>
</template>

<script>
import CddCardDeck from "@components/CardDeck.vue";
import CddCardDeckArrowRight from "@components/CardDeckArrowRight.vue";
import CddCardDeckArrowLeft from "@components/CardDeckArrowLeft.vue";

export default {
  components: {
    CddCardDeck,
    CddCardDeckArrowRight,
    CddCardDeckArrowLeft
  },
  data() {
    return {
      cardWidth: 164,
      showLeftArrow: false,
      showRightArrow: true
    };
  },
  methods: {
    scrollLeft() {
      //
      const cardContainer = this.$refs.cardcontainer;
      //
      const xPosition = cardContainer.scrollLeft;
      const newPosition = xPosition - this.cardWidth * 3;
      cardContainer.scrollLeft = newPosition;
      //
      this.showRightArrow = true;
      // Hide left arrow if at beginning
      const atStart = newPosition <= 0;
      if (atStart) {
        this.showLeftArrow = false;
      }
    },
    scrollRight() {
      //
      const cardContainer = this.$refs.cardcontainer;
      const parent = this.$refs.parent;
      //
      const xPosition = cardContainer.scrollLeft;
      const newPosition = xPosition + this.cardWidth * 3;
      cardContainer.scrollLeft = newPosition;
      // Show left
      this.showLeftArrow = true;
      //
      const arrowButtonWidth = 50;
      const maxScroll =
        parent.offsetWidth - arrowButtonWidth * 2 - cardContainer.offsetWidth;
      const atEnd = newPosition >= maxScroll;
      if (atEnd) {
        this.showRightArrow = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@styles/_global.scss";

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

  &:hover {
    cursor: pointer;
    background-color: darken(#ffffff, 6%);
    opacity: 0.7;
  }

  &:active {
    background-color: darken(#ffffff, 12%);
  }

  &.disabled,
  &.disabled:hover,
  &.disabled:active {
    opacity: 0;
    cursor: default;
  }

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
