<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="text-h4 text-center accent--text">
          LISTADO DE PROSPECTOS
        </div>
        <div class="text-h5 text-center">
          En esta pantalla el promotor podrá visualizar a sus prospectos
          capturados
        </div>
      </v-col>
    </v-row>
    <tabla-prospectos />
  </v-container>
</template>

<script>
import tablaProspectos from '../components/listadoProspectos/tablaProspectos.vue';
export default {
  components: { tablaProspectos },
  name: "listadoProspecto",
};
</script>

<style>
</style>