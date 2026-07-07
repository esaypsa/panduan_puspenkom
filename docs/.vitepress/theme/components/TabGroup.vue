<template>
  <div class="tab-group" :class="{ 'tab-group-vertical': vertical }">
    <div class="tab-nav" :class="{ 'tab-nav-vertical': vertical }" role="tablist">
      <button
        v-for="(tab, index) in tabTitles"
        :key="index"
        class="tab-button"
        :class="{ active: activeTab === index, 'tab-button-vertical': vertical }"
        @click="activeTab = index"
        role="tab"
      >
        {{ tab }}
      </button>
    </div>
    <div class="tab-panels" :class="{ 'tab-panels-vertical': vertical }">
      <div
        v-for="(_, index) in tabTitles"
        :key="index"
        class="tab-panel"
        role="tabpanel"
        v-show="activeTab === index"
      >
        <slot :name="`tab-${index}`" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  titles: string
  vertical?: boolean
}>()

const tabTitles = computed(() => props.titles.split(',').map(t => t.trim()))
const activeTab = ref(0)
</script>
