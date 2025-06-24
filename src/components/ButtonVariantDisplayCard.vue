<!-- 
  ButtonVariantDisplayCard.vue
  A Vue component that displays a collection of buttons with different colors using a specific variant.
  Used to showcase how different accent colors look with various button styles (elevated, tonal, outlined).
-->
<template>
  <!-- Card container with large border and background color -->
  <!-- Note: There's a commented out variant="outlined" option -->
  <v-card class="border-lg" color="background">
    <!-- Card title centered at the top -->
    <v-card-title class="text-center">{{ title }}</v-card-title>
    <!-- Divider with surface variant color and thick styling -->
    <v-divider color="surface-variant" thickness="4" />
    <!-- List container for button items -->
    <!-- Note: There's a commented out dynamic background color option -->
    <v-list bg-color="background">
      <!-- List item for each color in the colors object -->
      <!-- Each item contains a button with the color name as both color and text -->
      <v-list-item v-for="(color, name) in colors" :key="name" class="ma-4">
        <!-- Button with full width, dynamic color, and specified variant -->
        <v-btn class="w-100" :color="name" :variant="variant">{{ name }}</v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
  // Define component props with validation and defaults
  const props = defineProps({
    // Title to display at the top of the card
    title: {
      type: String,
      default: 'BUTTON',  // Default title if none provided
    },
    // Object containing color definitions to display as buttons
    colors: {
      type: Object,
      required: true,  // Colors object is required for this component to function
    },
    // Vuetify button variant to apply to all buttons (elevated, tonal, outlined, etc.)
    variant: {
      type: String,
      default: 'elevated',  // Default to elevated variant
    },
    // Background color for the list container
    backgroundColor: {
      type: String,
      default: 'background',  // Default to theme background color
    },
  })
</script>
