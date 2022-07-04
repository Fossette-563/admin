<template>
  <div class="tags-view-container">
    <ul class="tags-view-list">
      <li
        class="tags"
        @click="handleSelecTag(item.path)"
        :class="{ active: $route.path === item.path }"
        v-for="(item, index) in tagsView"
        :key="index"
      >
        {{ item.title }}
        <span @click.stop="handleCloseTag(index)">
          <svg-icon v-if="!(route.path === item.path)" icon="close"></svg-icon>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
const store = useStore()
const route = useRoute()
const router = useRouter()
console.log(route, 'route')
console.log(router, 'router')
watch(
  () => router.currentRoute.value.path,
  (toPath) => {
    if (route.meta && route.meta.title && route.path) {
      const obj = {
        title: route.meta.title,
        path: route.path
      }
      store.commit('tagsview/setTagsView', obj)
    }
  },
  { immediate: true, deep: true }
)

const tagsView = computed(() => {
  return store.getters.tagsview
})
console.log('tagsView>>>===', tagsView)

const handleSelecTag = (path) => {
  router.push(path)
}

const handleCloseTag = (index) => {
  store.commit('tagsview/removeTagItem', index)
}
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  .tags-view-list {
    overflow-x: auto;
    display: flex;
    .tags {
      display: inline-block;

      margin-left: 10px;
      margin-top: 3px;
      border: 1px solid gainsboro;
      height: 25px;
      width: 100px;
      font-size: 15px;
      text-align: center;
      line-height: 25px;
      cursor: pointer;
    }
    .active {
      background-color: #304156;
      color: #fff;
    }
  }
}
</style>
