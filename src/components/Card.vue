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
  // left/right: 0
  // Because content may need to touch edges, but
  // rarely ever need to touch top/bottom
  padding: 30px 0;
  background: #fff;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
}

@media (max-width: $SM) {
  .card {
    border-radius: 0;
    width: 100%;
    box-shadow: none;
  }
}
</style>
