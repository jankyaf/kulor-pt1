<!-- 
  Colors.vue
  The Colors page displays theme and color utilities, including expansion panels for theme selection and color previews.
  Includes controls for toggling theme and viewing color codes.
-->
<template>
  <!-- Page header with title and description -->
  <AppPageHeader title="Colors" description="This is the colors page" />
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- Custom Expansion Panel (Prototype) -->
        <CustomExpansionPanel v-model:isExpanded="isExpanded" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        
        <v-sheet class="border-lg border-radius-lg" color="transparent">
          <v-row >
            <v-col class="pt-8" style="display: flex; justify-content: center;">
              <h2>THEME PICKER</h2>
            </v-col>
          </v-row>
          <v-row >
            <v-col>
              <ThemePickerComboBox class="mx-8 mb-8"/>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <!-- <v-card class=" pl-6" height="64px" color="surface" style="display: flex; align-items: center; justify-content: left; border-radius: 4px;"> -->
          <v-sheet class="border-lg pl-6" height="64px" color="transparent" style="display: flex; align-items: center; justify-content: center; border-radius: 4px;">
            <h2>ACCENT COLORS</h2>
        </v-sheet>
        <v-row class="py-4">
        <!-- Column for regular button variant display with responsive width constraints -->
        <v-col style="min-width: 280px; max-width: 400px">
          <ButtonVariantDisplayCard 
            :colors="getAllColors(theme.current)" 
            title="BUTTON REGULAR" 
            variant="elevated" 
          />
        </v-col>
        <!-- Column for tonal button variant display with responsive width constraints -->
        <v-col style="min-width: 280px; max-width: 400px">
          <ButtonVariantDisplayCard 
            :colors="getAccentColors(theme.current)" 
            title="BUTTON TONAL" 
            variant="tonal" 
          />
        </v-col>
        <!-- Column for outline button variant display with responsive width constraints -->
        <v-col style="min-width: 280px; max-width: 400px">
          <ButtonVariantDisplayCard 
            :colors="getAccentColors(theme.current)" 
            title="BUTTON OUTLINE" 
            variant="outlined" 
          />
        </v-col>
        <!-- Column for color codes display with maximum width constraint -->
        <v-col style="max-width: 300px">
          <ColorCodeDisplayCard 
            :colors="getAccentColors(theme.current)" 
            title="COLOR CODES" 
          />
        </v-col>
      </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-divider class="my-4" thickness="4" color="white"></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        
        <v-expansion-panels>
          <!-- Accent Colors Expansion Panel (v2, prototype) -->
          <AccentColorsExpansionPanel_v2 :themeToDisplay="theme.current" />
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
        <v-divider class="my-4" thickness="4" color="white"></v-divider>
      </v-col>
    </v-row>

    <v-row>
      <v-col style="max-width: 300px">
        <!-- Card displaying base color codes for the current theme -->
        <ColorCodeDisplayCard title="BASE COLOR CODES" :colors="getBaseColors(theme.current)" />
      </v-col>
    </v-row>

    <!-- Toggle Theme Button -->
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10" class="text-center">
        <v-row>
          <!-- Button to toggle between light and dark themes -->
          <v-btn size="x-large" width="100%" class="mb-8" @click="toggleTheme">Toggle Theme</v-btn>
        </v-row>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Import page header component
import AppPageHeader from "@/components/AppPageHeader.vue";

// Import Vuetify theme composable and color utility
import { useTheme } from "vuetify";
import { getBaseColors } from "@/utils/themeUtils";
import { ref } from "vue";
import CustomExpansionPanel from '../components/CustomExpansionPanel.vue'
import { getAccentColors } from '../utils/themeUtils'
import { getAllColors } from '../utils/themeUtils'

// State for custom expansion panel
const isExpanded = ref(false);

// Vuetify theme instance
const theme = useTheme();

// Toggle between light and dark themes
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
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
