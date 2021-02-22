<template>
  <div class="style">
    <div class="left">
      <h1>公共头部</h1>
    </div>
    <div class="main">
      <Nuxt />
    </div>
    <div class="floot">
      <h1>公共底部</h1>
      <h1 class="ha">hahah</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.style {
  width: 100%;
  height: 100%;
  .left {
    text-align: center;
    height: 10%;
    background: pink;
  }
  .main {
    height: 80%;
  }
  .floot {
    text-align: center;
    background: chartreuse;
    height: 10%;
    .ha {
      font-size: 12px;
      color: gray;
    }
  }
}
</style>
