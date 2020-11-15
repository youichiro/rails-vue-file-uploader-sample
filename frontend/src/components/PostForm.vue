<template>
  <div>
    <section>
      <label for="title">title: </label>
      <input type="text" name="title" v-model="title" placeholder="title" />
    </section>
    <section>
      <label for="image">image: </label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/png,image/jpeg"
        :value="filename"
        @change="setImage"
      />
    </section>
    <section>
      <button type="submit" @click="upload">upload</button>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PostForm",
  data: () => ({
    title: "",
    filename: null,
    imageFile: null
  }),
  methods: {
    ...mapActions("posts", ["createPost"]),
    setImage(e) {
      e.preventDefault();
      this.imageFile = e.target.files[0];
    },
    upload() {
      let formData = new FormData();
      formData.append("image", this.imageFile);
      const params = {
        title: this.title,
        image: formData
      };
      this.createPost(params);
    }
  }
};
</script>
