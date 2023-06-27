<template>
  <v-card>
    <v-card-item>
      <v-card-text>
        Путь к папке: {{ store.fullFolderPath }}
      </v-card-text>
    </v-card-item>

    <app-button-component @click="toggle">Открыть дерево</app-button-component>
  </v-card>
  <v-dialog v-model="show">
    <v-card>

      <v-card-title>
        {{ props.title }}
      </v-card-title>

      <app-folders-tree-component :folders="folders">
      </app-folders-tree-component>

      <v-btn-group>
        <app-button-component>ок</app-button-component>
        <app-button-component>Закрыть</app-button-component>
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

function toggle() {
  show.value = !show.value;
}
</script>

<style scoped>

</style>
