<template>
  <div class="layout-padding">
    <div class="flex wrap gutter row q-pa-sm">

      <div class="width-1of3 sm-auto q-pa-sm">
       <cardTotal
          title="Rio Grande do Sul"
          subtitle="Total de Casos no"
          background-color="bg-red-9"
          icon-name="people"
          :total="totalCasosRS">
        </cardTotal>
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
      </div> -->
      

    </div>
  </div>
</template>

<script>
import cardTotal from '../components/cardTotal.vue'

export default {
  name: 'Sites',
  data () {
      return {
        totalCasosRS: 77,
        totalCasosBrasil: 2000,
        totalComments: 0,
        totalTodos: 0
      }
    },
  components: {
      cardTotal
    }
}
</script>
