<template>
  <div class="item-frame">
    <div v-for="item in cover" :key="item.id" :class="'item-frame-flex '+ item.name">
      <div class="item-hd">
        <div class="item-hd__cover">
          <img :src="require('assets/images/' + item.image)" v-bind:alt=" item.info " />
        </div>
        <div class="item-hd__title">
          <p>
            {{ item.title }}
            <span>{{ item.subTitle }}</span>
          </p>
        </div>
      </div>
      <div class="item" v-for="i in item.others" :key="i.id">
        <div class="item__cover">
          <img v-bind:src="i.url" v-bind:alt=" i.imgInfo " />
        </div>
        <div class="item__title item--oc">{{ i.title }}</div>
        <div class="item__content item--oc">{{ i.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'itemcover',
  props: ['cover'],
  data: function() {
    return {
      coverList: [
        {
          name: '',
          title: 'TEST',
          subTitle: '',
          image: '456',
          info: '',
          others: [
            {
              title: '',
              content: '',
              url: 'img-app01.jpg',
              imgInfo: '',
            },
          ],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>