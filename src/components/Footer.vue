<template>
  <footer>
    <div class="copyright">{{ msg }}</div>
  </footer>
</template>


<script>
export default {
  name: "Footer",
  props: { msg: String }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>