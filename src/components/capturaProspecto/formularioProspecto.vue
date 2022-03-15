<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <v-form class="mt-5" @submit.prevent="crearProspecto()">
      <v-row>
        <v-col cols="4">
          <validation-provider
            v-slot="{ errors }"
            name="Nombre del Prospecto"
            rules="required|max:191"
          >
            <v-text-field
              color="accent"
              label="Nombre del Prospecto"
              :error-messages="errors"
              v-model="prospecto.nombre"
              outlined
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Primer Apellido"
            rules="required|max:191"
          >
            <v-text-field
              color="accent"
              label="Primer Apellido"
              :error-messages="errors"
              v-model="prospecto.ap_paterno"
              outlined
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Segundo Apellido"
            rules="max:191"
          >
            <v-text-field
              color="accent"
              label="Segundo Apellido"
              :error-messages="errors"
              v-model="prospecto.ap_materno"
              outlined
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Teléfono"
            rules="required|min:6|max:10|numeric"
          >
            <v-text-field
              color="accent"
              label="Teléfono"
              v-model="prospecto.telefono"
              :error-messages="errors"
              outlined
            ></v-text-field>
          </validation-provider>
        </v-col>
        <v-col cols="4">
          <validation-provider
            v-slot="{ errors }"
            name="Calle"
            rules="required|max:191"
          >
            <v-text-field
              color="accent"
              label="Calle"
              v-model="prospecto.calle"
              :error-messages="errors"
              outlined
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Número"
            rules="required|max:10"
          >
            <v-text-field
              color="accent"
              label="Número"
              v-model="prospecto.numero"
              :error-messages="errors"
              outlined
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Colonia"
            rules="required|max:191"
          >
            <v-text-field
              color="accent"
              v-model="prospecto.colonia"
              :error-messages="errors"
              label="Colonia"
              outlined
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Código Postal"
            rules="required|max:10|numeric"
          >
            <v-text-field
              color="accent"
              label="Código Postal"
              v-model="prospecto.codigo_postal"
              :error-messages="errors"
              outlined
            ></v-text-field>
          </validation-provider>
        </v-col>
        <v-col cols="4">
          <validation-provider
            v-slot="{ errors }"
            name="R.F.C"
            :rules="{
              required: true,
              max: 13,
              regex:
                /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/,
            }"
          >
            <v-text-field
              color="accent"
              v-model="prospecto.rfc"
              :error-messages="errors"
              label="R.F.C"
              outlined
            ></v-text-field>
          </validation-provider>
          <formulario-archivos
            @updateHayDocumentos="updateHayDocumentosFunc"
            ref="archivos"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-center">
            <v-btn class="ma-2" :to="{name:'Home'}">Cancelar</v-btn>
            <v-btn
              class="ma-2"
              color="accent"
              type="submit"
              :disabled="invalid || hayDocumentos == false"
              >Guardar Prospecto</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-form>
  </validation-observer>
</template>

<script>
import { required, digits, max, regex, numeric,min } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import formularioArchivos from "./formularioArchivos.vue";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} es un campo obligatorio",
});

extend("max", {
  ...max,
  message: "{_field_} no debe ser mayor a {length} caracteres",
});

extend("min", {
  ...min,
  message: "{_field_} debe tener minimo {length} caracteres",
});

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("regex", {
  ...regex,
  message: "Formáto no valido en el {_field_} ",
});

extend("numeric", {
  ...numeric,
  message: "{_field_} solo debe contener números",
});

export default {
  components: { ValidationProvider, ValidationObserver, formularioArchivos },
  data: () => ({
    hayDocumentos: false,
    prospecto: {
      nombre: "",
      ap_paterno: "",
      ap_materno: "",
      calle: "",
      numero: "",
      colonia: "",
      codigo_postal: "",
      telefono: "",
      rfc: "",
    },
    seGuardo:false
  }),
  methods: {
    updateHayDocumentosFunc(valor) {
      this.hayDocumentos = valor;
    },
    crearProspecto() {
      this.seGuardo=false
      try {
        const documentos = this.$refs.archivos.listadoDocumentos;
        this.prospecto.usuarioCapturoId = Number(this.$session.get("user_id"))
        this.axios
          .post("prospectos", this.prospecto)
          .then((response) => {
            if (response.data) {
              const prospecto = response.data;
              for (const documento of documentos) {
                this.axios
                  .post("prospectos/archivo", {
                    nombre_documento:documento.nombre_documento,
                    url:documento.url,
                    prospectoId:prospecto.id
                  })
                  .then((response) => {
                    //se guardo exitosamente
                    console.log(response)
                  })
                  .catch((error) => {
                    alert("Ha ocurrido un error intente nuevamente");
                    console.log(error);
                  });
              }
              //salio todo en orden
              alert("Prospecto guardado exitosamente")
              this.seGuardo=true;
              this.$router.push({ name: 'listadoProspectos'})
            }
          })
          .catch((error) => {
            alert("Ha ocurrido un error intente nuevamente");
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
