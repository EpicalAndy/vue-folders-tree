import { defineStore } from "pinia";
import { computed, type Ref, ref } from "vue";
import foldersSrc from "@/demo/folders2.json";
import type { Folder } from "@/models/folder";

export const useStore = defineStore('store', () => {

  const activeFolderId: Ref<number | null> = ref(null);
  const folders = ref(foldersSrc);

  const fullFolderPath = computed(() => {
    const id = activeFolderId.value;
    let result = '/';
    if (!id) {
      return result;
    }
    let temp: Folder | null = folders.value.find((item) => item.id === id) || null;
    let parentId: number | null = temp?.parentId || null;

    result = '/' + temp?.name || '';

    while (true) {
      temp = folders.value.find((item) => item.id === parentId) || null;

      if (temp) {
        result = `/${temp.name}${result}`;
        parentId = temp.parentId;

        continue;
      }

      if (temp && temp.parentId === null) {
        break;
      }
      break;
    }

    return result;
  })

  function setFolder(id: number) {
    activeFolderId.value = id;
  }


  function getChildren(parentId: number | null) {
    return folders.value.filter((item) => item.parentId === parentId);
  }

  return {
    activeFolderId,
    folders,
    setFolder,
    getChildren,
    fullFolderPath
  };
})
