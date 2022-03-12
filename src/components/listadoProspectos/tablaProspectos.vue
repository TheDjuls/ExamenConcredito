<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-data-table
          color="accent"
          items-per-page="8"
          :headers="headers"
          :items="prospectos"
          :single-expand="true"
          :expanded.sync="expanded"
          item-key="name"
          show-expand
          class="elevation-1"
          :footer-props="{ disableItemsPerPage: true }"
        >
          <template v-slot:expanded-item="{ item }">
            <tr>
              <td>{{item}}</td>
            </tr>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    expanded: [],
    singleExpand: false,
    headers: [
      {
        text: "Nombre(s)",
        align: "center",
        value: "name",
      },
      {
        text: "Apellido Paterno",
        align: "center",
        value: "name",
      },
      {
        text: "Apellido Materno",
        align: "center",
        value: "name",
      },
      { text: "Opciones", align: "center", value: "options" },
      { text: "Detalles", align: "center", value: "data-table-expand" },
    ],
    prospectos: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
      },
    ],
  }),
};
</script>

<style>
</style>