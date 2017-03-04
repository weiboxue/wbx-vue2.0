<!-- banner -->
<template lang="jade">
    div(class="demo") demo
        childcomp(:data="childdata")
</template>
<script>
    var child = require('./child.vue');
    module.exports = {
        data: function () {
            return {
                childdata: '子组件'
            }
        },
        methods: {
        },
        components: {
            childcomp: child
        },
        mounted: function() {
        }
    }
</script>
<style lang="sass">
  .demo {
      color: green;
      font-size: 30px;
      text-align: center;
  }
</style>
