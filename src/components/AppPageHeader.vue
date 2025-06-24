<template>
  <v-container>
    <v-row>
      <v-col class="text-center my-8" cols="12">
        <div>
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  const props = defineProps({
    title: String,
    description: String,
  })
</script>
