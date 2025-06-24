<!-- 
  AccentColorsExpansionPanel_v1.vue
  A Vue component that displays accent color variations for different button styles.
  Shows button variants (regular, tonal, outline) and color codes for a given theme.
  This is the first version of the accent colors panel - note the missing v-spacer in title.
-->
<template>
  <!-- Expansion panel container with background color and border styling -->
  <v-expansion-panel bg-color="background" class="border">
    <!-- Panel title section with fixed height and surface color -->
    <!-- Note: This version is missing the v-spacer that v2 includes -->
    <v-expansion-panel-title color="surface" height="64px">
      <h2>ACCENT COLORS</h2>
    </v-expansion-panel-title>
    <!-- Panel content area -->
    <v-expansion-panel-text>
      <!-- Row container with vertical padding -->
      <v-row class="py-4">
        <!-- Column for regular button variant display with responsive width constraints -->
        <v-col style="min-width: 280px; max-width: 400px">
          <ButtonVariantDisplayCard 
            :colors="getAccentColors(theme)" 
            title="BUTTON REGULAR" 
            variant="elevated" 
          />
        </v-col>
        <!-- Column for tonal button variant display with responsive width constraints -->
        <v-col style="min-width: 280px; max-width: 400px">
          <ButtonVariantDisplayCard 
            :colors="getAccentColors(theme)" 
            title="BUTTON TONAL" 
            variant="tonal" 
          />
        </v-col>
        <!-- Column for outline button variant display with responsive width constraints -->
        <v-col style="min-width: 280px; max-width: 400px">
          <ButtonVariantDisplayCard 
            :colors="getAccentColors(theme)" 
            title="BUTTON OUTLINE" 
            variant="outlined" 
          />
        </v-col>
        <!-- Column for color codes display with maximum width constraint -->
        <v-col style="max-width: 300px">
          <ColorCodeDisplayCard 
            :colors="getAccentColors(theme)" 
            title="COLOR CODES" 
          />
        </v-col>
      </v-row>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup>
  // Import utility function to extract accent colors from theme
  import { getAccentColors } from '../utils/themeUtils'
  // Import child components for displaying button variants and color codes
  import ButtonVariantDisplayCard from './ButtonVariantDisplayCard.vue'
  import ColorCodeDisplayCard from './ColorCodeDisplayCard.vue'

  // Define component props with validation
  const props = defineProps({
    // Theme object to display accent colors for
    theme: {
      type: Object,
      required: true,  // Theme object is required for this component to function
    },
  })

</script>
