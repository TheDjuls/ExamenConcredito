<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <v-form class="mt-5">
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
            rules="required|max:10"
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
            rules="required|max:191"
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
            rules="required|max:191"
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
            rules="required|max:13"
          >
          <v-text-field color="accent" v-model="prospecto.rfc"
              :error-messages="errors" label="R.F.C" outlined></v-text-field>
           </validation-provider>
          <formulario-archivos />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-center">
            <v-btn class="ma-2">Cancelar</v-btn>
            <v-btn class="ma-2" color="accent" type="submit" :disabled="invalid"
              >Guardar Prospecto</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-form>
  </validation-observer>
</template>

<script>
import { required, digits, max, regex } from "vee-validate/dist/rules";
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
  message: "{_field_} may not be greater than {length} characters",
});

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

export default {
  components: { ValidationProvider, ValidationObserver, formularioArchivos },
  data: () => ({
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
  }),
};
</script>

<style></style>
