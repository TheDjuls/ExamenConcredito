<template>
  <v-app>
    <v-app-bar v-if="$route.name!='Login'" app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <v-img
          style="margin: 5px, auto"
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="250"
          max-width="250"
          src="@/assets/images/logo.png"
        ></v-img>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="text-subtitle">Bienvenido <span class="accent--text">{{$session.get("nombre")}}</span></div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 accent--text">
            Gestor de Prospectos
          </v-list-item-title>
          <v-list-item-subtitle> Menú </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item-group active-class="secondary--text text--accent-4">
          <v-list-item :to="{name:'Home'}">
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'listadoProspectos' }">
            <v-list-item-title>Listado de Prospectos</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'capturaProspecto' }">
            <v-list-item-title>Captura de Prospectos</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>
      <v-list-item>
        <v-btn class="mx-auto" color="secondary" @click="logout()">Salir</v-btn>
      </v-list-item>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
  }),
  methods:{
    logout(){
      this.$session.destroy()
      this.$router.push({name:'Login'})
    }
  }
};
</script>

