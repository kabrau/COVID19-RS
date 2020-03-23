<template>
  <div class="layout-padding">
    <div class="flex wrap gutter row q-pa-sm">
      <div class="width-1of3 sm-auto q-pa-sm">
        <cardTotal
          title="Rio Grande do Sul"
          subtitle="Total de Casos no"
          background-color="bg-red-9"
          icon-name="people"
          :total="qtdTotal"
        ></cardTotal>
      </div>

      <!-- <div class="width-1of3 sm-auto q-pa-sm">
       <cardTotal
          title="Brasil"
          subtitle="Total de Casos no"
          background-color="bg-green-9"
          icon-name="ion-flag"
          :total="totalCasosBrasil">
        </cardTotal>
      </div>

      <div class="width-1of3 sm-auto q-pa-sm">
       <cardTotal
          title="Mundo"
          subtitle="Total de Casos no"
          background-color="bg-blue-9"
          icon-name="ion-globe"
          :total="totalCasosBrasil">
        </cardTotal>
      </div>-->
    </div>
  </div>
</template>

<script>
import cardTotal from "../components/cardTotal.vue";
import casosrs from "../assets/casos-rs.json";

export default {
  name: "Sites",
  data() {
    return {
      totalCasosBrasil: 2000,
      totalComments: 0,
      totalTodos: 0
    };
  },
  components: {
    cardTotal
  },
  computed: {
    qtdTotal() {
      var id = 0;     
      casosrs.casos.forEach(c => {
        if (c.id > id) {
          id = c.id;          
        }
      });
      return id;
    }
  }
};
</script>
