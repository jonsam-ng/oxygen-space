<template>
  <div class="bookWrapper">
    <div class="book">
      <div class="album">
        <img :src="album" @dragstart.prevent="false" @error="onBlbumError" />
      </div>
      <div class="content">
        <h1 class="title">{{ computedTitle }}</h1>
        <div class="authorLine">
          <img
            :src="avatar"
            class="avatar"
            @click.prevent="false"
            @error="onAvatarError"
          /><a :href="computedAuthorLink" target="_blank" class="author">{{
            author
          }}</a>
        </div>
        <p class="intro">{{ intro }}</p>
        <ul class="detail">
          <li>
            <span class="key">出版商</span>
            <span class="value">{{ publisher }}</span>
          </li>
          <li>
            <span class="key">语言</span>
            <span class="value">{{ lang }}</span>
          </li>
          <li>
            <span class="key">页数</span>
            <span class="value">{{ pages }}页</span>
          </li>
          <li>
            <span class="key">标签</span>
            <ul class="tags" v-for="tag in computedTags" :key="tag">
              <a target="_blank" :href="`/tags/?tag=${tag}`">{{ tag }}</a>
            </ul>
          </li>
          <li>
            <span class="key">分类</span>
            <ul class="tags" v-for="cate in computedCategories" :key="cate">
              <a target="_blank" :href="`/categories/?category=${cate}`">{{
                cate
              }}</a>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="actions">
      <a role="button" class="main" :href="link" target="_blank">下载</a>
      <a role="button" :href="computedDoubanLink" target="_blank">豆瓣</a>
      <a
        role="button"
        :href="`https://sobooks.net/search/${this.computedTitle}`"
        target="_blank"
        >SoBooks.net</a
      >
      <a
        role="button"
        :href="`https://search.bilibili.com/video?keyword=${this.computedTitle}`"
        target="_blank"
        >Bilibili</a
      >
      <a
        role="button"
        :href="`https://cloud.yuedu.pro/?search_text=${this.computedTitle}&submit=#/searchResult`"
        target="_blank"
        >阅读链</a
      >
      <a
        role="button"
        :href="`https://www.shuge.org/?s=${this.computedTitle}`"
        target="_blank"
        >书格</a
      >
      <a
        role="button"
        :href="`https://www.google.com/search?q=${this.computedTitle}&tbm=bks`"
        target="_blank"
        >Google</a
      >
      <a
        role="button"
        :href="`https://libgen.rs/search.php?&req=${this.computedTitle}`"
        target="_blank"
        >Libgen.rs</a
      >
      <a
        role="button"
        :href="`https://search.dangdang.com/?key=${this.computedTitle}`"
        target="_blank"
        >当当</a
      >
      <a
        role="button"
        :href="`https://www.amazon.cn/s?k=${this.computedTitle}&enc=utf-8`"
        target="_blank"
        >亚马逊</a
      >
      <a
        role="button"
        :href="`https://search.jd.com/Search?keyword=${this.computedTitle}`"
        target="_blank"
        >京东</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BookShelf",
  props: {
    album: {
      type: String,
      default:
        "https://cdn.jsdelivr.net/gh/jonsam-ng/image-hosting@master/oxygen-space/image.6g3djpefjk80.webp",
    },
    title: { type: String },
    avatar: {
      type: String,
      default:
        "https://cdn.jsdelivr.net/gh/jonsam-ng/image-hosting@master/oxygen-space/image.3wruyqv9i3c0.webp",
    },
    author: { type: String, default: "佚名者" },
    authorLink: {
      type: String,
    },
    intro: {
      type: String,
      default: "该书籍暂无简介",
    },
    publisher: { type: String, default: "未知" },
    lang: { type: String, default: "未知" },
    pages: { type: Number, default: 0 },
    tags: { type: Array },
    categories: { type: Array },
    link: { type: String },
    douban: { type: String },
  },
  data(instance) {
    return {};
  },
  computed: {
    computedAuthorLink() {
      return this.authorLink || `https://cn.bing.com/search?q=${this.author}`;
    },
    computedDoubanLink() {
      return (
        this.douban || `https://www.douban.com/search?q=${this.computedTitle}`
      );
    },
    computedTags() {
      return this.tags ?? this.$page.frontmatter.tags ?? [];
    },
    computedCategories() {
      return this.categories ?? this.$page.frontmatter.categories ?? [];
    },
    computedTitle() {
      return this.title ?? this.$page.frontmatter.title ?? "";
    },
  },
  methods: {
    onBlbumError() {
      this.album = "/img/album.webp";
    },
    onAvatarError() {
      this.avatar = "/img/avatar.webp";
    },
  },
};
</script>

<style scoped>
.bookWrapper {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 40px 0;
}
.book {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
}
.book .album {
  width: 300px;
}
.book .album img {
  width: 100%;
}
.book .content {
  flex: 1;
  padding-left: 35px;
}
.book .title {
  font-size: 24px;
}
.book .avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
}
.book .authorLine {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
}
.book .author {
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  word-break: break-word;
  flex: 1;
}
.book .intro {
  font-size: 14px;
}
.book .detail {
  padding: 0;
  margin: 0;
}
.book .detail li {
  list-style: none;
}
.book .detail li .key {
  width: 120px;
  font-weight: bold;
  display: inline-block;
}
.book .detail li .value {
  font-weight: 400;
  font-style: italic;
}
.book .tags {
  padding: 0;
  margin: 0;
  display: inline-block;
  gap: 16px;
}
.book .tags a {
  display: inline-block;
  border-radius: 14px;
  padding: 2px 8px;
  background-color: #cca718;
  color: #fff;
  font-size: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 8px;
}
.actions {
  margin-top: 20px;
}
.actions a[role="button"] {
  appearance: none;
  display: inline-block;
  border-radius: 16px;
  padding: 6px 18px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  margin-right: 16px;
  font-weight: bold;
  background-color: transparent;
  border: 1px solid #dc5b68;
  text-decoration: none;
  margin-bottom: 8px;
}
.actions .main[role="button"] {
  background-color: #dc5b68;
  color: #fff;
  border: none;
}
@media screen and (max-width: 600px) {
  .book {
    flex-direction: column;
  }
  .book .album {
    width: 100%;
  }
  .book .content {
    padding-left: 0;
  }
}
</style>
