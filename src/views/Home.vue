<template>
  <transition name="slide-fade" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("stopLoad");
  },
  components: {},
};
</script>

<style >
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.125s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  /* transform: translateX(50px); */
  opacity: 0;
}
</style>