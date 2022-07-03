<template>
  <div :class="`banner ${reverse ? 'reverse' : ''}`" :style="styles">
    <div class="left">
      <img :src="img" @click.prevent="false" @contextmenu.prevent="false" />
    </div>
    <div class="right">
      <h2>{{ title }}</h2>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    img: {
      type: String,
      default:
        "https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/oxygen-space/image.1nttg1wdz70g.webp",
    },
    title: { type: String, default: "" },
    desc: { type: String, default: "" },
    height: { type: Number, default: 200 },
    reverse: { type: Boolean, default: false },
  },
  data() {
    return {
      styles: {
        height: `${this.height}px`,
      },
    };
  },
};
</script>

<style scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  user-select: none;
  padding: 0 1.2rem;
}
.banner img {
  width: 100%;
  height: 100%;
}
.banner.reverse {
  flex-direction: row-reverse;
}
.left {
  width: 50%;
  height: 100%;
}
.right {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
.banner.reverse .right {
  align-items: flex-end;
  text-align: right;
}

.right h2 {
  text-decoration: none;
  border: none;
  font-size: 2rem;
  margin: 0;
}
@media screen and (max-width: 600px) {
  .banner {
    padding: 0;
    gap: 0;
    flex-direction: column !important;
  }
  .right {
    text-align: left !important;
    border-left: 5px solid #ccc;
    padding-left: 1rem;
    align-items: flex-start !important;
  }
}
</style>
