<template>
  <div class="navbar">
    <div class="left">123</div>
    <div class="right">
      <el-dropdown trigger="click" @command="handleComand">
        <el-avatar shape="square" :src="avatarUrl" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="home">首页</el-dropdown-item>
            <el-dropdown-item command="profile">课程主页</el-dropdown-item>
            <el-dropdown-item divided command="logout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const avatarUrl = computed(() => {
  return store.getters.userInfo.avatar
})

const handleComand = (command) => {
  switch (command) {
    case 'home':
      handleToHome()
      break
    case 'logout':
      handleLogout()
      break
  }
}

const handleToHome = () => {
  router.push('/')
}

const handleLogout = async () => {
  try {
    await store.dispatch('user/logout')
    router.push('/login')
  } catch (error) {
    console.log(error)
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  width: 100%;
  height: 50px;
  transition: width 0.28s;
  display: flex;
  justify-content: space-between;
  .left {
    margin-left: 20px;
  }
  .right {
    margin-right: 30px;
    .el-avatar {
      background-color: transparent;
    }
  }
}
</style>
