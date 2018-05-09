<template>
	<div id="twitch-player">
	</div>
</template>

<script>
export default {
  name: "TwitchPlayer",
  mounted() {
    var options = {
      width: 400,
      height: 300,
      channel: "dannyrbrown"
    };
    var player = new Twitch.Player("twitch-player", options);
    player.setVolume(0.5);
  }
};
</script>

<style scoped>
</style>
