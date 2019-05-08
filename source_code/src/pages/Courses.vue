<template>
  <div class="q-pa-md" style="max-width: 100%">
    <q-list bordered class="rounded-borders">
      <q-expansion-item>
        <template v-slot:header>
            <q-item-section avatar>
              <q-avatar>
                <img src="~assets/ufscar.png" class="round_img icon">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              Bacharelado em Ciência da Computação UFSCar
            </q-item-section>
            <q-item-section side>
              2017 ~ Atualmente
              </q-item-section>
          </template>
        <q-card>
          <q-card-section>
            Para mais informações sobre meu curso acesse: <a href="http://bcc.dc.ufscar.br">BCC UFSCar</a>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item>
        <template v-slot:header>
            <q-item-section avatar>
              <q-avatar>
                <img src="~assets/sansumg.png" class="round_img icon">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              Curso de Android Samsung Ocean
            </q-item-section>
            <q-item-section side>
              2015
              </q-item-section>
          </template>
        <q-card>
          <q-card-section>
            Curso oferecido às equipes ganhadoras do Prêmio Inova Jovem 2015. Foi bem legal
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item>
        <template v-slot:header>
            <q-item-section avatar>
              <q-avatar>
                <img src="~assets/cotil.png" class="round_img icon">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              Técnico em Informática COTIL Unicamp
            </q-item-section>
            <q-item-section side>
              2014 ~ 2016
              </q-item-section>
          </template>
        <q-card>
          <q-card-section>
            Onde obtive maior contato técnico em computação, aqui aprendi um pouco sobre cada área no nível prático.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item>
        <template v-slot:header>
            <q-item-section avatar>
              <q-avatar>
                <img src="~assets/microcamp.png" class="round_img icon">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              Webdesign Microcamp
            </q-item-section>
            <q-item-section side>
              2012-2013
            </q-item-section>
          </template>
        <q-card>
          <q-card-section>
            Primeiro contato formal com programação, photoshop, e conceitos de web!
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item>
        <template v-slot:header>
            <q-item-section avatar>
              <q-avatar>
                <img src="~assets/random.gif" class="round_img icon">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              Documentação/Tutoriais na Internet
            </q-item-section>
            <q-item-section side>
              2007 ~ Atualmente
            </q-item-section>
          </template>
        <q-card>
          <q-card-section>
            70% do conhecimento adquirido veio daqui. Recomendo
          </q-card-section>
        </q-card>
      </q-expansion-item>

    </q-list>
  </div>
</template>
<style>
</style>

<script>
const offline = [{
  id: 5,
  name: 'Brunhilde Panswick',
  email: 'bpanswick4@csmonitor.com',
  avatar: 'avatar2.jpg'
}, {
  id: 6,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
}]

export default {
  data () {
    return {
      offline
    }
  }
}
</script>
