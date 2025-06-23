<template>
  <AppPageHeader title="Home" description="This is the home page" />
  <v-container>
    <v-row class>
      <v-col cols="12" class="text-center">
        <v-btn class="mr-4" color="primary" @click="navigateToFavorites">Go to Favorites</v-btn>
        <v-btn color="secondary" @click="navigateToCounter">Go to Counter</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import AppPageHeader from '@/components/AppPageHeader.vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToFavorites = () => {
  router.push('/favorites');
};
const navigateToCounter = () => {
  // This function will navigate to the Counter page when the button is clicked.
  router.push('/counter');
};

</script>