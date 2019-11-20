<template>
	<section class="wrap-bg01">
		<Introduction :list="profile" :key="profile.index"></Introduction>
		<Experience></Experience>
		<Skill></Skill>
	</section>
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
  data: function() {
    return {
      profile: [],
    };
  },
  mounted() {
    let vm = this;
    vm.about();
  },
  methods: {
	  about() {
      let vm = this;
      this.$getGapiClient().then(gapi => {
        const params = {
          spreadsheetId: '1I28y55s_o1fmism0528qP3ZoTB8b04Xh-Nuh7dK7M6A',
          range: "'introduction'!A2:D10",
          valueRenderOption: 'FORMATTED_VALUE',
          dateTimeRenderOption: 'FORMATTED_STRING',
		};
		const request = gapi.client.sheets.spreadsheets.values.get(params);
		request.then(
          function(response) {
            const result = response.result;
            const values = result.values;
            const profile = vm.profile;

            for (let i = 0; i < values.length; i++) {
              const item = values[i];
              const image = item[0];
              const name= item[1];
              const title = item[2];
              const list = item[3].split('|');

              profile.push({
				image: image,
				name: name,
                title: title,
                list: list
			  });

            }
			vm.profile = profile;
			console.log(vm.profile)
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
<style lang="scss" scoped>
</style>