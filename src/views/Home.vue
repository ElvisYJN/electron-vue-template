<template>
  <div class="P-Home">
    <div class="G-container">
      <h1>Home页面</h1>
      <Login></Login>
    </div>
  </div>
</template>

<script>
  import Login from '@/components/moduleA/moduleA';

  export default {
    name: 'home',
    components: {
      Login
    },
    methods: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .P-Home
    .G-container
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0
      background: #00d0ff
      h1
        font-size: 28px
        color: #fff;
        text-align: center
</style>
