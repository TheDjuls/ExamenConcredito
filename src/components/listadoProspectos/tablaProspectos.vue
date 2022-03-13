<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-data-table
          color="accent"
          :items-per-page="8"
          :headers="headers"
          :items="prospectos"
          :single-expand="true"
          :expanded.sync="expanded"
          item-key="name"
          show-expand
          class="elevation-1"
          :footer-props="{ disableItemsPerPage: true }"
        >
          <template v-slot:[`item.options`]="{ item }">
            <v-btn color="accent" :id="item.name" :to="{name:'evaluacionProspectos'}"> Evaluar <v-icon right > mdi-account </v-icon></v-btn>
          </template>
          <template v-slot:expanded-item="{ item }">
            <td colspan="1">
              <div>
                <div class="text-subtitle accent--text">Nombre</div>
                {{ item.name }}
              </div>
              <div>
                <div class="text-subtitle accent--text">Apellido Paterno</div>
                {{ item.name }}
              </div>
              <div>
                <div class="text-subtitle accent--text">Apellido Materno</div>
                {{ item.name }}
              </div>
            </td>
            <td colspan="1">
              <div>
                <div class="text-subtitle accent--text">Calle</div>
                {{ item.name }}
              </div>
              <div>
                <div class="text-subtitle accent--text">Número</div>
                {{ item.name }}
              </div>
              <div>
                <div class="text-subtitle accent--text">Colonia</div>
                {{ item.name }}
              </div>
            </td>
            <td colspan="1">
               <div>
                <div class="text-subtitle accent--text">Código Postal</div>
                {{ item.name }}
              </div>
              <div>
                <div class="text-subtitle accent--text">Teléfono</div>
                {{ item.name }}
              </div>
              <div>
                <div class="text-subtitle accent--text">R.F.C</div>
                {{ item.name }}
              </div>
            </td>
            <td colspan="2">
              <div class="text-subtitle accent--text">Documentos</div>
              <ul>
                <li>Acta de Nacimiento</li>
              </ul>
            </td>
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