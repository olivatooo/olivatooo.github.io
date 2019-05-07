<template>
  <div class="q-pa-md row items-start q-gutter-md" style="max-width: 100%">
    <q-card class="my-card">
      <img src="assets/fca_limeira.png">

      <q-card-section>
        <div class="text-h6">FCA - Unicamp</div>
        <div class="text-subtitle2">Estagiário em técnico de informática (2015~2016)</div>
      </q-card-section>

      <q-card-section>
        Ambiente inovador, pessoas excelentes, hora de trabalhar nós trabalhávamos,
        hora de brincar nós brincavamos, e hora de produzir ciência nós produziamos ciência brincando! Mesmo sendo estagiário minha opinião era
        sempre considerada.
      </q-card-section>
    </q-card>
    <q-card class="my-card">
      <img src="assets/piuma.svg">

      <q-card-section>
        <div class="text-h6">Piuma Tecnologia</div>
        <div class="text-subtitle2">DevOps (2019 ~ Atualmente)</div>
      </q-card-section>

      <q-card-section>
        Trabalho como DevOps, cuido da infraestrutura de rede e servidores da empresa.
      </q-card-section>
    </q-card>
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
