<template>
  <section class="wrap-contact">
    <div class="contact">
      <div class="contact__img" ref="jump" style="opacity: 0; transform: translate(0,50px);">
        <img :src="require('assets/images/img-mail.png')" alt="mail" />
      </div>
      <form class="contact__form">
        <div class="contact__title" > {{ formTitle }} </div>
        <div class="contact__item" v-for=" item in formList" :key="item.index">
          <span> {{ item.title }} </span>
          <input :type="item.type" :placeholder ="item.placeholder" :ref="item.ref" />
          <transition>
            <div class="contact__info" v-if="item.isFormError"> {{ item.massage }} </div>
          </transition>
        </div>
        <div class="contact__massage">
          <span> {{ massage.title }} </span>
          <textarea :ref="massage.ref"></textarea>
          <transition>
            <div class="contact__massage-text" v-if="isFormError"> {{ massage.text }} </div>
          </transition>
        </div>
        <a class="contact__button" href="###" v-on:click="isFormCorrect">送出</a>
      </form>
      <div class="contact__mask" v-if="isLoading">
        <div class="item" v-if="type === 'A'">
          <div class="item__loading">
            <div class="loadingio-spinner-spinner-6sqfm6wq48r">
              <div class="ldio-6jor80znkkd">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div class="item__text">正在寄送中</div>
        </div>
        <div class="item" v-else>
          <div class="item__icon" v-bind:class="{'tick':isSuccess}"><svg width="18px" height="18px" viewBox="0 0 18 18">
            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
          </svg></div>
          <div class="item__text"> 您的訊息已傳送，謝謝 <span>收到信件後會盡快回覆您 ：）</span> </div>
          <a class="item__button" href="###" v-on:click="isClose">關閉</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: 'contact',
  data: function() {
    return {
      isSuccess: false,
      check: false,
      isFormError: false,
      isLoading: false,
      type: "A",
      itemClass: "item__icon",
      formTitle: "聯絡我 Contact Me",
      formList: [
        {
          title: "主旨",
          type: "text",
          ref: "subject",
          placeholder: "幫助我了解您聯絡我的原因",
          massage: "請填寫主旨",
          isFormError: null
        },{
          title: "姓名",
          type: "text",
          ref: "name",
          placeholder: "請輸入您的聯絡名稱",
          massage: "請填寫姓名",
          isFormError: null
        },{
          title: "信箱",
          type: "email",
          ref: "email",
          placeholder: "請輸入您的聯絡信箱",
          massage: "請填寫信箱",
          isFormError: null
        }
      ],
      massage: {
          title: "訊息",
          ref: "message",
          text: "留點訊息給我吧~",
          isFormError: null
      }
    };
  },
  methods: {
    isClose() {
      this.isLoading = false;
      this.$refs.name[0].value = "";
      this.$refs.email[0].value  = "";
      this.$refs.subject[0].value = "";
      this.$refs.message.value = "";
      this.check = false;
      this.type = "A";
      this.isSuccess = false;
    },
    getNow: function() {
      const today = new Date();
      const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      return dateTime;
    },
    isFormCorrect(){
      const vm = this;
      let name = vm.$refs.name[0].value;
      let email = vm.$refs.email[0].value;
      let subject = vm.$refs.subject[0].value;
      let message = vm.$refs.message.value;
      let atpos = email.indexOf("@");
      let dotpos = email.lastIndexOf(".");
          
        if( vm.check != true){
            vm.formList[0].isFormError = true;
          }
          if(subject != "" && subject != undefined){
            vm.formList[0].isFormError = false;
          }
          if(name == "" || name == "undefined"){
            vm.formList[1].isFormError = true;
          }
          if(name != "" && name != undefined){
            vm.formList[1].isFormError = false;
          }
          if(email == "" || email == "undefined"){
            vm.formList[2].isFormError = true;
          }
          if(email != "" && email != undefined){         
            if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 > email.length){
              vm.formList[2].massage = "請輸入正確的E-mail格式"
              vm.formList[2].isFormError = true;
            } else {
              vm.formList[2].isFormError = false;
              vm.check = true;
            }
          }
          if(message == "" || message == undefined){
            vm.isFormError = true;
          }
          if(message != "" && message != undefined){ 
            vm.isFormError = false;
          }
          if(message != "" && message != undefined && email != "" && email != undefined && name != "" && name != undefined && subject != "" && subject != undefined && vm.check != false){ 
            vm.submit();
            vm.isLoading = true;
          }
        
    },
    submit() {
      const vm = this;
      let name = vm.$refs.name[0].value;
      let email = vm.$refs.email[0].value;
      let subject = vm.$refs.subject[0].value;
      let message = vm.$refs.message.value;
      let time = vm.getNow();
      $.ajax({
        url:
          "https://script.google.com/macros/s/AKfycbxFxSumSxz1b0ZMLaOqdv4SxXTEWZD2IWz_jlSmtdc8OCemuLg/exec",
        data: {
          'name': name,
          'email': email,
          'time': time,
          'subject' : subject,
          'message': message
        },
        success: function(response) {
          vm.type = "B";
          setTimeout(function() {
            vm.isSuccess = true;
          }, 100);
        }
      });
    }
  },
  mounted() {
    let jump = this.$refs.jump;
    gsap.to(jump,{duration: 1, opacity: 1, y: 0, stagger: 0.5, ease: 'elastic.easeIn.config(1,0.4)'});

  }
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