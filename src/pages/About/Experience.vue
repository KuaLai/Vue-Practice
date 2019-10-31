<template lang="pug">
    div.experience
        div.experience__title 經歷
        div.experience__timeline
            div.experience__item(v-for="item in list")
                div.experience__item-title {{ item.title }}，{{ item.years }}
                div.experience__job-name {{ item.name }}
                div.experience__content
                    ul(v-for="app in item.application")
                        li(v-for="skill in app") {{ skill }}
                    div.work__list
                      div.work__item-title {{ item.worktitle }}
                      div.work__item(v-for="work in item.worklist")
                        div.work__item-subTitle {{ work.title }}
                        div.work__item-list(v-for="item in work.list") {{ item }}
            div.school__item(v-for="s in school")
              div.school__item-title {{ s.name }}，{{ s.years}} 畢業
              div.school__department-name {{ s.department}}
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
              list: ["美源男士-拍照變臉活動","兆豐銀行Q3線上結匯","大潤發奔跑吧新年-購物車小遊戲","Whoo后-母親節活動&VIP預購會","格致中學-招生網頁"]
            },
            2: {
              title: "互動插頁",
              list: ["院線電影宣傳","NIKE即時天氣顯示","屈臣氏蛋黃哥集點活動","星展銀行錢包接接樂","拜耳發泡錠互動頁","中信金融圈區美食街推廣"]
            },
            3: {
              title: "品牌合作",
              list: ["Nike","Adidas","Sulwhasoo雪花秀","Whoo后","CLINIQUE倩碧","屈臣氏","大潤發","Eclipse易口舒","Vornado循環扇","KKDAY","兆豐銀行","星展銀行","花旗銀行"]
            },
            4: {
              title: "各國專案協作",
              list: ["日本：與PM溝通並製作活動頁","香港：製作廣告專案&活動頁","泰國：製作廣告專案&活動頁"]
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
          title: "Mostwant 最想科技股份有限公司",
          years: "",
          name: "網頁設計師",
          application: {
            skills: ["網頁/網站設計與切版","html5/css3","RWD","sass/sublime text 3","susy","bootstrap","SVG & Web Font 字型庫製作"]
          },
          worktitle: "設計相關實例",
          worklist: {
            1: {
              title: "網站實例",
              list: ["Mostwant 最想科技 招商網站","mostWant 最想商城","商城設計、會員中心、結帳頁面、商店街頁面","促銷活動頁","EDM"]
            },
            2: {
              title: "Logo設計/名片設計",
              list: ["商城Logo設計/app樣式設計","客製化商城內其他店家Logo設計","商城/公司 名片"]
            },
            3: {
              title: "視覺設計與管理",
              list: ["app視覺、站內視覺、EDM視覺、活動banner","banner工作安排、視覺教稿"]
            }
          }
        },
        {
          title: "亞東電子商務(原：Go Happy快樂購物網/現：friday購物)",
          years: "",
          name: "視覺設計師",
          worktitle: "任內負責職務",
          worklist: {
            1: {
              title: "設計相關實例",
              list: ["配合各館別所需形象與PM溝通","網站所需製作EDM、Banner、活動視覺、GIF動畫","視覺發想及切版",]
            },
            2: {
              title: "福委會幹部",
              list: ["發想各大節日活動/聖誕節公司小天使交換禮物","活動關卡主持人"]
            }
          }
        },
        {
          title: "數位因子科技網路有現公司",
          years: "",
          name: "視視覺美術設計",
          worktitle: "任內負責職務",
          worklist: {
            1: {
              title: "設計相關實例",
              list: ["設計公司形象之視覺規範、視覺設計","網站視覺規劃與網頁製作","flash、DIV切版、css調整&排版","與業務、企劃、程式設計等相關人員配合","後台建置","協同執行與討論專案企劃"]
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