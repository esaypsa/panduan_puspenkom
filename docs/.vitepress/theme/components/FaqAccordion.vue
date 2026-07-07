<template>
  <div class="faq-section">
    <div class="faq-item" v-for="(item, index) in items" :key="index">
      <div class="faq-question" :class="{ active: openIndex === index }" @click="toggle(index)">
        <span>{{ item.q }}</span>
        <span class="faq-icon">&#9660;</span>
      </div>
      <div class="faq-answer" :class="{ open: openIndex === index }">
        <p>{{ item.a }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  items: { q: string; a: string }[]
}>()

const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>
