<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="warning" v-bind="attrs" v-on="on">
        Criar projeto
        <v-icon right>mdi-folder-plus-outline</v-icon>
      </v-btn>
    </template>
    <v-card elevation="1">
      <v-card-title>
        <span class="text-h5">Novo projeto</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="8">
            <v-text-field
                v-model="projeto.nome"
                label="Nome:"
                :rules="obrigatorio"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-select
                v-model="projeto.cliente"
                :items="clientes"
                solo
                :rules="obrigatorio"
                label="Cliente:"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="9">
            <v-text-field @keydown.enter="adicionarTask" v-model="task" label="Adicionar task:"></v-text-field>
          </v-col>
          <v-col>
            <v-checkbox v-model="projeto.publico" label="Público"></v-checkbox>
          </v-col>
        </v-row>
        <v-row>
          <v-card
              @click="removerTask(index)"
              class="mx-1"
              dark shaped
              v-for="(item, index) in projeto.tasks" :key="index">
            <v-card-actions>
              {{ item }}
            </v-card-actions>
          </v-card>
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
    name: 'CadastrarProjeto',
    data () {
      return {
        dialog: false,
        task: '',
        projeto: {
          id_gerente: '',
          nome: '',
          cliente: '',
          publico: false,
          tasks: []
        },
        obrigatorio: [v => !!v || v.length < 0 || 'Campo obrigatório']
      }
    },
    computed: {
      clientes () {
        return ['NewM', 'Embracon', 'Caixa']
      }
    },
    methods: {
      adicionarTask () {
        this.projeto.tasks.push(this.task)
        this.task = ''
      },
      removerTask (index) {
        this.projeto.tasks = this.projeto.tasks
          .filter(function (task, i) {
            return i !== index
          })
      },
      async cadastrar () {
        try {
          // TODO: Implementar integração com clockify (cadastrar projeto)
        } catch (err) {
          this.$toast.error(err)
        }
      },
      cancelar () {
        this.projeto = {
          id_gerente: '',
          nome: '',
          cliente: '',
          publico: false,
          tasks: []
        }

        this.dialog = false
      }
    }
  }
</script>

<style></style>
