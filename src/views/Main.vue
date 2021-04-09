<template>
  <transition name="slide-fade" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
export default {
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
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>