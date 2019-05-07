<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Gabriel Olivato
        </q-toolbar-title>

        <div>Portfólio Do Olivato</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Áreas de atuação</q-item-label>
        <q-item clickable tag="a" target="_self" href="#/courses">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Formação</q-item-label>
            <q-item-label caption>Todos os cursos que eu fiz!</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_self" href="#/achiev">
          <q-item-section avatar>
            <q-icon name="videogame_asset" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Experiências</q-item-label>
            <q-item-label caption>Projetos, hackatons, submissões, etc</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_self" href="#/jobs">
          <q-item-section avatar>
            <q-icon name="brush" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Jobs</q-item-label>
            <q-item-label caption>Lugares em que eu já trabalhei</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_self" href="#/faq">
          <q-item-section avatar>
            <q-icon name="question_answer" />
          </q-item-section>
          <q-item-section>
            <q-item-label>FAQ</q-item-label>
            <q-item-label caption>Perguntas que ninguém fez!</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_self" href="#/thanks">
          <q-item-section avatar>
            <q-icon name="face" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Agradecimentos</q-item-label>
            <q-item-label caption>Pessoas que me ajudaram a chegar onde estou</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://gitlab.com/olivato">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Gitlab</q-item-label>
            <q-item-label caption>Fico bastante tempo lá</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'home',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
