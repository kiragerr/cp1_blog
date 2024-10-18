// 示例文章数据


// 后端接口返回数据
// JSON -> JS Object
export const tempArticles = [
  {
    artID: 1, // 文章ID
    title: "使用Vue+DaisyUI搭建个人博客", // 文章标题
    summary: "本文将介绍如何使用Vue+DaisyUI搭建个人博客,并详细介绍搭建过程中的吾问无为谓哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇一些注意事项。", // 文章摘要
    content: "balabala...", // 文章内容
    author: "张三", // 文章作者
    date: "2021-07-01 12:00:00", // 文章发布日期
    tags: ["Vue", "DaisyUI", "博客"], // 文章标签
    imgUrl: "https://npm.elemecdn.com/ushio-api-img-moe@5.0.98/img_981_991x872_96_null_normal.jpg" // 文章配图
  },
  {
    artID: 2,
    title: "使用React+Antd搭建个人博客",
    summary: "本文将介绍如何使用React+Antd搭建个人博客,并详细介绍搭建过程中的一些注意事项。",
    content: "balabala...",
    author: "李四",
    date: "2021-07-02 12:00:00",
    tags: ["React", "Antd", "博客"],
    imgUrl: "https://npm.elemecdn.com/ushio-api-img-moe@5.0.98/img_981_991x872_96_null_normal.jpg"
  }
]

// 随笔只返回一条
export const tempEssay = {
  content: "balabala...",
  emoji: "😂",
  date: "2021-07-03 12:00:00",
}
