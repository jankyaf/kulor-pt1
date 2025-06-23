<template>
  <AppPageHeader title="Counter" description="This is the counter page" />
  <v-container>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10" style="min-width: 500px;">
        <v-row>
          <v-col>
            <v-card class="mx-auto">
              <v-card-title>COUNT = {{ count }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn prepend-icon="mdi-plus" color="primary" @click="increment" class="mr-4">Increment</v-btn>
            <v-btn prepend-icon="mdi-minus" color="secondary" @click="decrement" class="mr-4">Decrement</v-btn>
            <v-btn prepend-icon="mdi-refresh" color="error" @click="reset" class="float-right">Reset</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import AppPageHeader from '@/components/AppPageHeader.vue'
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};

const reset = () => {
  count.value = 0;
};
</script>
