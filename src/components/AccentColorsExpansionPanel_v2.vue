<template>
  <v-expansion-panel bg-color="background" class="border">
    <v-expansion-panel-title color="surface" height="64px">
      <h2>ACCENT COLORS</h2>
      <v-spacer />
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-row class="py-4">
        <v-col style="min-width: 280px; max-width: 400px">
          <ButtonVariantDisplayCard :colors="getAccentColors(themeToDisplay)" title="BUTTON REGULAR" variant="elevated" />
        </v-col>
        <v-col style="min-width: 280px; max-width: 400px">
          <ButtonVariantDisplayCard :colors="getAccentColors(themeToDisplay)" title="BUTTON TONAL" variant="tonal" />
        </v-col>
        <v-col style="min-width: 280px; max-width: 400px">
          <ButtonVariantDisplayCard :colors="getAccentColors(themeToDisplay)" title="BUTTON OUTLINE" variant="outlined" />
        </v-col>
        <v-col style="max-width: 300px">
          <ColorCodeDisplayCard :colors="getAccentColors(themeToDisplay)" title="COLOR CODES" />
        </v-col>
      </v-row>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup>
  import { useTheme } from 'vuetify'
  import { getAccentColors } from '../utils/themeUtils'
  import ButtonVariantDisplayCard from './ButtonVariantDisplayCard.vue'
  import ColorCodeDisplayCard from './ColorCodeDisplayCard.vue'

  const props = defineProps({
    themeToDisplay: {
      type: Object,
      required: true,
    },
  })
</script>
