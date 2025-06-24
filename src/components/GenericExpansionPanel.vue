<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      <v-icon>mdi-plus</v-icon>
      <span>Expansion Panel</span>
    </v-expansion-panel-title>
  </v-expansion-panel>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
  })
</script>
