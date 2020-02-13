<template>
  <section class="wrap-contact">
    <div class="contact">
      <form class="contact__form">
        <div class="contact__title"> {{ formTitle }} </div>
        <div class="contact__item" v-for=" item in formList" :key="item.index">
          <span> {{ item.title }} </span>
          <input :type="item.type" :ref="item.ref" />
        </div>
        <div class="contact__massage">
          <span> {{ massage.title }} </span>
          <textarea :ref="massage.ref"></textarea>
        </div>
        <a href="###" v-on:click="submit">送出</a>
      </form>
    </div>
  </section>
</template>

<script>

export default {
  name: 'contact',
  data: function() {
    return {
      formTitle: "聯絡我 Contact Me",
      formList: [
        {
          title: "主旨",
          type: "text",
          ref: "Subject"
        },{
          title: "姓名",
          type: "text",
          ref: "name"
        },{
          title: "信箱",
          type: "email",
          ref: "email"
        }
      ],
      massage:{
        title: "訊息",
        ref: "message"
      }
    };
  },
  mounted() {},
  methods: {
    getNow: function() {
      const today = new Date();
      const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      return dateTime;
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
          "https://script.google.com/macros/s/AKfycbwZTn_-QxS3besMkYfxvSmg-navDP12h77cXEs1G5NeLBW82ak/exec",
        data: {
          'name': name,
          'email': email,
          'time': time,
          'subject' : subject,
          'message': message
        },
        success: function(response) {
          alert("成功");
        }
      });
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>