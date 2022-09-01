<template>
  <div>
    <v-app-bar
        v-if="!$vuetify.breakpoint.mdAndUp"
    >
      <v-app-bar-nav-icon @click="exibir = !exibir"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
        v-model="exibir"
        :permanent="$vuetify.breakpoint.mdAndUp"
        :expand-on-hover="$vuetify.breakpoint.mdAndUp"
        :absolute="!$vuetify.breakpoint.mdAndUp"
        :temporary="!$vuetify.breakpoint.mdAndUp"
        app
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img :src="fotoPerfil"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">{{ nome }}</v-list-item-title>
            <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <router-link :to="{ name: 'Ponto' }" style="text-decoration: none;">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-clock-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Ponto</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link :to="{ name: 'Tarefas' }" style="text-decoration: none;">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-format-list-checks</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Minhas tarefas</v-list-item-title>
          </v-list-item>
        </router-link>
        <!--        <v-list-item link>-->
        <!--          <v-list-item-icon>-->
        <!--            <v-icon>mdi-cog-outline</v-icon>-->
        <!--          </v-list-item-icon>-->
        <!--          <v-list-item-title>Configurações</v-list-item-title>-->
        <!--        </v-list-item>-->
      </v-list>
      <span v-if="getUsuario.admin">
        <v-divider></v-divider>
        <v-list nav dense>
          <router-link :to="{ name: 'Usuarios' }" style="text-decoration: none;">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-multiple-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Usuários</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link :to="{ name: 'Feriados' }" style="text-decoration: none;">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-calendar</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Feriados</v-list-item-title>
            </v-list-item>
          </router-link>
          <v-list-item link @click="exibirDialogLogout = true">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item>
        </v-list>
      </span>
    </v-navigation-drawer>

    <v-dialog v-model="exibirDialogLogout" persistent max-width="400px">
      <v-card>
        <v-card-title>Sair</v-card-title>
        <v-card-text>Tem certeza que deseja sair?</v-card-text>

        <v-card-actions class="justify-end">
          <v-btn
              color="primary"
              text
              @click="exibirDialogLogout = false">
            Cancelar
          </v-btn>
          <v-btn
              color="primary"
              text
              @click="logout">
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data: () => ({
      exibir: false,
      exibirDialogLogout: false,
      nome: '',
      email: '',
      fotoPerfil: ''
    }),
    computed: {
      getUsuario () {
        return JSON.parse(localStorage.getItem('usuario'))
      }
    },
    watch: {
      '$vuetify.breakpoint.mdAndUp': function () {
        this.exibir = false
      }
    },
    mounted () {
      const usuario = JSON.parse(localStorage.getItem('usuario'))

      if (usuario) {
        this.nome = usuario.nome
        this.email = usuario.email
        this.fotoPerfil = usuario.foto_perfil
      }
    },
    methods: {
      logout () {
        localStorage.clear()
        location.reload(true)
      }
    }
  }
</script>
