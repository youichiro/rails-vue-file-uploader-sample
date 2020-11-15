<template>
  <div id="app">
    <PostForm />
    <PostList />
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";

export default {
  name: "App",
  components: {
    PostForm,
    PostList
  }
};
</script>
