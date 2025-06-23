<template>
  <v-expansion-panel bg-color="background" class="border">
    <v-expansion-panel-title color="surface" height="64px">
      <h2>ACCENT COLORS</h2>
      <v-spacer></v-spacer>
      <v-combobox 
        :items="themesList"
        item-title="name"
        item-value="id" 
        label="Theme"
        variant="outlined"
        density="compact"
        hide-details
        class="mr-4"
        ></v-combobox>
      <v-spacer></v-spacer>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-row class="py-4">
        <v-col style="min-width: 280px; max-width: 400px">
          <ButtonVariantDisplayCard title="BUTTON REGULAR" :colors="getAccentColors(themeToDisplay)" variant="elevated" />
        </v-col>
        <v-col style="min-width: 280px; max-width: 400px">
          <ButtonVariantDisplayCard title="BUTTON TONAL" :colors="getAccentColors(themeToDisplay)" variant="tonal" />
        </v-col>
        <v-col style="min-width: 280px; max-width: 400px">
          <ButtonVariantDisplayCard title="BUTTON OUTLINE" :colors="getAccentColors(themeToDisplay)" variant="outlined" />
        </v-col>
        <v-col style="max-width: 300px">
          <ColorCodeDisplayCard title="COLOR CODES" :colors="getAccentColors(themeToDisplay)" />
        </v-col>
      </v-row>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup>
import ButtonVariantDisplayCard from './ButtonVariantDisplayCard.vue';
import ColorCodeDisplayCard from './ColorCodeDisplayCard.vue';
import { getAccentColors } from '../utils/themeUtils';
import { useTheme } from 'vuetify';

const theme = useTheme();

const themesList = Object.keys(theme.themes.value).map(themeName => ({
  id: themeName,
  name: themeName.charAt(0).toUpperCase() + themeName.slice(1).replace(/([A-Z])/g, ' $1').trim() + ' Theme'
}));

const props = defineProps({
  themeToDisplay: {
    type: Object,
    required: true,
  },
});
</script>
