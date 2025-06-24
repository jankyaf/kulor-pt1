<template tag="account_button">
  <div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" location="end">
      <template #activator="{ props }">
        <v-btn icon size="large" v-bind="props"><v-icon>mdi-account-circle-outline</v-icon></v-btn>
      </template>

      <v-card min-width="300">
        <v-list>
          <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg" subtitle="Founder of Vuetify" title="John Leider">
            <template #append>
              <v-btn :class="fav ? 'text-red' : ''" icon="mdi-heart" variant="text" @click="fav = !fav" />
            </template>
          </v-list-item>
        </v-list>

        <v-divider />

        <v-list>
          <v-list-item>
            <v-switch v-model="message" color="purple" hide-details label="Enable messages" />
          </v-list-item>

          <v-list-item>
            <v-switch v-model="hints" color="purple" hide-details label="Enable hints" />
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer />

          <v-btn variant="text" @click="menu = false"> Cancel </v-btn>
          <v-btn color="primary" variant="text" @click="menu = false"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<!-- -------------------------------------------------------------------------- -->
<script setup>
  import { ref } from 'vue'

  const fav = ref(true)
  const menu = ref(false)
  const message = ref(false)
  const hints = ref(true)
</script>
