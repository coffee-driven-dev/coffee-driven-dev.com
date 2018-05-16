<template>
	<footer class="container-footer">
		<router-link to="/contact">Contact</router-link>
		<router-link to="/join-our-network">Join Network</router-link>
	</footer>
</template>

<script>
// todo: sticky footer
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.container-footer {
  align-items: center;
  color: #c4c4c4;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 75px;
}

a {
  display: inline-block;
  color: #c4c4c4;
  margin: 0 10px;
  padding: 5px 15px;
  font-size: 15px;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
