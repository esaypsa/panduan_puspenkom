<template>
  <div class="mermaid-wrapper" ref="container">
    <div class="mermaid" ref="mermaidRef">
      {{ diagram }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = defineProps<{
  diagram: string
}>()

const mermaidRef = ref<HTMLElement | null>(null)
const container = ref<HTMLElement | null>(null)

async function renderMermaid() {
  if (!mermaidRef.value) return
  try {
    const mermaid = (await import('mermaid')).default
    mermaid.initialize({
      startOnLoad: false,
      theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default',
      themeVariables: {
        fontFamily: 'Inter, system-ui, sans-serif',
      }
    })
    mermaidRef.value.innerHTML = props.diagram
    mermaid.run({ nodes: [mermaidRef.value] })
  } catch (e) {
    console.error('Mermaid error:', e)
  }
}

onMounted(() => {
  renderMermaid()
})

watch(() => props.diagram, () => {
  if (mermaidRef.value) {
    mermaidRef.value.innerHTML = ''
    renderMermaid()
  }
})
</script>

<style scoped>
.mermaid-wrapper {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  overflow-x: auto;
}

.mermaid {
  display: flex;
  justify-content: center;
  min-width: 300px;
}
</style>
