<template>
  <div class="tab-item" :data-title="title">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
