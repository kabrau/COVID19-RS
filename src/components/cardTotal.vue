<template>
  <q-item clickable v-ripple class="text-white" :class="backgroundColor">
    <q-item-section side>
      <q-icon :name="iconName" color="white" />
    </q-item-section>
    <q-item-section>
        <q-item-label class="text-white"  caption>{{subtitle}}</q-item-label>
      <q-item-label>{{title}}</q-item-label>
      <q-item-label class="numeroGrande">{{total}}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script type="text/javascript">
export default {
  props: ["title", "total", "backgroundColor", "iconName", "subtitle"],
  data() {
    return {
      options: {
        separator: "."
      }
    };
  }
};
</script>
<style scoped>
.numeroGrande {
  font-size: 54px;
}
</style>