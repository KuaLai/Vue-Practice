<template>
    <div class="introduction">
         <div class="profile" v-for="item in list" :key="item.id">
            <div class="profile__img">
              <img :src="require('assets/images/' + item.image)" alt="KuaLai"/>
            </div>
            <div class="profile__name"> {{ item.name }} </div>
            <div class="profile__title"> {{ item.title }} </div>
            <div class="profile__content">
             <ul>
                 <li v-for=" i in item.list" :key="i.index"> {{ i }} </li>
             </ul>
            </div>
        </div>
    </div>    
</template>

<script>

export default {
    name: "Introduction",
    props: ['list'],
    data: function() {
    return {
      aboutList: [
        {
          image: String,
          name: String,
          title: String,
          list: [],
        }
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>