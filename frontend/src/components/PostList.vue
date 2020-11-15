<template>
  <div>
    <h2>PostList</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }} {{ post.image_url || "nil" }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PostList",
  created() {
    this.fetchPosts();
  },
  computed: {
    ...mapGetters("posts", ["posts"])
  },
  methods: {
    ...mapActions("posts", ["fetchPosts"])
  }
};
</script>
