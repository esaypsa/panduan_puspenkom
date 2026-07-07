<template>
  <span class="status-badge" :class="statusClass">{{ label }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  status: string
}>()

const statusMap: Record<string, string> = {
  'draft': 'Draft',
  'belum-lengkap': 'Belum Lengkap',
  'menunggu-pembayaran': 'Menunggu Pembayaran',
  'menunggu-verifikasi': 'Menunggu Verifikasi',
  'disetujui': 'Disetujui',
  'ditolak': 'Ditolak',
  'selesai': 'Selesai',
}

const statusClass = computed(() => props.status)
const label = computed(() => statusMap[props.status] || props.status)
</script>
