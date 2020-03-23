<template>
  <q-page class="q-pa-lg">
    <div class="q-pa-md">
      <q-table
        :dense="$q.screen.lt.md"
        title="Casos"
        :data="data"
        :columns="columns"
        row-key="name"
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
      var d = Date.parse(value)
      return d
    },
    fonte: () =>  casosrs.casos.map( x => x.fonte).filter( (value, index, self) =>  self.indexOf(value) === index)
  },
  data() {
    return {
      filter: "",
      columns: [
        {
          name: "id",
          required: true,
          label: "Nº",
          align: "left",
          field: "id",
          sortable: true
        },
        {
          name: "cidade",
          label: "Cidade",
          align: "left",
          field: row => row.cidade,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "idade",
          align: "center",
          label: "Idade",
          field: "idade",
          sortable: true
        },
        {
          name: "sexo",
          align: "center",
          label: "sexo",
          field: "sexo",
          sortable: true
        },
        {
          name: "data",
          align: "center",
          label: "Data",
          field: "data",
          //format: val => `${date.formatDate(this.loadDate(val), "D/M/YYYY HH:mm:ss")}`,
          sortable: true
        }
      ],
      data: casosrs.casos.sort(function(a, b) {
        if (a.id > b.id) {
          return -1;
        }
        if (a.id < b.id) {
          return 1;
        }
        return 0;
      })
    };
  }
};
</script>
