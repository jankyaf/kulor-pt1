<template>
  <v-expansion-panel bg-color="background" class="border">
    <v-expansion-panel-title color="surface" height="64px">
      <h2>ACCENT COLORS</h2>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-row class="py-4">
        <v-col style="min-width: 280px; max-width: 400px">
          <ButtonVariantDisplayCard title="BUTTON REGULAR" :colors="getAccentColors(theme)" variant="elevated" />
        </v-col>
        <v-col style="min-width: 280px; max-width: 400px">
          <ButtonVariantDisplayCard title="BUTTON TONAL" :colors="getAccentColors(theme)" variant="tonal" />
        </v-col>
        <v-col style="min-width: 280px; max-width: 400px">
          <ButtonVariantDisplayCard title="BUTTON OUTLINE" :colors="getAccentColors(theme)" variant="outlined" />
        </v-col>
        <v-col style="max-width: 300px">
          <ColorCodeDisplayCard title="COLOR CODES" :colors="getAccentColors(theme)" />
        </v-col>
      </v-row>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup>
import ButtonVariantDisplayCard from './ButtonVariantDisplayCard.vue';
import ColorCodeDisplayCard from './ColorCodeDisplayCard.vue';
import { getAccentColors } from '../utils/themeUtils';

const props = defineProps({
  theme: {
    type: Object,
    required: true,
  },
});
</script>
