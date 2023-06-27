import { defineStore } from "pinia";
import { computed, type Ref, ref } from "vue";
import foldersSrc from "@/demo/folders.json";

export const useStore = defineStore('store', () => {

  const activeFolder: Ref<number | null> = ref(null);
  const folders = ref(foldersSrc);
  function setFolder(id: number) {
    activeFolder.value = id;
  }

  return { activeFolder, folders, setFolder };
})
