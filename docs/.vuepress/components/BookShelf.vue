<template>
  <div class="book">
    <div class="album">
      <img :src="album" @dragstart.prevent="" />
    </div>
    <div class="content">
      <h1 class="title">{{ title }}</h1>
      <div class="authorLine">
        <img :src="avatar" class="avatar" @click.prevent="" /><a
          :href="computedAuthorLink"
          target="_blank"
          class="author"
          >{{ author }}</a
        >
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
          <ul class="tags" v-for="tag in tags" :key="tag">
            <a target="_blank" :href="`/tags/?tag=${tag}`">{{ tag }}</a>
          </ul>
        </li>
      </ul>
      <div class="actions">
        <div role="button" class="main" @click="onDownload">下载</div>
        <div role="button" @click="onGoDouban">豆瓣</div>
      </div>
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
    title: String,
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
    tags: { type: Array, default: () => [] },
    link: { type: String, default: "#" },
    douban: { type: String },
  },
  data(instance) {
    return {};
  },
  computed: {
    computedAuthorLink() {
      return this.authorLink ?? `https://zh.wikipedia.org/wiki/${this.author}`;
    },
    computedDoubanLink() {
      return this.douban ?? `https://www.douban.com/search?q=${this.title}`;
    },
  },
  methods: {
    onDownload() {
      window.open(this.link);
    },
    onGoDouban() {
      window.open(this.computedDoubanLink);
    },
  },
};
</script>

<style scoped>
.book {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
  padding: 40px 0;
}
.book .album {
  width: 300px;
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
.actions div[role="button"] {
  appearance: none;
  display: inline-block;
  border-radius: 16px;
  padding: 6px 18px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  margin-right: 36px;
  letter-spacing: 4px;
  font-weight: bold;
  background-color: transparent;
  border: 1px solid #dc5b68;
}
.actions .main[role="button"] {
  background-color: #dc5b68;
  color: #fff;
  border: none;
}
</style>
