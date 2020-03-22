<template>
  <q-layout view="lHh Lpr lFf">
    <q-header >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        
      </q-toolbar>
      <div class="q-px-lg q-px-xl q-mb-md">
        <div class="text-h3">COVID-19 no Rio Grande do Sul - BRASIL</div>
        <div class="text-subtitle">Última atualização {{lastUpdate}}</div>
      </div>
      <q-img 
      src="statics/pandemic.jpg"
      class="header-image absolute-top"
      />
    </q-header>

<q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list v-for="(menuItem, index) in menuList" :key="index">

            <q-item :to="menuItem.to" 
                  clickable 
                  exact=""
                  :active="menuItem.label === 'Outbox'" 
                  v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>

           <q-separator v-if="menuItem.separator" />

          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <keep-alive>
      <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import { date } from 'quasar'
import casosrs from "../assets/casos-rs.json";

const menuList = [
  {
    icon: 'equalizer',
    label: 'Casos no estado',
    separator: false,
    to: '/'
  },
  {
    icon: 'location_city',
    label: 'Casos por Cidade',
    separator: true,
    to: '/porCidade'
  },
  //{
    //icon: 'map',
    //label: 'Mapa',
    //separator: true,
    //to: '/mapa'
  //},
  {
    icon: 'visibility',
    label: 'Sintomas',
    separator: false,
    to: '/sintomas'
  },
  //{
  //  icon: 'verified_user',
  //  label: 'Proteção',
  //  separator: true,
  //  to: '/protecao'
  //},
  {
    icon: 'web',
    label: 'Outros sites',
    separator: true,
    to: '/sites'
  },
  {
    icon: 'star',
    label: 'Créditos',
    separator: false,
    to: '/creditos'
  }
]

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      menuList
    }
  },
  computed: {
    todaysDate() {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'D/M/YYYY HH:mm:ss')
    },
    lastUpdate() {
      var id = 0
      var data = ''
      casosrs.casos.forEach(c => {
        if (c.id > id){
          id = c.id
          data = c.data
        }
      })
      return data
    }
  }
}
</script>


<style lang="scss">
.header-image {
height: 100%;
z-index: -1;
opacity: 0.3;
filter: grayscale(100%);
}
</style>