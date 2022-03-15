<template>
  <v-row id="fondoPrincipal" class="fill-height">
        <v-col cols="12" class="d-flex justify-center align-center">
          <h1 class="white--text mx-2" id="bienvenida">Bienvenido , Para comenzar despliegue el menú de la izquierda</h1>
        </v-col>
      </v-row>
</template>

<script>
export default {
    name:"Bienvenida"
}
</script>

<style>

 #fondoPrincipal{
    background-image: url('../../assets/images/login3.jpg');
    background-repeat: no-repeat;
    background-position: right;
    background-size: 100% 100%;
  }
  #bienvenida{
    text-shadow: 2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black, 2px 2px black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black;
  }

</style>