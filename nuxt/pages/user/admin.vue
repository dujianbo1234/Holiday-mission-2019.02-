<template>
  <el-card>
    <h1>{{title}}</h1>
    <div>{{$route.query.data}}</div>
    <nuxt-link to="/">首页</nuxt-link>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      title: '会员中心'
    }
  }
}
</script>

<style>

</style>