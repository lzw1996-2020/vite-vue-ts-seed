<script setup lang="ts"></script>

<template>
  <div class="page">
    菜单栏
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style lang="less" scoped>
.page {
  color: @error-color;
}
</style>
