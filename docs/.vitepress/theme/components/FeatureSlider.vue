<template>
  <div v-if="visible" class="feature-slider-arrows">
    <button class="feature-slider-btn prev" @click="slide(-1)" :disabled="isStart" aria-label="Previous">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
    <button class="feature-slider-btn next" @click="slide(1)" :disabled="isEnd" aria-label="Next">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)
const isStart = ref(true)
const isEnd = ref(false)
let container: HTMLElement | null = null

function updateState() {
  if (!container) return
  isStart.value = container.scrollLeft < 10
  isEnd.value = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10
}

function slide(dir: number) {
  if (!container) return
  const item = container.querySelector('.item') as HTMLElement | null
  if (!item) return
  const gap = 24
  const scrollAmount = item.offsetWidth + gap
  container.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' })
}

onMounted(() => {
  container = document.querySelector('.vp-features')
  if (container && container.children.length > 0) {
    visible.value = true
    container.addEventListener('scroll', updateState)
    updateState()
  }
})

onUnmounted(() => {
  if (container) {
    container.removeEventListener('scroll', updateState)
  }
})
</script>