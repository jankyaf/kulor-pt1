<template>
  <v-expansion-panel bg-color="background" class="border">
    <v-expansion-panel-title color="surface" height="64px">
      <h2>THEME PICKER</h2>
      <v-spacer />
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-row class="py-4">
        <v-col cols="12" style="max-width: 400px">
          <v-combobox
            item-title="name"
            item-value="id"
            :items="themesList"
            label="Select Theme"
            variant="solo-filled"
            density="comfortable"
            hide-details
            @update:model-value="handleThemeChange"
          />
        </v-col>
      </v-row>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();

const themesList = Object.keys(theme.themes.value).map((themeName) => ({
  id: themeName,
  name:
    themeName.charAt(0).toUpperCase() +
    themeName
      .slice(1)
      .replace(/([A-Z])/g, " $1")
      .trim() +
    " Theme",
}));

const handleThemeChange = (selectedTheme) => {
  if (selectedTheme) {
    theme.global.name.value = selectedTheme.id;
  }
};
</script>

<style scoped></style>
