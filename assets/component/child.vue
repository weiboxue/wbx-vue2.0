<!-- banner -->
<template lang="jade">
    div(class="child") {{renderdata}}
</template>
<script>
    module.exports = {
        props: ['data'],
        data: function () {
            return {
                renderdata: this.data
            }
        },
        methods: {
        },
        mounted: function() {
        }
    }
</script>
<style lang="sass">
  .child {
      color: red;
      font-size: 25px;
      text-align: center;
  }
</style>
