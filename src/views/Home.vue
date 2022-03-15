<template>
  <div class="home fill-height">
     <bienvenida />
  </div>
</template>

<script>
import Bienvenida from '@/components/bienvenida/bienvenida';

export default {
  name: 'Home',
  components: {
    Bienvenida
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/')
    }
  }
}
</script>
