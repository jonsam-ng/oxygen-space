<template>
  <div class="lady">
    <img :src="src" @click.prevent="false" @contextmenu.prevent="false" />
  </div>
</template>

<script>
export default {
  name: "ReadingLady",
  data() {
    return {
      src: "/img/lady.gif",
    };
  },
};
</script>

<style scoped>
.lady {
  position: fixed;
  bottom: -60px;
  right: 0;
  width: 360px;
  z-index: -1;
}
.lady img {
  width: 100%;
}
@media screen and (max-width: 1640px) {
  .lady {
    display: none;
  }
}
</style>
