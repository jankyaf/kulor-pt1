<template>
  <!-- <v-card variant="outlined"> -->
    <v-card color="background" class="border-lg">
    <v-card-title class="text-center">{{title}}</v-card-title>
    <v-divider thickness="4" color="surface-variant"></v-divider>
    <!-- <v-list :bg-color="backgroundColor"> -->
    <v-list bg-color="background">
      <v-list-item class="ma-4" v-for="(color, name) in colors" :key="name">
        <v-btn :variant="variant" :color="name" class="w-100">{{ name }}</v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    default: 'BUTTON',
  },
  colors: {
    type: Object,
    required: true,
  },
  variant: {
    type: String,
    default: 'elevated',
  },
  backgroundColor: {
    type: String,
    default: 'background',
  },
});
</script>

