<template>
  <div class="introduction">
    <div class="profile" v-for="item in list" :key="item.id">
      <div class="profile__img" ref="jump" style="opacity: 0; transform: translate(0,50px);">
        <img :src="require('assets/images/' + item.image)" alt="KuaLai" />
      </div>
      <div class="profile__name" ref="jump" style="opacity: 0; transform: translate(0,50px);">{{ item.name }}</div>
      <div class="profile__title" ref="jump" style="opacity: 0; transform: translate(0,50px);">{{ item.title }}</div>
      <div class="profile__content" ref="jump" style="opacity: 0; transform: translate(0,50px);">
        <ul>
          <li v-for=" i in item.list" :key="i.index">{{ i }}</li>
        </ul>
      </div>
      <div class="profile__more">
        <div class="item" v-for=" j in item.more" :key="j.index">
          <a target="_blank" v-bind:href=" j.url ">
            <img v-bind:src="j.img" v-bind:alt=" j.alt " />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "Introduction",
  props: ["list"],
  data: function() {
    return {
      aboutList: [
        {
          image: String,
          name: String,
          title: String,
          list: []
        }
      ]
    };
  },
  mounted() {
    const jump = this.$refs.jump;
    gsap.to(jump,{duration: 1, opacity: 1, y: 0, stagger: 0.5, ease: 'elastic.easeIn.config(1,0.4)'});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>