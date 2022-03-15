<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="text-h4 text-center accent--text">CAPTURA DE PROSPECTO</div>
        <div class="text-h5 text-center">
          En esta pantalla el promotor podrá capturar la información del
          prospecto, así como los documentos necesarios para su expediente
        </div>
        <formulario-prospecto ref="formulario" class="my-5" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import formularioProspecto from "../components/capturaProspecto/formularioProspecto.vue";
export default {
  components: { formularioProspecto },
  name: "capturaProspecto",
  beforeRouteLeave(to, from, next) {
    if (this.$refs.formulario.seGuardo == false) {
      const answer = window.confirm(
        "¿En verdad desea salir? Los datos no guardados se perderan "
      );
      if (answer) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
