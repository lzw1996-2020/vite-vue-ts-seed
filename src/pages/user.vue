<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const clickJump = (id: number) => {
  router.push(`/home/manage/${id}`);
};
</script>

<template>
  <div>user</div>
  <button @click="clickJump(123)">跳转</button>
</template>
