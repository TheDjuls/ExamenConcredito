<template>
  <div>
    <v-row>
      <v-col cols="4">
        <v-text-field
          color="accent"
          label="Nombre del Prospecto"
          outlined
        ></v-text-field>
        <v-text-field
          color="accent"
          label="Primer Apellido"
          outlined
        ></v-text-field>
        <v-text-field
          color="accent"
          label="Segundo Apellido"
          outlined
        ></v-text-field>
        <v-text-field color="accent" label="Teléfono" outlined></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field color="accent" label="Calle" outlined></v-text-field>
        <v-text-field color="accent" label="Número" outlined></v-text-field>
        <v-text-field color="accent" label="Colonia" outlined></v-text-field>
        <v-text-field
          color="accent"
          label="Código Postal"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field color="accent" label="R.F.C" outlined></v-text-field>
        <div style="border: 1px solid #e0dbdb">
          <v-list dense>
            <div class="text-h6 text-center">Documentos</div>
            <v-divider></v-divider>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon
                  style="cursor: pointer"
                  color="red"
                  v-text="item.icon"
                ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="mt-2">
      <v-col cols="4">
        <v-radio-group v-model="row" row>
          <v-radio color="accent" label="Rechazar" value="1"></v-radio>
          <v-radio color="accent" label="Autorizar" value="2" @click="observaciones=''"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="4">
        <v-textarea outlined color="accent" v-model="observaciones" label="Observaciones" :disabled="row==2"></v-textarea>
      </v-col>
      <v-col cols="4"
        ><v-btn class="d-block mx-auto" color="accent">Evaluar</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    row: null,
    observaciones:null,
    items: [
      { text: "Acta de Nacimiento", icon: "mdi-close" },
      { text: "Curp", icon: "mdi-close" },
      { text: "RFC", icon: "mdi-close" },
    ],
  }),
};
</script>

<style>
</style>