<template>
  <section class="wrap-bg02">
    <div class="layout-frame">
    <div class="layout-frame__title">網站/網頁 Webs</div>
      <itemlist :list="websList" :key="websList.index"></itemlist>
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
    };
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
    showImg (index) {
        this.index = index
        this.visible = true
      },
    handleHide () {
        this.visible = false
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>