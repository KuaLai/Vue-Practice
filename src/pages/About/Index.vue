<template lang="pug">
	section.wrap-bg01
		Introduction
		Experience
		Skill
</template>

<script>
import Introduction from "./Introduction";
import Experience from "./Experience";
import Skill from "./Skill";

export default {
  name: "about",
  components: {
		Introduction,
		Experience,
		Skill
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>