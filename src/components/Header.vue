<template lang="pug">
    header
      h1 Kua's Portfolio | 我是賴雪華
      div.intro.slogan
        span 星星發亮是為了讓每一個人有一天都能找到屬於自己的星星。
        span Stars shine so that everyone can find their own stars. - 安東尼·德·聖-埃克蘇佩里《小王子》
      div.cover#map
        b.star
</template>

<script>
export default {
  name: "Header",
  methods: {},
};

</script>

<style lang="scss">
#map {
  width: 100%;
  position: absolute;
  left: 0;
  top: -20%;
}
.star {
  position: absolute;
  background: #fff;
  box-shadow: 0 0 5px 0 #fff;
  border-radius: 100%;
  top: 100px;
  left: 800px;
  -webkit-filter: blur(0px);
  z-index: 10;
  display: inline-block;

  -webkit-animation: shine infinite;
  -moz-animation: shine infinite;
  -o-animation: shine infinite;
  animation: shine infinite;
}

.star:hover {
  box-shadow: 0 0 15px 3px #ff3075;
  background: #ff3075;
}

.shine-slow {
  -webkit-animation: shine 0.8s infinite;
  -webkit-animation-delay: 0.1s;
}

.shine-fast {
  -webkit-animation: shine 0.6s infinite;
}

@keyframes shine {
  50% {
    box-shadow: 0 0 15px 3px #fff;
    -webkit-filter: blur(1px);
  }
}

@-webkit-keyframes shine {
  50% {
    box-shadow: 0 0 15px 3px #fff;
    -webkit-filter: blur(1px);
  }
}
</style>
