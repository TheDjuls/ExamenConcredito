import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary:  "#FFFFFF", // #E53935
            secondary: "#07D164", // #FFCDD2
            accent: "#1faf60", // #3F51B5
            auxiliar: "#F7EE8F", // #3F51B5
          },
        },
      }
});
