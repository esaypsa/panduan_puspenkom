<template>
  <div class="step-card">
    <div class="step-title">
      <span class="step-number">{{ number }}</span>
      <span>{{ title }}</span>
    </div>
    <div class="step-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: number | string
  title: string
}>()
</script>
