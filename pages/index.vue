<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        {{title}}
      </h1>
      <div class="links">
        <nuxt-link class="button--green" to="/user/admin">会员中心</nuxt-link>
        <nuxt-link class="button--grey" to="/user/1">路由id=1</nuxt-link>
        <nuxt-link class="button--grey" to="/user/2">路由id=2</nuxt-link>
        <nuxt-link class="button--grey" to="/3">路由test=3</nuxt-link>
        <nuxt-link class="button--grey" to="/4/comments?id=666">路由comments=4</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'nuxt-code'
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
