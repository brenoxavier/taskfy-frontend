<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success" v-bind="attrs" v-on="on">
        Nova tarefa
        <v-icon right>mdi-file-document-plus-outline</v-icon>
      </v-btn>
    </template>
    <v-card elevation="1">
      <v-card-title>
        <span class="text-h5">Adicionar tarefa</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="8">
            <v-text-field
                v-model="tarefa.descricao"
                label="Descrição:"
                :rules="obrigatorio" />
          </v-col>
          <v-col>
            <v-select
                v-model="tarefa.usuario"
                :items="usuarios"
                solo
                :rules="obrigatorio"
                label="Atribuir para:" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select :items="tasks" v-model="tarefa.task" label="Task" />
          </v-col>
          <v-col>
            <v-select :items="tags" v-model="tarefa.tags" label="Tags" multiple />
          </v-col>
          <v-col>
            <v-select :items="prioridades" v-model="tarefa.prioridade" label="Prioridade" />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="cancelar">
          Cancelar
        </v-btn>
        <v-btn color="blue darken-1" text @click="cadastrar">
          Cadastrar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'CadastrarTarefa',
    data () {
      return {
        dialog: false,
        tarefa: {
          descricao: '',
          usuario: '',
          prioridade: '',
          task: '',
          tags: []
        },
        obrigatorio: [v => !!v || v.length < 0 || 'Campo obrigatório']
      }
    },
    computed: {
      tasks () {
        return [
          `Sustentação Mês ${new Date().getMonth() + 1}`,
          `Demanda ${new Date().toLocaleDateString()}`,
          'Treinamento'
        ]
      },
      tags () {
        return ['Desenvolvimento web', 'Desenvolvimento mobile', 'Sustentação']
      },
      prioridades () {
        return ['Alta', 'Média', 'Baixa']
      },
      usuarios () {
        return ['Alberto', 'Breno']
      }
    },
    methods: {
      async cadastrar () {
        try {
          // TODO: Implementar integração com clockify (cadastrar tarefa)
        } catch (err) {
          this.$toast.error(err)
        }
      },
      cancelar () {
        this.tarefa = {
          descricao: '',
          usuario: '',
          prioridade: '',
          task: '',
          tags: []
        }

        this.dialog = false
      }
    }
  }
</script>

<style></style>
