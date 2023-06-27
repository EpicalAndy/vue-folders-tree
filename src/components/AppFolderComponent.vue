<template>
  <v-card>
    <v-btn class="text-none text-subtitle-1"
           :prepend-icon="icon"
           variant="flat"
           :color="folderColor"
           @click="folderClic">
      {{ folder.name }}
    </v-btn>
    <app-folders-tree-component v-if="isOpened"
        :folders="folder.children">
    </app-folders-tree-component>
  </v-card>

</template>

<script setup lang="ts">
import type { Folder } from "@/models/folder";
import AppFoldersTreeComponent from "@/components/AppFoldersTreeComponent.vue";
import { computed, ref } from "vue";
import { useStore } from "@/stores/store";

const store = useStore();
const { folder } = defineProps<{ folder: Folder }>();
const isOpened = ref(false);
const isActive = computed(() => store.activeFolder === folder.id);


const icon = computed(() => isOpened.value ? 'mdi-folder-open' : 'mdi-folder');
const folderColor = computed(() => {
  let color = folder.children ? 'light-blue' : 'grey-darken-1';

  isActive.value && (color = 'green');

  return color;
})

function folderClic() {
  isOpened.value = !isOpened.value;

  store.setFolder(folder.id);
}
</script>

<style scoped>

</style>
