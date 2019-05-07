<template>
  <div class="q-pa-md q-gutter-sm">
    <q-tree
      :nodes="simple"
      node-key="label"
    />
  </div>
</template>

<style>
</style>

<script>

export default {
  data () {
    return {
      simple: [
        {
          label: 'Qual distro você usa?',
          avatar: '~assets/linux.png',
          children: [
            {
              label: 'Notebook',
              icon: 'code',
              children: [
                { label: 'OS: Manjaro Linux x86_64' },
                { label: 'Packages: 1293 (pacman)' },
                { label: 'Shell: bash 5.0.2' },
                { label: 'Resolution: 1366x768' },
                { label: 'DE: GNOME 3.32.0' },
                { label: 'WM: GNOME Shell' },
                { label: 'WM Theme: Adwaita' },
                { label: 'Theme: Adapta-Maia [GTK2/3]' },
                { label: 'Icons: ePapirus [GTK2/3]' },
                { label: 'Terminal: kitty' },
                { label: 'Terminal Font: Fira Code kitty 0.13.3' },
                { label: 'CPU: Intel i5-5200U (4) @ 2.700GHz' },
                { label: 'GPU: Intel HD Graphics 5500' },
                { label: 'Memory: XXXXMiB / 7888MiB' }
              ]
            },
            {
              label: 'Desktop',
              icon: 'code',
              children: [
                { label: 'OS: Manjaro Linux x86_64' },
                { label: 'Packages: 1396 (pacman), 4 (flatpak)' },
                { label: 'Shell: fish 3.0.2' },
                { label: 'Resolution: 1600x900' },
                { label: 'WM: i3' },
                { label: 'Theme: Adapta-Maia [GTK2/3]' },
                { label: 'Icons: Papirus-Maia [GTK2/3]' },
                { label: 'Terminal: kitty' },
                { label: 'Terminal Font: Fira Code kitty 0.13.3' },
                { label: 'CPU: Intel i5-2500 (4) @ 3.700GHz' },
                { label: 'GPU: NVIDIA GeForce GTX 970' },
                { label: 'Memory: XXXXMiB / 11991MiB' }
              ]
            }
          ]
        },
        {
          label: 'Quais linguagens de programação você tem mais afinidade?',
          avatar: '~assets/random.gif',
          children: [
            {
              label: 'Python3',
              icon: 'code'
            },
            {
              label: 'Java',
              icon: 'code'
            },
            {
              label: 'C',
              icon: 'code'
            },
            {
              label: 'Assembly x86 (MASM)',
              icon: 'code'
            },
            {
              label: 'Conheço e trabalhei com muitas outras além dessas.',
              icon: 'code'
            },
            {
              label: 'Mas não defendo nenhuma em particular. Cada uma tem sua funcionalidade',
              icon: 'code'
            }
          ]
        }
      ]
    }
  }
}

</script>
