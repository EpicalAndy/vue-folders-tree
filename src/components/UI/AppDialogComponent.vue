<template>
  <v-dialog v-model="show" width="800" height="900">
    <slot></slot>
  </v-dialog>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const props = defineProps(['show']);
  const show = ref(props.show);
</script>

<style scoped>

</style>
