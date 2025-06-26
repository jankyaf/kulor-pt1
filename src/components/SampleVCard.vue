<template>
  <v-card :color="color" :variant="variant">
    <v-card-title> V-CARD </v-card-title>
    <v-card-subtitle> {{ variant.toUpperCase() }} </v-card-subtitle>
    <v-card-text> color = {{ color ? color : 'none' }} </v-card-text>
    <v-card-actions>
      <v-btn> action </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
  const props = defineProps({
    variant: {
      type: String,
      default: 'elevated',
      validator: value => ['elevated', 'flat', 'outlined', 'tonal', 'text'].includes(value),
    },
    color: {
      type: String,
      default: '',
      validator: value => ['', 'primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'error'].includes(value),
    },
  })

  // const cardClasses = computed(() => {
  //   return {
  //     'v-card--variant': props.variant,
  //     'v-card--color': props.color,
  //   }
  // })
</script>
