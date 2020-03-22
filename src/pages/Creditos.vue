<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Créditos</h5>

    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">MSc. Marcelo Cabral Ghilardi</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Kabrau</div>
          <div class="text-caption text-grey">Meu trabalho é meu hobby</div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-avatar size="100px">
            <img :src="imageSrc" />
          </q-avatar>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat v-on:click="linkedin()" :icon="logoLinkedin">Linkedin</q-btn>
        <q-btn flat v-on:click="Github()" :icon="logoGithub" >GitHub</q-btn>
        <q-btn flat v-on:click="GoogleScholar()" :icon="logoGoogle" >Google Scholar</q-btn>
      </q-card-actions>
    </q-card>

    <div></div>
  </q-page>
</template>

<script>
import avatar from "../assets/avatar.jpg";
import { ionLogoGithub } from '@quasar/extras/ionicons-v4'
import { ionLogoLinkedin } from '@quasar/extras/ionicons-v4'
import { ionLogoGoogle } from '@quasar/extras/ionicons-v4'

export default {
  name: "Creditos",
  created() {
    this.logoGithub = ionLogoGithub
    this.logoLinkedin = ionLogoLinkedin
    this.logoGoogle = ionLogoGoogle
  },
  methods: {
    linkedin: () =>
      window.open(
        "https://www.linkedin.com/in/marcelocabralghilardi/",
        "_blank"
      ),
    Github: () => window.open("https://github.com/kabrau/", "_blank"),
    GoogleScholar: () => window.open("https://scholar.google.com.br/citations?user=0Yt_NQIAAAAJ", "_blank")
  },
  data() {
    return {
      imageSrc: avatar
    };
  }
};
</script>
