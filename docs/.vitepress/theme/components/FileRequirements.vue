<template>
  <div class="file-req-table">
    <table>
      <thead>
        <tr>
          <th>Dokumen</th>
          <th>Format</th>
          <th>Ukuran Maks</th>
          <th>Keterangan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(file, index) in files" :key="index">
          <td><strong>{{ file.name }}</strong></td>
          <td><code>{{ file.format }}</code></td>
          <td>{{ file.size }}</td>
          <td>{{ file.note }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  files: { name: string; format: string; size: string; note: string }[]
}>()
</script>
