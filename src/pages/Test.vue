<template>
  <AppPageHeader title="Test" description="This is a test page" />
  <v-container>
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
        <v-col class="">
          <v-btn color="primary-darken-2">test</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="">
          <ButtonVariantDisplayCard :colors="getAllColors(theme.global.current)" title="BUTTON REGULAR" variant="elevated" />
        </v-col>
      </v-row>
  </v-container>
</template>

<script setup>
import { getAllColors } from '@/utils/themeUtils'
import { useTheme } from 'vuetify'

const theme = useTheme()
const themeslist =Object.keys(theme.themes.value).map((themeName) => ({
  id: themeName,
  name: themeName.charAt(0).toUpperCase() + themeName.slice(1) + " Theme",
}))

console.log(themeslist)

console.log(getAllColors(theme.global.current))

</script>