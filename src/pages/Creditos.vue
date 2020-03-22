<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Créditos</h5>

    <q-card class="my-card" flat bordered>


      <q-card-section>
        <div class="text-overline text-orange-9">MSc.</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Marcelo Cabral</div>
        <div class="text-caption text-grey">
          Programando até dormindo
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat label="Linkedin" />
        <q-btn flat label="Github" />
        <q-btn class="linkedin" round color="deep-orange" icon="local_activity" />
      </q-card-actions>

    </q-card>


 <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section>
          <div class="text-h6">Marcelo Cabral</div>
          <div class="text-subtitle2"></div>
          <p>https://www.linkedin.com/in/marcelocabralghilardi/</p>
        </q-card-section>

        <q-card-section>
    <q-avatar size="100px">
      <img :src="imageSrc">
    </q-avatar>
        </q-card-section>
        
      </q-card-section>
    </q-card>

    
  </q-page>
</template>

<script>
import avatar from "../assets/avatar.jpg";

export default {
  name: 'Creditos',
  data () {
    return {
      imageSrc: avatar
    }
  }
}
</script>
