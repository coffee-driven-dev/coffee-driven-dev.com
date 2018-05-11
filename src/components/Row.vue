<template>
	<div class="row">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: "Row"
};
</script>

<style lang="scss" scoped>
@import "~@styles/_global.scss";

.row {
  display: flex;
  padding: 0 30px;
  margin: 0 auto;
  width: map-get($breakpoints, lg);
}

@media (max-width: $MD) {
  .row {
    width: map-get($breakpoints, md);
  }
}

@media (max-width: $SM) {
  .row {
    width: map-get($breakpoints, sm);
  }
}
</style>
