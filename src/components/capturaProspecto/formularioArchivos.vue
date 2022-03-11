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
            <v-icon style="cursor:pointer" color="red" v-text="item.icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
    </v-list>
  </div>
  <div style="width:90%;margin:auto;margin-top:10px">
        <input class="d-block mx-auto" type="file" name="" id="">
    </div>
  </div>

</template>

<script>
export default {
  data: () => ({
    items: [
      { text: "Acta de Nacimiento", icon: "mdi-close" },
      { text: "Curp", icon: "mdi-close" },
      { text: "RFC", icon: "mdi-close" },
    ],
  }),
};
</script>

<style></style>
