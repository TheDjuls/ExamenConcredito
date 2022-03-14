<template>
  <div>
    <v-row>
      <v-col cols="4">
        <v-text-field
          color="accent"
          label="Nombre del Prospecto"
          outlined
          v-model="prospecto.nombre"
          readonly
        ></v-text-field>
        <v-text-field
          color="accent"
          label="Primer Apellido"
          v-model="prospecto.ap_paterno"
          outlined
          readonly
        ></v-text-field>
        <v-text-field
          color="accent"
          label="Segundo Apellido"
          outlined
          v-model="prospecto.ap_materno"
          readonly
        ></v-text-field>
        <v-text-field
          color="accent"
          label="Teléfono"
          outlined
          v-model="prospecto.telefono"
          readonly
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          color="accent"
          label="Calle"
          outlined
          v-model="prospecto.calle"
          readonly
        ></v-text-field>
        <v-text-field
          color="accent"
          label="Número"
          outlined
          v-model="prospecto.numero"
          readonly
        ></v-text-field>
        <v-text-field
          color="accent"
          label="Colonia"
          outlined
          v-model="prospecto.colonia"
          readonly
        ></v-text-field>
        <v-text-field
          color="accent"
          label="Código Postal"
          outlined
          v-model="prospecto.codigo_postal"
          readonly
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          color="accent"
          label="R.F.C"
          outlined
          v-model="prospecto.rfc"
          readonly
        ></v-text-field>
        <div style="border: 1px solid #e0dbdb">
          <v-list dense>
            <div class="text-h6 text-center">Documentos</div>
            <v-divider></v-divider>
            <v-list-item v-for="(item, i) in prospecto.documentos" :key="i">
              <v-list-item-content>
                <v-list-item-title
                  v-text="item.nombre_documento"
                ></v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <a
                  :style="{ color: $vuetify.theme.themes['light'].accent }"
                  :href="item.url"
                  target="_blank"
                >
                  <v-icon small style="cursor: pointer" color="accent"
                    >mdi-open-in-new</v-icon
                  >
                </a>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="mt-2">
      <v-col cols="4">
        <v-radio-group v-model="prospecto.estatusProspectoId" row>
          <v-radio color="accent" label="Rechazar" value="2"></v-radio>
          <v-radio
            color="accent"
            label="Autorizar"
            value="1"
            @click="observaciones = ''"
          ></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="4">
        <v-textarea
          outlined
          color="accent"
          v-model="observaciones"
          label="Observaciones"
          :disabled="prospecto.estatusProspectoId == 1"
        ></v-textarea>
      </v-col>
      <v-col cols="4"
        ><v-btn
          class="d-block mx-auto"
          color="accent"
          :disabled="disabledEvaluarBtn"
          @click="evaluarProspecto()"
          >Evaluar</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    prospecto: { estatusProspectoId: null },
    observaciones: "",
    items: [
      { text: "Acta de Nacimiento", icon: "mdi-close" },
      { text: "Curp", icon: "mdi-close" },
      { text: "RFC", icon: "mdi-close" },
    ],
  }),
  methods: {
    async getProspecto() {
      this.axios
        .get(`prospectos/${this.$route.params.idProspecto}`)
        .then((response) => {
          if (response.data) {
            const prospecto = response.data;
            this.prospecto = prospecto;
            this.prospecto.estatusProspectoId =
              prospecto.estatusProspectoId.toString();
            this.observaciones = prospecto.observaciones;
          }
        });
    },
    evaluarProspecto() {
      this.axios
        .put("prospectos", {
          estatusProspectoId: Number(this.prospecto.estatusProspectoId),
          observaciones: this.observaciones,
          id: Number(this.$route.params.idProspecto),
        })
        .then((response) => {
          if (response.status == 200) {
            alert("Prospecto Evaluado Correctamente");
            this.$router.push({ name: "listadoProspectos" });
          } else {
            alert("Ha ocurrido un error");
          }
        });
    },
  },
  computed: {
    disabledEvaluarBtn() {
      let deshabilitar = true;
      if (this.prospecto.estatusProspectoId == 1) {
        deshabilitar = false;
      } else if (
        this.prospecto.estatusProspectoId == 2 &&
        this.observaciones.length > 0
      ) {
        deshabilitar = false;
      }
      return deshabilitar;
    },
  },
  mounted() {
    this.getProspecto();
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
