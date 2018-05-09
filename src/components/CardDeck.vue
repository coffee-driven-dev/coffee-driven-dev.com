<template>
	<div class="master-container">
		<!-- CARD -->
		<router-link :to="to">
			<div class="card-deck-container" :style="[coverBackgroundUrl]">
				<div class="card-deck-category">
					<img alt="category-name" :src="categorySrc">
				</div>
			</div>
		</router-link>
		<!-- INFO -->
		<a href="/decks/2M79UiGj/mexican-capitals">
			<div class="_26gJL">
				Mexican Capitals
			</div>
		</a>
		<!-- STATS -->
		<div class="_2uJ0e">
			<span class="SVGInline">
				<svg class="SVGInline-svg" width="100%" height="100%" viewBox="379 169 18 18" xmlns="http://www.w3.org/2000/svg"><path stroke="#C4C4C4" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M387.86 182.397l-4.858 2.554.928-5.41-3.93-3.83 5.431-.79 2.43-4.921 2.428 4.922 5.431.789-3.93 3.83.928 5.41z"></path></svg>
			</span>
			117
		</div>
		<div class="_1LLPZ">
			<span class="SVGInline">
				<svg class="SVGInline-svg" width="100%" height="100%" viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><rect id="a" width="13" height="15" rx="2"></rect></defs><g fill="none" fill-rule="evenodd"><path d="M15 3.5V15a2 2 0 0 1-2 2H3.841" stroke="#C6C9CF" stroke-width="1.75" stroke-linecap="round"></path><g><use fill="#FFF" xlink:href="#a"></use><rect stroke="#C6C9CF" stroke-width="1.75" x=".875" y=".875" width="11.25" height="13.25" rx="2"></rect></g></g></svg>
			</span>
			31
		</div>

	</div>
</template>

<script>
export default {
  name: "CardDeck",
  props: {
    to: {
      type: String,
      default: "#",
      required: false
    },
    coverSrc: {
      type: String,
      default: "https://placehold.it/144x166",
      required: false
    },
    categorySrc: {
      type: String,
      default: "https://placehold.it/100/100",
      required: false
    }
  },
  computed: {
    coverBackgroundUrl() {
      return {
        background: `url(${this.coverSrc})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@styles/_global.scss";

.SVGInline {
  display: inline-block;
  height: 18px;
  padding: 0 3px;
  width: 18px;
  font-size: 15px;
}

.master-container {
  flex-shrink: 0;
  padding: 0 10px;
}

.card-deck-container {
  position: relative;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1), 0 6px 0 -1px #fff,
    0 7px 6px rgba(0, 0, 0, 0.1), 0 11px 0 -1px #fff,
    0 12px 6px rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  height: 166.08997px;
  width: 144px;
  margin-bottom: 30px;
  background-position: center top;
  background-size: auto 100%;
  background-repeat: no-repeat;

  img {
    display: none;
    border-radius: 18px;
  }
}

.card-deck-category {
  background: #c4c4c4;
  border: 2px solid #fff;
  border-radius: 100%;
  height: 30px;
  overflow: hidden;
  width: 30px;

  bottom: -12px;
  position: absolute;
  right: 0;
  z-index: 3;
}
</style>
