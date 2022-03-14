<template>
  <div>
    <div style="border: 1px solid #e0dbdb">
      <v-list dense>
        <div class="text-h6 text-center">Documentos</div>
        <v-divider></v-divider>
        <div
          v-if="listadoDocumentos.length == 0"
          class="text-subtitle text-center mt-5"
        >
          Aun no se ha cargado ningun documento
        </div>
        <v-list-item v-for="(item, i) in listadoDocumentos" :key="i">
          <v-list-item-content>
            <a
              :style="{ color: $vuetify.theme.themes['light'].accent }"
              :href="item.url"
              target="_blank"
            >
              <v-list-item-title
                v-text="item.nombre_documento"
              ></v-list-item-title>
            </a>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon
              @click="deleteFiles(item.url)"
              style="cursor: pointer"
              color="red"
              >mdi-close</v-icon
            >
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </div>
    <v-btn
      class="d-block mx-auto mt-2"
      color="auxiliar"
      @click="dialog = !dialog"
      >Subir Archivos <v-icon right> mdi-cloud-upload </v-icon></v-btn
    >
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Cargar Documentos</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  color="accent"
                  label="Nombre del Documento"
                  v-model="nombreDocumentos"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <form ref="file-input">
                  <input
                    class="d-block mx-auto"
                    type="file"
                    ref="file"
                    name="archivos"
                    id="archivos"
                  />
                </form>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="cancelUpload()"> Cerrar </v-btn>
          <v-btn
            color="accent"
            text
            :disabled="nombreDocumentos.length == 0"
            :loading="isUploading"
            @click="uploadFile()"
          >
            Subir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import firebaseInstance from "@/plugins/firebase";

export default {
  data: () => ({
    dialog: false,
    isUploading: false,
    nombreDocumentos: "",
    listadoDocumentos: [],
  }),
  methods: {
    cancelUpload() {
      this.dialog = false;
      this.nombreDocumentos = "";
      this.$refs["file-input"].reset();
      this.isUploading = false;
    },
    uploadFile() {
      this.isUploading = true;
      const image = this.$refs.file.files[0];

      if (image.type != "image/jpeg" && image.type != "application/pdf") {
        alert("El formato de los archivos debe ser JPG o PDF");
        this.cancelUpload();
        return;
      }

      firebaseInstance
        .storage()
        .ref(`documentos/${this.nombreDocumentos}`)
        .put(image)
        .then((response) => {
          response.ref.getDownloadURL().then((downloadURL) => {
            this.isUploading = false;
            this.listadoDocumentos.push({
              nombre_documento: this.nombreDocumentos,
              url: downloadURL,
            });
            this.cancelUpload();
          });
        })
        .catch((error) => {
          this.isUploading = true;
          console.log(error);
        });
    },
    deleteFiles(url) {
      this.listadoDocumentos = this.listadoDocumentos.filter((item) => {
        return item["url"] != url;
      });
      const archivo = firebaseInstance.storage().refFromURL(url);
      archivo
        .delete()
        .then(function () {
          alert("Archivo Eliminado");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  watch:{
    listadoDocumentos:{
      handler(newValue) {
        if(newValue.length>0){
          this.$emit('updateHayDocumentos', true)
        }else{
          this.$emit('updateHayDocumentos', false)
        }
      },
      deep: true
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
