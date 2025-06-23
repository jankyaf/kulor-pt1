<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="navSidebar = !navSidebar" />
    <v-toolbar-title>
      <router-link style="text-decoration:none; color:inherit; cursor:pointer;" to="/">
        Tasker
      </router-link>
    </v-toolbar-title>
    <v-spacer />
    <ProfilePopoverMenu_LoggedOut />
  </v-app-bar>
  <v-navigation-drawer v-model="navSidebar" app expand-on-hover permanent rail>
    <v-list nav>
      <v-list-item v-for="(item, i) in navSidebarItemsTop" :key="i" color="primary" :prepend-icon="item.icon" :to="item.route">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
      <v-divider class="my-4" thickness="4"></v-divider>
      <v-list-item v-for="(item, i) in navSidebarItemsBottom" :key="i" color="primary" :prepend-icon="item.icon" :to="item.route">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
      <v-divider class="my-4" thickness="4"></v-divider>
      <v-list-item v-for="(item, i) in navSidebarItemsGroup1" :key="i" color="primary" :prepend-icon="item.icon" :to="item.route">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
  import { ref } from 'vue'

  const navSidebar = ref(false)

  const navSidebarItemsTop = [
    { title: 'Home', icon: 'mdi-home-outline', route: '/home' },
    { title: 'Favorites', icon: 'mdi-star-outline', route: '/favorites' },
    { title: 'Counter', icon: 'mdi-counter', route: '/counter'},
    { title: 'Colors', icon: 'mdi-palette-outline', route: '/colors'},
  ]

  const navSidebarItemsBottom = [
    { title: 'Settings', icon: 'mdi-cog', route: '/settings' },
    { title: 'Help', icon: 'mdi-help-circle', route: '/help' },
  ]

  const navSidebarItemsGroup1 = [
    { title: 'Test', icon: 'mdi-test-tube', route: '/test' },
  ]

  const openSidebarItems = ref([])

</script>
