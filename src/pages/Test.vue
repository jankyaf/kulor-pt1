<template>
  <AppPageHeader description="This is a test page" title="Test" />
  <v-container>

    <v-row>
      <v-col cols="12">
        <v-sheet border="md" color="transparent" rounded="lg">
          <v-row>
            <v-col class="pt-8 d-flex justify-center">
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
      <v-col>
        <SampleVCardsPanel />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <ContentPanel padding="false">
          <v-row>
            <v-col>
              <v-btn>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
            <v-col d-flex justify="left">
              {{ test() }}
            </v-col>
          </v-row>
        </ContentPanel>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
  import { useTheme } from 'vuetify'
  import { getAllColors, getBorderColor } from '@/utils/themeUtils'

  const theme = useTheme()
  const themeslist = Object.keys(theme.themes.value).map(themeName => ({
    id: themeName,
    name: themeName.charAt(0).toUpperCase() + themeName.slice(1) + ' Theme',
  }))

  function test () {
    const borderColor = getBorderColor(theme.global.current)
    console.log('Current border color:', borderColor)
    return borderColor
  }

  console.log(themeslist)

  console.log(getAllColors(theme.global.current))

</script>
