<template>
  <v-form>
    <v-row>
      <v-col cols="4">
        <v-text-field label="Nombre del Prospecto" outlined></v-text-field>
        <v-text-field label="Primer Apellido" outlined></v-text-field>
        <v-text-field label="Segundo Apellido" outlined></v-text-field>
        <v-text-field label="Teléfono" outlined></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field label="Calle" outlined></v-text-field>
        <v-text-field label="Número" outlined></v-text-field>
        <v-text-field label="Colonia" outlined></v-text-field>
        <v-text-field label="Código Postal" outlined></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field label="R.F.C" outlined></v-text-field>
        <formulario-archivos />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="d-flex justify-center">
        <v-btn class="ma-2">Cancelar</v-btn>
        <v-btn class="ma-2" color="accent">Guardar Prospecto</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import formularioArchivos from "./formularioArchivos.vue";
export default {
  components: { formularioArchivos },
};
</script>

<style></style>
