<template>
    <div class="itemlist">
      <div class="item" v-for="item in list" :key="item.id">
        <a target="_blank" v-bind:href="item.url">
          <div class="item__cover">
            <img v-bind:src="item.image" alt="">
          </div>
          <div class="item__title"> {{ item.title }} </div>
          <div class="item__content">  
            <ul>
              <li> {{ item.subTitle }} </li>
              <li> {{ item.info }} </li>
            </ul>
            <div class="item__skills">
              <span v-for="s in item.skills" :key="s.id"> {{ s }} </span>
            </div>
          </div>
        </a>
      </div>
    </div>     
</template>

<script>
export default {
    name: "itemlist",
    props: ['list'],
data: function() {
    return {
      skillList: [
        {
          title: String,
          url: String,
          image: String,
          subTitle: String,
          info: String,
          skills: [],
        }
      ],
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>