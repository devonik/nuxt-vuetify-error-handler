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
        <!--{{ $t("general.close") }}-->
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
  
  <script setup>
  import { useSnackbarStore } from "../stores/snackbar";
  const store = useSnackbarStore();
  </script>
  
  <style scoped></style>
  