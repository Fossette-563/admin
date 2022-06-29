<template>
  <div class="sidebar-container">
    <div class="logo-container">
      <span class="el-avatar">
        <img
          src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
          class="logo"
        />
      </span>
      <h1 class="logo-title">imooc-admin</h1>
    </div>
    <sidebar-menu></sidebar-menu>
  </div>
</template>

<script setup>
// import { reactive } from '@vue/reactivity'
import SidebarMenu from './SidebarMenu .vue'
</script>

<style lang="scss" scoped>
.logo-container {
  height: var(--59cf8ee8) px;
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .el-avatar {
    height: var(--59cf8ee8) px;
    background: transparent;
  }
  .logo {
    width: 50px;
    height: 40px;
  }
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
.el-scrollbar {
  position: relative;
  overflow: hidden;
}
</style>
