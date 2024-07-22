import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', () => {
  // State
  const info = ref([]);

  // Getters
  const getInfo = computed(() => info.value);

  // Actions
  function addInfo(newInfo) {
    info.value = [newInfo, ...info.value];
  }

  return {
    info,
    getInfo,
    addInfo
  }
})