<template>
  <v-app :theme="theme">

    <v-navigation-drawer v-model="drawerControll" class="justify-center align-center">
      <v-list>
        <v-list-subheader class="align-center justify-center mb-5 mt-5">
          <h1>
            PokeVue
          </h1>
        </v-list-subheader>
        <v-list-item to="/dashboard" class="rounded-xl" prepend-icon="mdi-pokeball">Home</v-list-item>
        <v-list-item to="/pokdex" class="rounded-xl" prepend-icon="mdi-tablet-dashboard">Pokedex</v-list-item>
        <v-divider class="mb-3 mt-3" />
        <v-list-item to="/perfil" class="rounded-xl" prepend-icon="mdi-account-circle-outline">Perfil</v-list-item>
        <v-list-item to="/sair" class="rounded-xl" prepend-icon="mdi-logout">Sair</v-list-item>
        <v-divider class="mb-3 mt-3" />
        <v-list-item>
          <v-list-item-action>
            <v-switch true-value="dark" true label="Tema" false-value="white" v-model="theme" inset />
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawerControll = !drawerControll" />
    </v-app-bar>


    <v-main>

      <v-container>

        <v-row>

          <v-col cols="6" md="3">
            <CardCompVue />
          </v-col>

          <v-col cols="6" md="3">
            <CardCompVue />
          </v-col>

          <v-col cols="6" md="3">
            <CardCompVue />
          </v-col>

          <v-col cols="6" md="3">
            <CardCompVue />
          </v-col>

          <v-col cols="6" md="3">
            <CardCompVue />
          </v-col>

        </v-row>

      </v-container>
    </v-main>

  </v-app>
</template>
  
<script>
import CardCompVue from '@/components/CardComp.vue'

export default {
  name: 'DashView',

  components: {
    CardCompVue,
  },

  mounted() {
    this.drawerControll = true
  },

  data() {
    return {
      drawerControll: true,
      theme: 'dark'
    }
  },
}
</script>
  