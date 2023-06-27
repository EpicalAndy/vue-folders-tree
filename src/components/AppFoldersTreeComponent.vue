<template>
  <div class="indent">
    <app-folder-component
        v-for="folder in folders"
        :folder="folder">
    </app-folder-component>
  </div>

</template>

<script setup lang="ts">
import AppFolderComponent from "@/components/AppFolderComponent.vue";


const props = defineProps([ 'folders' ]);

</script>

<style scoped>
.indent {
  margin-left: 1em;
}
</style>
