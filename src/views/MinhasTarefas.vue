<template>
  <v-main>
    <v-container fluid class="mt-5">
      <v-row>
        <v-col cols="8" md="7" sm="12">
          <h1>Minhas tarefas</h1>
        </v-col>
        <v-col v-if="admin" md="2" sm="4">
          <CadastrarProjeto />
        </v-col>
        <v-col v-if="admin" md="2" sm="4">
          <CadastrarTarefa />
        </v-col>
      </v-row>
      <v-row class="mt-10" justify="center">
        <ListaTarefas :id-usuario="1" />
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  import CadastrarProjeto from '../components/tarefas/CadastrarProjeto.vue'
  import CadastrarTarefa from '../components/tarefas/CadastrarTarefa.vue'
  import ListaTarefas from '../components/tarefas/ListaTarefas.vue'

  export default {
    components: {
      ListaTarefas,
      CadastrarTarefa,
      CadastrarProjeto
    },
    data () {
      return {
        admin: JSON.parse(localStorage.getItem('usuario')).admin
      }
    }

  }
</script>

<style>
</style>
