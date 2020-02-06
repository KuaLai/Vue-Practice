<template>
  <section class="wrap-bg03">
    <div class="layout-frame">
      <div class="layout-frame__title">介面設計 UI Design</div>
      <div class="itemlist">
        <itemcover :cover="coverList" :key="coverList.index"></itemcover>
      </div>
      <div class="layout-frame__title">其他設計作品 Design</div>
      <itemlist :list="skillList" :key="skillList.index"></itemlist>
    </div>
  </section>
</template>

<script>
import itemlist from 'components/Itemlist.vue';
import itemcover from 'components/Itemcover.vue';

export default {
  name: 'design',
  components: {
    itemlist,
    itemcover,
  },

  data: function() {
    return {
      skillList: [],
      coverList: [],
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
        const params = {
          spreadsheetId: '1I28y55s_o1fmism0528qP3ZoTB8b04Xh-Nuh7dK7M6A',
          range: "'design'!A2:H100",
          valueRenderOption: 'FORMATTED_VALUE',
          dateTimeRenderOption: 'FORMATTED_STRING',
        };
        const coverA = {
          spreadsheetId: '1I28y55s_o1fmism0528qP3ZoTB8b04Xh-Nuh7dK7M6A',
          range: "'other'!A2:H100",
          valueRenderOption: 'FORMATTED_VALUE',
          dateTimeRenderOption: 'FORMATTED_STRING',
        };
        const request = gapi.client.sheets.spreadsheets.values.get(params);
        const request_cover = gapi.client.sheets.spreadsheets.values.get(coverA);

        request.then(
          function(response) {
            const result = response.result;
            const values = result.values;
            const skillList = vm.skillList;

            for (let i = 0; i < values.length; i++) {
              const item = values[i];
              const title = item[0];
              const url = item[1];
              const image = item[2];
              const subTitle = item[3];
              const info = item[4];
              const skills = item[5].split(',');
              const id = i;

              skillList.push({
                id: id,
                title: title,
                url: url,
                image: image,
                subTitle: subTitle,
                info: info,
                skills: skills,
              });
            }
            vm.skillList = skillList;
          },
          function(reason) {
            console.error('error:', reason);
          }
        );

        request_cover.then(
          function(response) {
            const result = response.result;
            const values = result.values;
            const coverList = [];
            
            for (let i = 0; i < values.length; i++) {
              const item = values[i];
              const name = item[0];
              const title = item[1];
              const subTitle = item[2];
              const image = item[3];
              const info = item[4];
              const others = item[5].split('|');
              const textList = [];
              
              for (let j = 0; j < others.length; j++) {
                
                const imgItem = others[j].split(','); 
                const imgTitle= imgItem[0];
                const content= imgItem[1];
                const url = imgItem[2];
                const imgInfo = imgItem[3];
                textList.push({
                  title: imgTitle,
                  content: content,
                  url: url,
                  imgInfo: imgInfo
                }) 
              }
              
              coverList.push({
                  name: name,
                  title: title,
                  subTitle: subTitle,
                  image: image,
                  info: info,
                  others: textList
                });
            }
            vm.coverList = coverList;
         
          },
          function(reason) {
            console.error('error:', reason);
          }
        );
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>