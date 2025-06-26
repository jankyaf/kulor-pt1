<!--
  Colors.vue
  The Colors page displays theme and color utilities, including expansion panels for theme selection and color previews.
  Includes controls for toggling theme and viewing color codes.
-->
<template>
  <!-- Page header with title and description -->
  <AppPageHeader description="This is the colors page" title="Colors" />
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- Custom Expansion Panel (Prototype) -->
        <CustomExpansionPanel v-model:is-expanded="isExpanded" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">

        <v-sheet class="border-md rounded-lg" color="transparent">
          <v-row>
            <v-col class="pt-8" style="display: flex; justify-content: center;">
              <h2>THEME PICKER</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <ThemePickerComboBox class="mx-8 mb-8" />
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <!-- <v-card class=" pl-6" height="64px" color="surface" style="display: flex; align-items: center; justify-content: left; border-radius: 4px;"> -->
        <v-sheet class="border-lg pl-6" color="transparent" height="64px" style="display: flex; align-items: center; justify-content: center; border-radius: 4px;">
          <h2>ACCENT COLORS</h2>
        </v-sheet>
        <v-row class="py-4">
          <!-- Column for regular button variant display with responsive width constraints -->
          <v-col>
            <ButtonVariantDisplayCard
              :colors="getAccentColors(theme.global.current)"
              max-width="300"
              min-width="260"
              title="BUTTON REGULAR"
              variant="elevated"
            />
          </v-col>
          <!-- Column for tonal button variant display with responsive width constraints -->
          <v-col>
            <ButtonVariantDisplayCard
              :colors="getAccentColors(theme.current)"
              max-width="300"
              min-width="260"
              title="BUTTON TONAL"
              variant="tonal"
            />
          </v-col>
          <!-- Column for outline button variant display with responsive width constraints -->
          <v-col>
            <ButtonVariantDisplayCard
              :colors="getAccentColors(theme.current)"
              max-width="300"
              min-width="260"
              title="BUTTON OUTLINE"
              variant="outlined"
            />
          </v-col>
          <!-- Column for color codes display with maximum width constraint -->
          <v-col>
            <ColorCodeDisplayCard
              :colors="getAccentColors(theme.current)"
              max-width="300"
              min-width="260"
              title="COLOR CODES"
            />
          </v-col>
          <v-col>
            <ColorCodeDisplayCard
              :colors="getBaseColors(theme.current)"
              max-width="300"
              min-width="260"
              title="BASE COLOR CODES"
            />
          </v-col>
          <v-col />
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-divider class="my-4" color="white" thickness="4" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">

        <v-expansion-panels>
          <!-- Accent Colors Expansion Panel (v2, prototype) -->
          <AccentColorsExpansionPanel_v2 :theme-to-display="theme.current" />
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-expansion-panels multiple variant="accordion">
          <!-- Theme picker panel inside expansion panels -->
          <ThemePickerPanel />
          <!-- Accent Colors Expansion Panel (v1, prototype) -->
          <AccentColorsExpansionPanel_v1 :theme="theme.current" />
        </v-expansion-panels>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <!-- Divider for visual separation -->
        <v-divider class="my-4" color="white" thickness="4" />
      </v-col>
    </v-row>

    <v-row>
      <v-col style="max-width: 300px">
        <!-- Card displaying base color codes for the current theme -->
        <ColorCodeDisplayCard :colors="getBaseColors(theme.current)" title="BASE COLOR CODES" />
      </v-col>
    </v-row>

    <!-- Toggle Theme Button -->
    <v-row>
      <v-col cols="1" />
      <v-col class="text-center" cols="10">
        <v-row>
          <!-- Button to toggle between light and dark themes -->
          <v-btn class="mb-8" size="x-large" width="100%" @click="toggleTheme">Toggle Theme</v-btn>
        </v-row>
      </v-col>
      <v-col cols="1" />
    </v-row>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'

  // Import Vuetify theme composable and color utility
  import { useTheme } from 'vuetify'
  // Import page header component
  import AppPageHeader from '@/components/AppPageHeader.vue'
  import { getBaseColors } from '@/utils/themeUtils'
  import CustomExpansionPanel from '../components/CustomExpansionPanel.vue'
  import { getAccentColors, getAllColors } from '../utils/themeUtils'

  // State for custom expansion panel
  const isExpanded = ref(false)

  // Vuetify theme instance
  const theme = useTheme()

  // Toggle between light and dark themes
  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  };

</script>

<style scoped>
/* Style for button margin spacing */
.my-btn {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
