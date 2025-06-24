<template>
  <v-sheet border color="transparent">
    <v-toolbar height="64">
      <v-toolbar-title class="text-h5 font-weight-bold">THEMES</v-toolbar-title>
      <v-spacer />
      <v-btn size="large" @click="isExpanded = !isExpanded">
        <v-icon size="x-large">{{ isExpanded ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container v-show="isExpanded">
      <v-row>
        <v-col cols="6">
          <v-card height="250px">
            <v-card-title>asd</v-card-title>
            <v-card-text>asd</v-card-text>
            <v-spacer vertical />
            <v-card-actions>
              <v-btn>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card height="100%" variant="tonal">
            <v-card-title>management</v-card-title>
            <v-card-text>asdfsdfsdfsdfsdfsdfsdf</v-card-text>
            <v-card-actions>
              <v-btn>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
  const isExpanded = defineModel<boolean>('isExpanded', { required: true })
</script>
