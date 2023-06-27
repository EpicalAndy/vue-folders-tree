<template>
  <v-card>
    <v-card-item>
      <v-card-text>
        Путь к папке: {{ fullFolderPath }}
      </v-card-text>
    </v-card-item>

    <app-button-component block
                          @click="toggle">
      Открыть дерево
    </app-button-component>

  </v-card>
  <v-dialog v-model="show">
    <v-card>

      <v-card-title>
        {{ props.title }}
      </v-card-title>

      <app-folders-tree-component :folders="folders">
      </app-folders-tree-component>

      <v-btn-group>
        <app-button-component @click="select">Ок</app-button-component>
        <app-button-component @click="toggle">Закрыть</app-button-component>
      </v-btn-group>

    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import AppButtonComponent from "@/components/UI/AppButtonComponent.vue";
import { ref } from "vue";
import AppFoldersTreeComponent from "@/components/AppFoldersTreeComponent.vue";
import { useStore } from "@/stores/store";

const show = ref(false);
const props = defineProps([ 'title' ]);
const store = useStore();
const folders = ref(store.getChildren(null));
const emits = defineEmits([ 'select' ]);
const fullFolderPath = ref('/');

function toggle() {
  show.value = !show.value;
}

function select() {
  emits("select", store.activeFolderId);

  fullFolderPath.value = store.fullFolderPath;
  show.value = false;
}
</script>

<style scoped>

</style>
