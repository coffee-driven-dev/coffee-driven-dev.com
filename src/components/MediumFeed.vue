<template>
	<div class="card-row">

		<a v-for="post in posts" :href="post.link" :key="post.guid">
			<div class="card">
				<div class="card-media">
					<img :src="post.thumbnail">
				</div>
				<div class="card-body">
					<h3>{{ post.title }}</h3>
					<h5>Authored by <a :href="authorUrls[post.author]">{{ post.author }}</a></h5>
					<div>
						<label>Categories:</label>
						<span class="category" v-for="(category, i) in post.categories" :key="i">{{ category }}</span>
					</div>
				</div>
			</div>
		</a>
		
	</div>
</template>

<script>
import axios from "axios";

export default {
  name: "MediumFeed",
  data() {
    return {
      posts: [],
      authorUrls: {
        "Danny Brown": "https://medium.com/@dannyrb"
      }
    };
  },
  async created() {
    const mediumFeed = await this.getMediumFeed();
    if (mediumFeed && mediumFeed.data && mediumFeed.data.items) {
      this.posts = mediumFeed.data.items;
    }
  },
  methods: {
    // Returns:
    // response.data.feed
    // response.data.items
    async getMediumFeed() {
      try {
        const mediumRssFeed = "https://medium.com/feed/coffee-driven-dev";
        const rssToJsonApi = "https://api.rss2json.com/v1/api.json";
        const data = { params: { rss_url: mediumRssFeed } };
        return await axios.get(rssToJsonApi, data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@styles/_global.scss";

a,
a:visited {
  text-decoration: none;
  color: inherit;
}

.card-row {
  display: flex;
  margin-left: 49px;
  margin-right: 49px;
  padding-bottom: 15px;
  overflow-x: hidden;

  flex-basis: 984px;

  @media (max-width: $MD) {
    flex-basis: 820px;
  }

  @media (max-width: $SM) {
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
    overflow-x: auto;
    margin: 0;
  }
}

.card {
  width: 100%;
  max-width: 240px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 0.25rem;
  background-color: #fff;
  margin: 0 10px;

  img {
    max-width: 100%;
    border-style: solid;
  }
}

.card-body {
  padding: 1rem;
}
.card-body-content {
  font-size: 0.875rem;
  color: #3d4852;
}

label {
  font-weight: 700;
  margin-bottom: 3px;
  display: block;
}

.category {
  font-style: italic;

  &::after {
    content: ", ";
  }
  &:last-child::after {
    content: "";
  }
}

h3 {
  color: #38c172;
  margin: 0;
  margin-bottom: 0.25rem;
}

h5 {
  color: #3d4852;
  margin: 0;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    font-size: 0.875rem;
    color: #8795a1;
    background-color: transparent;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
