
  
<script setup lang="ts">
  import { useSnackbarStore } from "../stores/snackbar";
  const store = useSnackbarStore();
</script>

<template>
  <v-snackbar
    v-model="store.isVisible"
    :timeout="store.timeout"
    :color="store.color"
  >
    {{ store.text }}
    
    <template #actions>
      <v-btn
        variant="text"
        @click="store.isVisible = false"
      > 
        {{ store.closeText }}
      </v-btn>
    </template> 
  </v-snackbar>
</template>
  
<style scoped></style>
  