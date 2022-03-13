<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="text-h4 text-center accent--text">
          Evaluación de Prospecto
        </div>
        <div class="text-h5 text-center">
          En esta pantalla se podrá visualizar toda la información capturada del
          prospecto y la opción Autorizar o Rechazar
        </div>
      </v-col>
    </v-row>
    <visor-prospectos/>
  </v-container>
</template>

<script>
import visorProspectos from '../components/evaluacionProspectos/visorProspectos.vue';
export default {
  components: { visorProspectos }};
</script>

<style>
</style>