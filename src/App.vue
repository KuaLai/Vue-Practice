<template lang="pug">
    div#app
      Nav
      Header
      transition(:name="transitionName"
        :mode="transitionMode"
        :enter-active-class="transitionEnterActiveClass"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter")
        router-view.mainContent.view
      Footer(msg="版權所有 © 2020 Copyright KuaLai")
</template>


<script>
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const DEFAULT_TRANSITION = "slide";
const DEFAULT_TRANSITION_MODE = "out-in";

export default {
  name: "App",
  components: {
    Header,
    Nav,
    Footer,
  },
  data() {
    return {
      title: "KuaLai's Portfolio - web designer",
      prevHeight: 0,
      transitionName: DEFAULT_TRANSITION,
      transitionMode: DEFAULT_TRANSITION_MODE,
      transitionEnterActiveClass: ""
    };
  },
  // Usage with context the component
  head: {
    // To use "this" in the component, it is necessary to return the object through a function
    title: function () {
      return {
        inner: this.title
      }
    },
    meta: [
      { name: "description", content: "個人簡歷＆作品集" },
      { name: "keywords", content: "Kua,KuaLai,Design,Web,Wrb Design" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "KuaLai's Portfolio - web designer" },
      { property: "og:description", content: "個人簡歷＆作品集" },
      { property: "og:image", content: "https://kualai.github.io/images/img-kua.jpg" },
      { property: "og:url", content: "https://kualai.github.io/" },
      { property: "og:site_name", content: "Kua Design - web designer" }
    ],
    script: [
      { type: 'text/javascript', src: 'https://code.jquery.com/jquery-latest.js',  body: true}, // Insert in body
      { type: 'text/javascript', src: 'https://kualai.github.io/js/star.js', body: true, undo: false},
    ],
    style: [
      { type: 'text/css', src: 'css/main.min.css', undo: false },
    ]
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName =
        to.meta.transitionName ||
        from.meta.transitionName ||
        DEFAULT_TRANSITION;

      if (transitionName === "slide") {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      }

      this.transitionMode = DEFAULT_TRANSITION_MODE;
      this.transitionEnterActiveClass = `${transitionName}-enter-active`;

      if (to.meta.transitionName === "zoom") {
        this.transitionMode = "in-out";
        this.transitionEnterActiveClass = "zoom-enter-active";
        document.body.style.overflow = "hidden";
      }

      if (from.meta.transitionName === "zoom") {
        this.transitionMode = null;
        this.transitionEnterActiveClass = null;
        document.body.style.overflow = null;
      }

      this.transitionName = transitionName;

      next();
    });
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    }
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
