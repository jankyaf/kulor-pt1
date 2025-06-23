<template>
  <v-card color="background" variant="flat" class="border-lg">
    <v-card-title class="text-center">{{title}}</v-card-title>
    <v-divider thickness="4" color="surface-variant"></v-divider>
    <v-list bg-color="background">
      <v-list-item class="ma-4" v-for="(color, name) in colors" :key="name">
        <template v-slot:prepend>
          <div class="d-flex align-center">
            <div
              :style="{ width: '36px', height: '36px', backgroundColor: color, marginRight: '8px', borderRadius: '4px' }">
            </div>
          </div>
        </template>
        <v-list-item-title>{{ name }}</v-list-item-title>
        <v-list-item-subtitle>{{ color }} </v-list-item-subtitle>
        <!-- <v-list-item-subtitle>rgb: {{ hexToRgb(color).r }}, {{ hexToRgb(color).g }},  {{ hexToRgb(color).b }}</v-list-item-subtitle>  -->
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'COLOR CODES',
  },
  colors: {
    type: Object,
    required: true,
  },
});
</script>