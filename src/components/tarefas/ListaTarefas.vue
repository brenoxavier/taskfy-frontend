<template>
  <v-card width="90%">
    <v-card-text>
      <Tarefa v-for="i in 10" :key="i" class="my-3" />
    </v-card-text>
  </v-card>
</template>

<script>
  import Tarefa from './Tarefa.vue'
  export default {
    components: {
      Tarefa
    },
    props: ['idUsuario'],

    data () {
      return {
        listaTarefas: []
      }
    },
    async mounted () {
      // TODO: Implementar integração com clockify/banco (buscar tarefas)
    }
  }
</script>

<style>

</style>
