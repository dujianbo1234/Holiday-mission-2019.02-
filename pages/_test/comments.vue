<template>
  <el-card>
    <h1>{{ title + ":" + $route.params.test }}</h1>
    <div>id: {{ $route.query.id }}</div>
    <nuxt-link to="/">首页</nuxt-link>
  </el-card>
</template>

<script>
export default {
  layout: "style",
  data() {
    return {
      title: "_test/comments.vue"
    };
  }
};
</script>

<style>
</style>
