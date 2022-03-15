<template>
  <v-container>
    <h2 class="text-center primary--text">ANALÍTICA CONTRA EL DELITO 4.0</h2>
    <v-col cols="12">
      <div id="contenedor">
        <h1 class="ml-2">Iniciar Sesión</h1>
        <blockquote class="ml-2">Introduzca sus credenciales</blockquote>
        <validation-observer ref="observer" v-slot="{ invalid }">
          <v-form class="mt-1" @submit.prevent="submit">
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Usuario"
                    rules="required|max:10"
                  >
                    <v-text-field
                      v-model="usuario"
                      color="accent"
                      outlined
                      label="Usuario"
                      prepend-inner-icon="mdi-account"
                      :error-messages="errors"
                    ></v-text-field>
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="Contraseña"
                    rules="required|max:16"
                  >
                    <v-text-field
                      v-model="contrasenia"
                      outlined
                      color="accent"
                      prepend-inner-icon="mdi-lock"
                      :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPass ? 'text' : 'password'"
                      label="Password"
                      :error-messages="errors"
                      @click:append="showPass = !showPass"
                    ></v-text-field>
                  </validation-provider>

                  <p class="text-right">
                    <a href="">no recuerda su contraseña?</a>
                  </p>

                  <v-btn
                    block
                    color="accent"
                    type="submit"
                    elevation="2"
                    :disabled="invalid"
                    >Entrar</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </validation-observer>
      </div>
      <v-img
        src="../../assets/images/imagen.svg"
        class="mx-auto mt-5"
        width="40%"
      ></v-img>
    </v-col>
  </v-container>
</template>

<script>
//se importa libreria de cifrado
import sha1 from "crypto-js/sha1";
//se importan las librerias de validaciones
import { required, email, max } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "El campo {_field_} no puede estar vacio",
});

extend("max", {
  ...max,
  message: "El campo {_field_} no puede tener mas de {length} caracteres",
});

extend("email", {
  ...email,
  message: "el correo debe ser valido",
});

export default {
  name: "loginForm",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    showPass: false,
    password: "Password",
    usuario: "",
    contrasenia: "",
  }),
  methods: {
    submit() {
      this.login();
    },
    login() {
      //se crea el pyaload de login y se encripta el password
      console.log(sha1(this.contrasenia).toString());
      let payload = {
        nombre_usuario: this.usuario,
        password: sha1(this.contrasenia).toString(),
      };

      //se llama al api
      this.axios.post("login", payload).then((response) => {
        const data = response.data;
        if (data.code) {
          alert(data.msg);
        } else {
          //logueado correctamente
          this.$session.start();
          this.$session.set("user_id", data[0].id);
          this.$session.set(
            "nombre",
            `${data[0].nombre} ${data[0].ap_paterno} ${data[0].ap_materno}`
          );
          //se rederige a la pantalla de inicio
          this.$router.push({ name: "Home" });
        }
      });
    },
    clearForm() {
      this.usuario = "";
      this.contrasenia = "";
    },
  },
};
</script>

<style>
#contenedor {
  margin-top: 10vh;
  margin-left: 2vw;
  width: 90%;
}
</style>
