<template>
  <div class="app-main">
    <router-view />
    <div class="my-container"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.app-main {
  height: 100%;
  min-height: calc(100vh - 93px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 104px 20px 20px 20px;
  box-sizing: border-box;
  .my-container {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
}
</style>
