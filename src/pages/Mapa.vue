<template>
  <q-page class="q-pa-lg">
    <h5>Mapa 1</h5>



  </q-page>
</template>

<script>


export default {
  name: "Mapa",
  data() {
    return {
      center: { lat: 10.0, lng: 10.0 },
      markers: [
        {
          position: { lat: 10.0, lng: 10.0 }
        },
        {
          position: { lat: 11.0, lng: 11.0 }
        }
      ]
    };
  }
};
</script>
