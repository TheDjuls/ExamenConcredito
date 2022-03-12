<template>
  <div>
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
    <v-btn class="d-block mx-auto mt-2" color="auxiliar" @click="dialog=!dialog"
      >Subir Archivos
      <v-icon right > mdi-cloud-upload </v-icon></v-btn
    >
     <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Cargar Documentos</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
           <v-row>
             <v-col cols="12">
               <v-text-field color="accent" label="Nombre del Documento" outlined></v-text-field>
             </v-col>
           </v-row>
           <v-row>
             <v-col cols="12">
               <input class="d-block mx-auto" type="file" name="" id="">
             </v-col>
           </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
          <v-btn
            color="accent"
            text
            @click="dialog = false"
          >
            Subir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog:false,
    items: [
      { text: "Acta de Nacimiento", icon: "mdi-close" },
      { text: "Curp", icon: "mdi-close" },
      { text: "RFC", icon: "mdi-close" },
    ],
  }),
};
</script>

<style></style>
