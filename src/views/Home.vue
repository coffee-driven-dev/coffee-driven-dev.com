<template>
  <div class="home">
	  <cdd-row>
		<cdd-card class="home-card">

			<h2>Video Series</h2>		
			<cdd-card-deck-row />

			<h2>Quick Clips</h2>
			<cdd-card-deck-row />

			<h2>Medium Posts</h2>
		</cdd-card>
	  </cdd-row>
  </div>
</template>

<script>
import CddRow from "@components/Row.vue";
import CddCard from "@components/Card.vue";
import CddCardDeckRow from "@components/CardDeckRow.vue";

export default {
  name: "home",
  components: {
    CddCard,
    CddCardDeckRow,
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
  margin-left: 55px;
  margin-bottom: 15px;

  @media (max-width: $SM) {
    margin-left: 30px;
  }
}
</style>
