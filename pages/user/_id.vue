<template>
  <el-card>
    <h1>{{title + ':' + $route.params.id}}</h1>
    <nuxt-link to="/">首页</nuxt-link>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      title: '获取id'
    }
  }
}
</script>

<style>

</style>