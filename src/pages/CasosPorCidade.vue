<template>
  <q-page class="q-pa-lg">
    <div class="q-pa-md">
      <q-table
        :dense="$q.screen.lt.md"
        title="Casos por Cidade"
        :data="data"
        :columns="columns"
        row-key="cidade"
        :filter="filter"
        rows-per-page-label="Registros por página"
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
    <div class="q-pa-md">
      <p>fontes </p>
      <p v-bind:key="index" v-for="(item, index) in fonte()">
         {{index}} - {{item}}
        </p>
    </div>    
  </q-page>
</template>

<script>
import casosrs from "../assets/casos-rs.json";
import { date } from "quasar";

export default {
  name: "Casos",
  methods: {
    loadDate: function(value) {
      var d = Date.parse(value);
      return d;
    },
    fonte: () =>  casosrs.casos.map( x => x.fonte).filter( (value, index, self) =>  self.indexOf(value) === index)
  },
  data() {
    return {
      filter: "",
      columns: [
        {
          name: "cidade",
          label: "Cidade",
          align: "left",
          field: row => row.cidade,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "qtd",
          align: "center",
          label: "Nº casos",
          field: "qtd",
          sortable: true
        },
        {
          name: "data",
          align: "center",
          label: "Último caso",
          field: "lastData",
          sortable: true
        }
      ]
    };
  },
  computed: {
    data() {
      var cidades = [];
      casosrs.casos.forEach(city => {
        var found = cidades.find(x => x.cidade === city.cidade);
        if (!found)
          cidades = [
            ...cidades,
            {
              cidade: city.cidade,
              qtd: 1,
              lastData: city.data,
              lastId: city.id
            }
          ];
        else {
          found.qtd += 1;
          if (found.id < city.id) {
            found.lastData = city.data;
            found.lastId = city.id;
          }
        }
      });

      var cidades2 = cidades.sort(function(a, b) {
        if (a.qtd > b.qtd) {
          return -1;
        }
        if (a.qtd < b.qtd) {
          return 1;
        }
        return 0;
      });

      return cidades2;
    }
  }
};
</script>
