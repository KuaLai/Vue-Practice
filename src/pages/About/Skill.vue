<template>
  <div class="layout-frame" ref="sheet">
    <div class="skill" v-for="item in list" :key="item.id">
      <div class="skill__title" >{{ item.title }}</div>
      <div class="skill__list">
        <div class="skill__item charts-container" v-for="skill in item.skill" :key="skill.id">
          <div class="pie-wrapper">
            <div class="item">
              <div class="item-title">{{ skill.title }}</div>
              <div class="item-percent">
                <vue-easy-pie-chart
                  v-bind:percent="skill.currentPercent"
                  v-bind:bar-color="skill.color"
                  :size="165"
                  :line-width="5"
                  font-size="1"
                  track-color="#ccc"
                  scale-color="#ccc"
                ></vue-easy-pie-chart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import VueEasyPieChart from "vue-easy-pie-chart";

export default {
  name: "Skill",
  components: { VueEasyPieChart },
  methods: {
    handleScroll: function (event) {
      const sheetTop = this.$refs.sheet.getBoundingClientRect().top;
      if ( sheetTop <= 360 ) {
        let vm = this;
        for(const item of vm.list){
          for(const skill of item.skill){
            skill.currentPercent = skill.percent;
          }
        }
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      list: [
        {
          name: "sheet1",
          title: "軟體使用熟練度",
          skill: [
             {
              title: "Photoshop",
              color: "rgba(0, 99, 248, 0.6)",
              percent: 95,
              currentPercent: 0
            },
             {
              title: "Illustrator",
              color: "rgba(255, 166, 0, 1)",
              percent: 95,
              currentPercent: 0
            },
             {
              title: "Sketch",
              color: "rgba(255, 0, 0, 0.6)",
              percent: 80,
              currentPercent: 0
            },
             {
              title: "VisualStudioCode",
              color: "rgba(134, 163, 1, 1)",
              percent: 80,
              currentPercent: 0
            },
             {
              title: "Sourcetree",
              color: "rgba(0, 167, 167, 1)",
              percent: 50,
              currentPercent: 0
            }
          ]
        },
        {
          name: "sheet2",
          title: "程式語言與網頁設計開發技術熟練度",
          skill: [
            {
              title: "sass/scss",
              color: "rgba(0, 99, 248, 0.6)",
              percent: 95,
              currentPercent: 0
            },
            {
              title: "html5/css3",
              color: "rgba(255, 166, 0, 1)",
              percent: 95,
              currentPercent: 0
            },
            {
              title: "RWD",
              color: "rgba(255, 0, 0, 0.6)",
              percent: 90,
              currentPercent: 0
            },
            {
              title: "jQuery",
              color: "rgba(134, 163, 1, 1)",
              percent: 65,
              currentPercent: 0
            },
            {
              title: "javascript/gulp/vue",
              color: "rgba(0, 167, 167, 1)",
              percent: 55,
              currentPercent: 0
            }
          ]
        }
      ]
    };
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>