<template>
  <div class="M-Login">
      <p>account:<input type="text" class="ipt-text"></p>
      <p>password:<input type="password" class="ipt-text"></p>
      <div class="opt-con">
          <button class="G-btn G-btn-primary">sign in</button>
      </div>
  </div>
</template>

<script>

  export default {
    name: 'login',
    components: {},
    methods: {
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .M-Login
        width: 400px
        margin: 0 auto 
        p
            margin-bottom: 20px
            font-size: 18px
            .ipt-text
                height: 42px
                border: none
        .opt-con
            text-align: center
            .G-btn
                display: inline-block        
</style>
