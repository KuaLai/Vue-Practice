<template lang="pug">
    div.nav
      ul
        each item,index in {'about':'關於我','webs':'網頁設計','design':'其他作品'}
            li(data-url=key)
                router-link(to=index)
                    =item
</template>


<script>
export default {
  name: "Nav",
  methods: {
  },
  
};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>