<template>
  <div class="info-card" :class="type">
    <div class="info-card-title">
      <span v-html="icon"></span>
      <span>{{ title }}</span>
    </div>
    <div class="info-card-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  type?: 'info' | 'success' | 'warning' | 'danger'
  icon?: string
}>()
</script>
