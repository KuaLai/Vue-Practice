<template>
  <section class="wrap-bg03">
    <div class="layout-frame">
      <div class="layout-frame__title">介面設計 UI Design</div>
      <div class="itemlist">
        <itemcover :cover="coverList" :key="coverList.index"></itemcover>

        <div class="item item--twins">
          <div class="item__cover item--oc"></div>
          <div class="item__title style-t1 fz-24">過程</div>
          <div class="item__content">
            規劃與發想採用Design Thinking的方式來進行專案開發。
            <br />快速且不斷反覆思考，一再地否定自己去激發更好更貼近使用者的介面流程。
          </div>
        </div>
        <div class="item">
          <div class="item__cover">
            <img src="assets/images/img-process01.jpg" alt />
          </div>
          <div class="item__title item--oc"></div>
          <div class="item__content item--oc"></div>
        </div>
        <div class="item">
          <div class="item__cover">
            <img src="assets/images/img-process02.jpg" alt />
          </div>
          <div class="item__title item--oc"></div>
          <div class="item__content item--oc"></div>
        </div>
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
        const request_cover = gapi.client.sheets.spreadsheets.values.get(
          coverA
        );

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

              skillList.push({
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
            const textList =[];

            for (let i = 0; i < values.length; i++) {
              const item = values[i];
              const name = item[0];
              const title = item[1];
              const subTitle = item[2];
              const image = item[3];
              const info = item[4];
              const others = item[5].split('|');
              for (let j = 0; j < values.length; j++) {
                const imgItem= others[j].split(',');
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