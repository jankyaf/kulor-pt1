<template>
  <v-app>
    <AppHeaderNav />
    <v-main>
      <v-container class="mx-auto" max-width="1200px">
        <router-view />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
  //
</script>
