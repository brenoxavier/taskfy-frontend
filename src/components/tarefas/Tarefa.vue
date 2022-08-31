<template>
  <v-card
      :class="ativo ? 'ativo' : ''"
      color="#fafafa">
    <v-card-text>
      <v-row>
        <v-col md="5" sm="12" class="">
          <v-text-field label="Tarefa" placeholder="Insira uma descrição curta da sua atividade atual" dense />
        </v-col>
        <v-col md="2" sm="6">
          <v-select :items="tasks" label="Task" dense />
        </v-col>
        <v-col md="2" sm="6">
          <v-select :items="tags" label="Tags" dense multiple clearable />
        </v-col>
        <v-col md="1" sm="6">
          <v-btn
              @click="iniciarTarefa"
              text color="success">
            {{ ativo ? timer : 'Iniciar' }}
          </v-btn>
        </v-col>
        <v-col lg="1" sm="6">
          <v-btn
              @click="finalizarTarefa"
              text color="error">
            {{ ativo ? 'Parar' : 'Finalizar' }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    props: {
      tarefa: Object
    },
    data () {
      return {
        ativo: false
      }
    },
    computed: {
      tasks () {
        return ['Task 1', 'Task 2', 'Task 3']
      },
      tags () {
        return ['Desenvolvimento web', 'Desenvolvimento mobile', 'Sustentação']
      },
      timer () {
        return '00:00:00'
      }
    },
    methods: {
      iniciarTarefa () {
        // TODO: Implementar integração com clockify
        this.ativo = true
      },
      finalizarTarefa () {
        // TODO: Implementar integração com clockify
        this.ativo = false
      }
    }
  }
</script>

<style scoped>
  .ativo {
    background-color: rgb(191, 224, 253);
  }
</style>
