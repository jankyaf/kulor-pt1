<template>
  <AppPageHeader title="Colors" description="This is the colors page" />
  <v-container>
    <v-row>
      <v-col cols="12">
        <CustomExpansionPanel v-model:isExpanded="isExpanded" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-expansion-panels>
          <AccentColorsExpansionPanel_v2 :themeToDisplay="theme.current" />
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-expansion-panels>
          <AccentColorsExpansionPanel_v1 :theme="theme.current" />
        </v-expansion-panels>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-divider class="my-4" thickness="4" color="white"></v-divider>
      </v-col>
    </v-row>

    <v-row>
      <v-col style="max-width: 300px">
        <ColorCodeDisplayCard title="BASE COLOR CODES" :colors="getBaseColors(theme.current)" />
      </v-col>
    </v-row>

    <!-- Toggle Theme Button -->
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10" class="text-center">
        <v-row>
          <v-btn size="x-large" width="100%" class="mb-8" @click="toggleTheme">Toggle Theme</v-btn>
        </v-row>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import AppPageHeader from "@/components/AppPageHeader.vue";

import { useTheme } from "vuetify";
import { getBaseColors } from "@/utils/themeUtils";
import { ref } from "vue";
import CustomExpansionPanel from '../components/CustomExpansionPanel.vue'

const isExpanded = ref(false);

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};

</script>

<style scoped>
.my-btn {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
