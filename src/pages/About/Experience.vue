<template>
  <div class="experience">
    <div class="experience__title">經歷</div>
    <div class="experience__timeline">
      <div class="experience__item" v-for="item in list" :key="item.years">
        <div class="experience__item-title"> {{ item.title }}，{{ item.years }} </div>
        <div class="experience__job-name"> {{ item.name }} </div>
        <div class="experience__content">
          <ul v-for="app in item.application" :key="app.index">
            <li v-for="skill in app" :key="skill.id"> {{ skill }} </li>
          </ul>
          <div class="work__list">
            <div class="work__item-title"> {{ item.worktitle }} </div>
            <div class="work__item" v-for="work in item.worklist" :key="work.id">
              <div class="work__item-subTitle">{{ work.title }}</div>
              <div class="work__item-list" v-for="item in work.list" :key="item.index"> {{ item }} </div>
            </div>
          </div>
        </div>
      </div>
      <div class="school__item" v-for="s in school" :key="s.id">
        <div class="school__item-title"> {{ s.name }}，{{ s.years}} 畢業</div>
        <div class="school__department-name"> {{ s.department}} </div>
      </div>
    </div>
  </div>
    
</template>

<script>
export default {
  name: "Eexperience",
  methods: {},
  data() {
    return {
      list: [
        {
          title: "Vpon威朋大數據",
          years: "2018 年 10 月 - 至今",
          name: "Sr. Web Designer",
          application: {
            skills: ["網頁/網站設計與切版","html5/css3","RWD","sass","javascript","jQuery"],
            f2e: ["前端開發工具應用","Visual Studio Code","vue","gulp","pug"]
          },
          worktitle: "與品牌結合成功實例",
          worklist: {
            1: {
              title: "活動網頁",
              list: ["美源男士-拍照變臉活動","兆豐銀行Q3線上結匯","大潤發奔跑吧新年-購物車小遊戲","Whoo后-母親節活動&VIP預購會","格致中學-招生網頁","dsm帝斯曼營養品藻油Life-產品介紹"]
            },
            2: {
              title: "互動插頁",
              list: ["院線電影宣傳","NIKE即時天氣顯示","屈臣氏蛋黃哥集點活動","星展銀行錢包接接樂","拜耳發泡錠互動頁","中信金融圈區美食街推廣","瑞穗鮮乳2019Q4網路宣傳"]
            },
            3: {
              title: "品牌合作",
              list: ["Nike","Adidas","統一純喫茶","7-11、全家","Sulwhasoo雪花秀","Whoo后","CLINIQUE倩碧","屈臣氏","大潤發","Eclipse易口舒","Vornado循環扇","中華賓士","KKDAY","兆豐銀行","星展銀行","花旗銀行"]
            },
            4: {
              title: "各國專案協作",
              list: ["日本：與PM溝通並製作活動頁與廣告專案","香港：製作廣告專案&活動頁","泰國：製作廣告專案&活動頁"]
            }
          }
        },
        {
          title: "香港商阿爾伊股份有限公司",
          years: "2017 年 3 月 - 2018 年 3 月",
          name: "UI/UX Designer",
          application: {
            skills: ["網頁/網站設計與切版","html5/css3","RWD","sass","jQuery"],
            f2e: ["前端開發工具應用與環境","Visual Studio Code","vue","vue Element","sketch","gulp","sweetalert"],
            common: ["專案協同開發應用","Git","Sourcetree","Zeplin"],
            design: ["視覺設計","官網建置","活動頁","banner製作與分配","公司相關製作物"]
          },
          worktitle: "系統流程規劃設計",
          worklist: {
            1: {
              title: "規劃APP產品需求",
              list: ["design thinking","消化產品功能"]
            },
            2: {
              title: "產品需求流程規劃",
              list: ["操作/互動流程","介面共用規劃","使用者經驗分析"]
            },
            3: {
              title: "雙系統雙介面設計",
              list: ["wireframe/mockup/prototype","IOS/android 畫面 (消費者前台APP/店家後台APP)"]
            },
            4: {
              title: "admin後台介面設計",
              list: ["需求開發與功能規劃","客服系統","營運維護系統","報表系統","會計系統"]
            }
          }
        },
        {
          title: "Garena 台灣競舞娛樂有限公司",
          years: "2015 年 3 月 - 2017 年 3 月",
          name: "網頁設計師",
          application: {
            skills: ["網頁/網站設計與切版 技術應用","html5/css3","RWD","sass","gulp/Visual Studio Code","jQuery"]
          },
          worktitle: "設計相關實例",
          worklist: {
            1: {
              title: "banner製作",
              list: ["商城促銷活動","活動網頁延伸視覺","電競實況字卡"]
            },
            2: {
              title: "賽事官網",
              list: ["LMS 網頁","電競部落"]
            },
            3: {
              title: "遊戲大廳改版",
              list: ["輪播與新聞呈現"]
            },
            4: {
              title: "電競館ban/pick系統(LED大螢幕)",
              list: ["動畫製作(jQuery)"]
            },
            5: {
              title: "活動設計",
              list: ["大富翁活動","拉霸機活動-轉動自己的命運","爬塔活動 提摩登月試煉","全年度校際盃賽事網站(預賽/複賽/決賽)"]
            },
            6: {
              title: "聯合協作活動",
              list: ["歡慶聖誕","五週年紀念","新年活動"]
            },
            7: {
              title: "平面製作/輸出物相關",
              list: ["六福村","2016 LICC 大型賽事 國際大學冠軍賽","校際盃電競賽事"]
            },
            8: {
              title: "福委會 擔任活動組幹部",
              list: ["舉辦公司內部電競賽事","尾牙籌劃"]
            }
          }
        },
        {
          title: "亞東電子商務(原：Go Happy快樂購物網/現：friday購物)",
          years: "2011 年 9 月 - 2015 年 1 月",
          name: "視覺設計師",
          application: {
            skills: ["網頁/網站設計與切版","html5/css3","RWD"],
            f2e: ["開發工具應用與環境","sublime Text 3"],
            design: ["視覺設計","EDM/活動頁","主視覺/標準字/logo設計","banner製作"]
          },
          worktitle: "任內負責職務",
          worklist: {
            1: {
              title: "設計相關實例",
              list: ["配合各館別所需形象與PM溝通","網站所需製作EDM、Banner、活動視覺、GIF動畫","視覺發想及切版"]
            },
            2: {
              title: "視覺設計與管理",
              list: ["app視覺、站內視覺、EDM視覺、活動banner","banner工作安排、視覺教稿"]
            },
            3: {
              title: "福委會幹部",
              list: ["發想各大節日活動/聖誕節公司小天使交換禮物","活動關卡主持人"]
            }
          }
        }
      ],
      school: [
        {
          name: "世新大學",
          years: "2011年6月",
          department: "數位多媒體設計學系"
        }
      ]
      
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>