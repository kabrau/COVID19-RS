<template>
        <q-page class="q-pa-md">
        <p>
          <q-table
            class="my-sticky-column-table"
            title="Treats"
            :data="data"
            :columns="columns"
            row-key="sintoma"
            :rows-per-page-options="[0]"
            :pagination.sync="pagination"
          >
            <template v-slot:body-cell="props">
              <q-td :props="props">
                <div v-if="props.col.name=='sintoma'">{{props.value}}</div>
                <q-badge v-if="props.row[props.col.name]==4" color="#ff0000">{{ props.value }}</q-badge>
                <q-badge v-if="props.row[props.col.name]==3" color="green">{{ props.value }}</q-badge>
                <q-badge v-if="props.row[props.col.name]==2" color="blue">{{ props.value }}</q-badge>
                <q-badge v-if="props.row[props.col.name]==1" color="black">{{ props.value }}</q-badge>
              </q-td>
            </template>
          </q-table>
        </p>      
        <p>
         fonte: {{fonte}}
        </p>
    </q-page>

</template>

<script>
import sintomas from "../assets/sintomas.json";

var nivel = [];
nivel[4] = "Bem comum";
nivel[3] = "Às vezes";
nivel[2] = "Leve";
nivel[1] = "Muito raro";

export default {
  name: "Sintomas",
  computed: {
    fonte: () => sintomas.fonte
  },
  data() {
    return {
      pagination: {
        rowsPerPage: 10
      },
      columns: [
        {
          name: "sintoma",
          required: true,
          label: "Sintomas",
          align: "left",
          field: "sintoma",
          classes: "bg-grey-2 ellipsis",
          sortable: true
        },
        {
          name: "covid19",
          label: "Coronavírus",
          align: "left",
          field: row => row.covid19,
          format: val => `${nivel[val]}`,
          sortable: true
        },
        {
          name: "gripe",
          label: "Gripe",
          align: "left",
          field: row => row.gripe,
          format: val => `${nivel[val]}`,
          sortable: true
        },
        {
          name: "resfriado",
          label: "Resfriado",
          align: "left",
          field: row => row.resfriado,
          format: val => `${nivel[val]}`,
          sortable: true
        }
      ],
      data: sintomas.sintomas.sort(function(a, b) {
        if (a.covid19 > b.covid19) return -1;
        if (a.covid19 < b.covid19) return 1;
        return 0;
      })
    };
  }
};
</script>
