<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-row class="mb-2">
          <v-col cols="6"></v-col>
          <v-col cols="6">
            <v-text-field
              color="accent"
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>
        <v-data-table
          color="accent"
          :items-per-page="8"
          :headers="headers"
          :items="prospectos"
          :single-expand="true"
          :expanded.sync="expanded"
          :search="search"
          item-key="id"
          show-expand
          class="elevation-1"
          :footer-props="{ disableItemsPerPage: true }"
        >
          <template v-slot:[`item.estatus`]="{ item }">
            <v-chip
              class="ma-2"
              dark
              :color="
                item.estatusProspectoId == '0'
                  ? ''
                  : item.estatusProspectoId == '1'
                  ? 'accent'
                  : 'red'
              "
            >
              {{
                item.estatusProspectoId == "0"
                  ? "Enviado"
                  : item.estatusProspectoId == "1"
                  ? "Autorizado"
                  : "Rechazado"
              }}
            </v-chip>
          </template>
          <template v-slot:[`item.options`]="{ item }">
            <v-btn
              small
              color="accent"
              :to="{
                name: 'evaluacionProspectos',
                params: { idProspecto: item.id },
              }"
            >
              Evaluar <v-icon right> mdi-account </v-icon></v-btn
            >
          </template>
          <template v-slot:expanded-item="{ item }">
            <td colspan="1">
              <div>
                <div class="text-subtitle accent--text">Nombre</div>
                {{ item.nombre }}
              </div>
              <div>
                <div class="text-subtitle accent--text">Apellido Paterno</div>
                {{ item.ap_paterno }}
              </div>
              <div>
                <div class="text-subtitle accent--text">Apellido Materno</div>
                {{ item.ap_materno }}
              </div>
            </td>
            <td colspan="1">
              <div>
                <div class="text-subtitle accent--text">Calle</div>
                {{ item.calle }}
              </div>
              <div>
                <div class="text-subtitle accent--text">Número</div>
                {{ item.numero }}
              </div>
              <div>
                <div class="text-subtitle accent--text">Colonia</div>
                {{ item.colonia }}
              </div>
            </td>
            <td colspan="1">
              <div>
                <div class="text-subtitle accent--text">Código Postal</div>
                {{ item.codigo_postal }}
              </div>
              <div>
                <div class="text-subtitle accent--text">Teléfono</div>
                {{ item.telefono }}
              </div>
              <div>
                <div class="text-subtitle accent--text">R.F.C</div>
                {{ item.rfc }}
              </div>
            </td>
            <td colspan="1">
              <div>
                <div class="text-subtitle accent--text">Observaciones</div>
                {{ item.observaciones }}
              </div>
            </td>
            <td colspan="2">
              <div class="text-subtitle accent--text">Documentos</div>
              <ul v-if="item.documentos">
                <li v-for="documento in item.documentos" :key="documento.id">
                  <a :href="documento.url" target="_blank">
                    {{ documento.nombre_documento }}
                  </a>
                </li>
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
    search: "",
    headers: [
      {
        text: "Nombre(s)",
        align: "center",
        value: "nombre",
      },
      {
        text: "Apellido Paterno",
        align: "center",
        value: "ap_paterno",
      },
      {
        text: "Apellido Materno",
        align: "center",
        value: "ap_materno",
      },
      {
        text: "Estatus",
        align: "center",
        value: "estatus",
      },
      { text: "Opciones", align: "center", value: "options", sorteable: false },
      {
        text: "Detalles",
        align: "center",
        value: "data-table-expand",
        sorteable: false,
      },
    ],
    prospectos: [],
  }),
  methods: {
    async getAllProspectos() {
      this.axios.get("prospectos").then((response) => {
        if (response.data) {
          const prospectos = response.data;
          this.prospectos = prospectos;
        }
      });
    },
  },
  mounted() {
    this.getAllProspectos();
  },
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
</style>
