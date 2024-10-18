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
      { text: "Vue", color: "default" },
      { text: "DaisyUI", color: "info" },
      { text: "博客", color: "accent" }
    ],
    imgUrl: "https://npm.elemecdn.com/ushio-api-img-moe@5.0.98/img_981_991x872_96_null_normal.jpg" // 文章配图
  },
  {
    artID: 2,
    title: "使用React+Antd搭建个人博客",
    content: "balabala...",
    author: "李四",
    date: "2021-07-02 12:00:00",

    // 最多添加3个标签
    // 颜色种类: primary, secondary, accent, default, info, success, warning, error
    tags: [
      { text: "React", color: "primary" },
      { text: "Antd", color: "secondary" },
      { text: "博客", color: "accent" }
    ],
    imgUrl: "https://npm.elemecdn.com/ushio-api-img-moe@5.0.98/img_981_991x872_96_null_normal.jpg"
  },
  {
    artID: 3,
    title: "使用Angular+Bootstrap搭建个人博客",
    content: "balabala...",
    date: "2021-07-03 12:00:00",
    tags: [
      { text: "Angular", color: "success" },
      { text: "Bootstrap", color: "warning" },
      { text: "博客", color: "accent" }
    ],
    imgUrl: "https://npm.elemecdn.com/ushio-api-img-moe@5.0.98/img_981_991x872_96_null_normal.jpg"
  }
]

// 随笔只返回一条
export const tempEssay = {
  content: "balabala...",
  emoji: "😂",
  date: "2021-07-03 12:00:00",
}
