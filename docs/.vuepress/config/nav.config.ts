/*****************************************************************************************
 *                                 配置顶部导航栏
 ******************************************************************************************/

export default [
  // ========== 示例 ========== //
  {
    text: "书架",
    link: "/cate/",
  },
  {
    text: "索引",
    link: "/archives/",
    items: [
      { text: "分类", link: "/categories/" },
      { text: "标签", link: "/tags/" },
      { text: "归档", link: "/archives/" },
    ],
  },
  {
    text: "更多",
    items: [
      { text: "关于", link: "/about/" },
      // generate by slidev
      { text: "幻灯片", link: `/slides/#/1` },
      { text: "导航", link: `https://source.jonsam.site/nav/` },
      { text: "鸠摩搜书", link: `https://www.jiumodiary.com/` },
      { text: "微信读书", link: `https://weread.qq.com/` },
    ],
  },
  { text: "博客", link: "https://www.jonsam.site" },
];
