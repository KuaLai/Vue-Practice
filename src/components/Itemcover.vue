<template>
  <div class="item-frame">
    <div class="item-hd" v-for="item in cover" :key="item.id">
      <div class="item-hd__cover">
        <img v-bind:src="'assets/images/' + item.image" v-bind:alt=" item.info " />
      </div>
      <div class="item-hd__title">
        <p>
          {{ item.title }}
          <span>{{ item.subTitle }}</span>
        </p>
      </div>
    </div>
    <div class="item" v-for="i in cover.others" :key="i.id">
      <div class="item__cover">
        <img v-bind:src="'assets/images/' + i.url" v-bind:alt=" i.imgInfo " />
      </div>
      <div class="item__title item--oc">{{ i.title }}</div>
      <div class="item__content item--oc">{{ i.content }}</div>
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
          title: '',
          subTitle: '',
          image: '',
          info: '',
          others: [
            {
              title: '',
              content: '',
              url: '',
              imgInfo: ''
            }
          ]
        }
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.item-frame {
  width: 100%;
}
</style>