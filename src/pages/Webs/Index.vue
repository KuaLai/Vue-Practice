<template>
  <section class="wrap-bg02">
    <div class="layout-frame">
      <div class="layout-frame__title">網站/網頁 Webs</div>
      <itemlist :list="websList" :key="websList.index"></itemlist> 
    </div>
    <div class="layout-frame">
      <div class="layout-frame__title">合作廠商</div>
      <div class="slide-show">
        <div class="slide-img" v-finger:swipe="swipe">
          <transition>
            <!-- <img v-if="ifshow" :src="imgArray[nowindex]" /> -->
            <div class="brandWall" v-if="ifshow">
              <div class="brand">
                <img v-for="img in imgArray[nowindex]" :key="img.index" :src="img" />
              </div>
            </div>
          </transition>
          <ul class="slide-pages">
            <li v-for="(item,index) in imgArray" :key="index">
              <span :class="{on :index===nowindex}" @click="goto(index)"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import itemlist from 'components/Itemlist.vue';

export default {
  name: 'webs',
  components: {
    itemlist,
  },
  data: function() {
    return {
      websList: [],
      ifshow:true,
      nowindex:0,
      imgArray: [
        [
          require('assets/images/logo-nike.png'),
          require('assets/images/logo-adidas.png'),
          require('assets/images/logo-benz.png'),
          require('assets/images/logo-porsche.png'),
        ],[
          require('assets/images/logo-sk2.png'),
          require('assets/images/logo-sulwhasoo.png'),
          require('assets/images/logo-whoo.png'),
          require('assets/images/logo-clinique.png'),
        ],[
          require('assets/images/logo-uni.png'),
          require('assets/images/logo-7-ELEVEn.png'),
          require('assets/images/logo-familymart.png'),
          require('assets/images/logo-watsons.png'),
        ],[
          require('assets/images/logo-citibank.png'),
          require('assets/images/logo-ctbcbank.png'),
          require('assets/images/logo-dbsbank.png'),
          require('assets/images/logo-megabank.png'),
        ],[
          require('assets/images/logo-sony.png'),
          require('assets/images/logo-panasonic.png'),
          require('assets/images/logo-aeonmall.png'),
          require('assets/images/logo-nissin.png'),
        ]
      ]
    };
  },
  created(){
    this.autoPlayBanner(4000,"run");
  },
  computed:{
    nextindex(){
      if(this.nowindex === (this.imgArray.length - 1)){
        return 0
      }else{
        return this.nowindex + 1
      }
    },prewindex(){
      if(this.nowindex === 0){
        return this.imgArray.length - 1
      }else{
        return this.nowindex -1
      }
    }
  },
  mounted() {
    let vm = this;
    vm.login();
  },
  methods: {
    login() {
      let vm = this;
      this.$getGapiClient().then(gapi => {
        var params = {
          spreadsheetId: '1I28y55s_o1fmism0528qP3ZoTB8b04Xh-Nuh7dK7M6A',
          range: 'A2:H100',
          valueRenderOption: 'FORMATTED_VALUE',
          dateTimeRenderOption: 'FORMATTED_STRING',
        };
        var request = gapi.client.sheets.spreadsheets.values.get(params);
        request.then(
          function(response) {
            const result = response.result;
            const values = result.values;
            const websList = [];

            for (let i = 0; i < values.length; i++) {
              const item = values[i];
              const title = item[0];
              const url = item[1];
              const image = item[2];
              const subTitle = item[3];
              const info = item[4];
              const skills = item[5].split(',');

              websList.push({
                title: title,
                url: url,
                image: image,
                subTitle: subTitle,
                info: info,
                skills: skills
              });
            }
            vm.websList = websList
          },
          function(reason) {
            console.error('error:', reason);
          }
        );
      });
    },
      go(index){
        let that = this;
        that.ifshow = false;
        setTimeout(function(){
          that.ifshow = true;
          that.nowindex = index;
        },100)},
      autoPlayBanner(el,v){
        let that = this;
        if(v === "run" ){
          that.timeRun = setInterval(() => {that.go(that.nextindex)},el);
        } else {
          clearInterval(this.timeRun);
          that.timeRun = setInterval(() => {that.go(that.nextindex)},el);
        } 
      },
      goto(index){
        let that = this;
        that.autoPlayBanner(4000,"reSet");      
        that.ifshow = false;
        setTimeout(function(){
          that.ifshow = true;
          that.nowindex = index;
        },100)
      },
       swipe: function (evt) {
        let that = this;
        if( evt.direction === "Left") {
          that.goto(that.nextindex)
        }
        if( evt.direction === "Right") {
          that.goto(that.prewindex)
        }
      }
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.v-leave {
  opacity: 1;
}

.v-leave-active {
  transition: all .5s
}

.v-leave-to {
  opacity: 0;
  transform: translate(10%,0);
}

.v-enter {
  opacity: 0;
  transform: translate(-10%,0);
}

.v-enter-active {
  transition: all .5s
}

.v-enter-to {
  opacity: 1;
}
</style>