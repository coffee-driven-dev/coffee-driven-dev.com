<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style lang="scss" scoped>
@import "~@styles/_global.scss";

.card {
  border-radius: 25px;
  margin-top: -100px;
  padding: 30px 0;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);

  // Stretch to edges
  // todo: may not be optimal for all cards; just home card
  margin-left: -$row-padding;
  margin-right: -$row-padding;
  width: calc(100% + #{$row-padding} + #{$row-padding});
}

@media (max-width: $SM) {
  .card {
    border-radius: 0;
    box-shadow: none;
  }
}
</style>
