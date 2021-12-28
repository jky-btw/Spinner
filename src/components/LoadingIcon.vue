<template>
  <div class="image-container fit row justify-center items-center">
    <img class="image" src="~assets/spin_logo.png" alt="Loading" />
  </div>
</template>

<script>
export default {
  name: "SpinnerLoadingImage",
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.image-container {
  min-height: inherit;
}
.image {
  animation: rotation 1s infinite cubic-bezier(0.4, 0.01, 0.24, 1);
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
