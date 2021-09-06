export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "首页",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "title": "首页",
    "heroImage": "/images/avatar.gif",
    "actions": [
      {
        "text": "查看目录",
        "link": "/menu",
        "type": "primary"
      },
      {
        "text": "关于",
        "link": "/about",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "知识",
        "details": "知识就是力量, 是成功不可或缺的基础"
      },
      {
        "title": "实践",
        "details": "实践出真知, 否则永远是纸上谈兵, 现实往往更为复杂"
      },
      {
        "title": "灵感",
        "details": "灵感就在那一瞬间, 努力抓住它"
      },
      {
        "title": "机遇",
        "details": "人生充满机遇, 但是机会总是留给有准备的人"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2021-present ChnMig"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1628503661000,
    "contributors": [
      {
        "name": "ChnMig",
        "email": "chnmig@outlook.com",
        "commits": 6
      },
      {
        "name": "ChnMig",
        "email": "ChnMig@Outlook.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
