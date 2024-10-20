// 示例文章数据


// 后端接口返回数据
// JSON -> JS Object
export const tempArticles = [
  {
    artID: 1, // 文章ID
    title: "使用Vue+DaisyUI搭建个人博客", // 文章标题
    content: "本文将介绍如何使用Vue+DaisyUI搭建个人博客,并详细介绍搭建过程中的吾问无为谓哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇一些注意事项。", // 文章内容
    author: "张三", // 文章作者
    date: "2021-07-01 12:00:00", // 文章发布日期
    tags: [
      { text: "Vue", color: "badge-success" },
      { text: "DaisyUI", color: "badge-info" },
      { text: "博客", color: "badge-accent" }
    ],
    views: 1000, // 文章阅读数
    imgUrl: "https://npm.elemecdn.com/ushio-api-img-moe@5.0.98/img_981_991x872_96_null_normal.jpg" // 文章配图
  },
  {
    artID: 2,
    title: "使用React+Antd搭建个人博客",
    content: "balabala...",
    author: "李四",
    date: "2021-07-02 12:00:00",

    // 最多添加3个标签
    // 颜色种类: badge-neutral,badge-primary,badge-secondary,badge-accent,badge-ghost,badge-info,badge-success,badge-warning,badge-error,badge-outline
    tags: [
      { text: "React", color: "badge-primary" },
      { text: "Antd", color: "badge-secondary" },
      { text: "博客", color: "badge-accent" }
    ],
    views: 500,
    imgUrl: "https://npm.elemecdn.com/ushio-api-img-moe@5.0.98/img_981_991x872_96_null_normal.jpg"
  },
  {
    artID: 3,
    title: "使用Angular+Bootstrap搭建个人博客",
    content: "balabala...",
    date: "2021-07-03 12:00:00",
    tags: [
      { text: "Angular", color: "badge-error" },
      { text: "Bootstrap", color: "badge-warning" },
      { text: "博客", color: "badge-accent" }
    ],
    views: 100,
    imgUrl: "https://npm.elemecdn.com/ushio-api-img-moe@5.0.98/img_981_991x872_96_null_normal.jpg"
  }
]

// 随笔只返回一条
export const tempEssay = {
  content: "balabala...",
  emoji: "😂",
  date: "2021-07-03 12:00:00",
}


// 文章筛选菜单
export const tempMenuTabs = [
  { text: "全部", value: "all" },
  { text: "按时间", value: "date" },
  { text: "浏览量", value: "tag" },
]

// 标签筛选菜单
export const tempTagTabs = [
  { value: "无标签", color: "badge-neutral" },
  { value: "Vue", color: "badge-success" },
  { value: "React", color: "badge-primary" },
  { value: "Antd", color: "badge-secondary" },
  { value: "Angular", color: "badge-error" },
  { value: "Bootstrap", color: "badge-warning" },
  { value: "博客", color: "badge-accent" },

]