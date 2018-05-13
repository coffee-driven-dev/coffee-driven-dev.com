<template>
	<div id="twitch-embed">
	</div>
</template>

<script>
export default {
  name: "TwitchPlayer",
  mounted() {
    var options = {
      width: "100%",
      height: "100%",
      channel: "dannyrbrown",
      layout: "video"
    };

    new Twitch.Embed("twitch-embed", options);
  }
};
</script>

<style scoped>
#twitch-embed {
  width: 100%;
  height: 100%;
}
</style>
