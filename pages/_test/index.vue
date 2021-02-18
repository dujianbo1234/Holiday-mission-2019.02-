<template>
  <el-card>
    <h1>{{title + ':' + $route.params.test}}</h1>
    <nuxt-link to="/">首页</nuxt-link>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      title: '_test/index.vue'
    }
  }
}
</script>

<style>

</style>