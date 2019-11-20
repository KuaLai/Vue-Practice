<template>
  <div class="layout-frame">
    <div class="skill" v-for="item in list" :key="item.id">
      <div class="skill__title">{{ item.title }}</div>
      <div class="skill__list">
        <div class="skill__item" v-for="skill in item.skill" :key="skill.id">
          <div class="item-title">{{ skill.title }}</div>
          <div class="item-percent">{{ skill.percent }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  methods: {},
  data() {
    return {
      list: [
        {
          title: "軟體使用熟練度",
          skill: {
            1: {
              title: "Photoshop",
              percent: "95"
            },
            2: {
              title: "Illustrator",
              percent: "95"
            },
            3: {
              title: "Sketch",
              percent: "80"
            },
            4: {
              title: "VisualStudioCode",
              percent: "80"
            },
            5: {
              title: "Sourcetree",
              percent: "50"
            }
          }
        },
        {
          title: "程式語言與網頁設計開發技術熟練度",
          skill: {
            1: {
              title: "sass/scss",
              percent: "95"
            },
            2: {
              title: "html5/css3",
              percent: "95"
            },
            3: {
              title: "RWD",
              percent: "90"
            },
            4: {
              title: "jQuery",
              percent: "65"
            },
            5: {
              title: "javascript/gulp/vue",
              percent: "50"
            }
          }
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>