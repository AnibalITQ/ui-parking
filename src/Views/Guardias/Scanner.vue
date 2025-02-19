<template>
  <div class="flex flex-col items-center justify-center min-h-screen w-full px-4 py-6">
    <v-btn class="flex items-center justify-center p-2 rounded-full" @click="toggleScanner">
      <img src="@/assets/Camera.svg" alt="camara" class="w-20 h-20"/> 
    </v-btn>


    <qrcode-stream 
      v-if="isScanning"
      @detect="onDetect"
      @init="onInit"
      class="mt-4 w-full max-w-md rounded-lg shadow-lg"
    />

    <v-alert v-if="decodedText" type="success" class="mt-4">
      Código QR: {{ decodedText }}
    </v-alert>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { QrcodeStream } from "vue3-qrcode-reader";
import { defineEmits } from "vue";

const emit = defineEmits(["closeScanner"]);

const closeScanner = () => {
  emit("closeScanner");
}

const isScanning = ref(false);
const decodedText = ref("");

const toggleScanner = () => {
  isScanning.value = !isScanning.value;
  decodedText.value = "";
};

const onDetect = (results) => {  
  console.log("Resultados detectados:", results);
  if (results.length > 0) {
    const qrContent = results[0].rawValue;
    console.log("Código QR detectado:", qrContent);
    decodedText.value = qrContent;
    isScanning.value = false;

    if (qrContent.startsWith("http://") || qrContent.startsWith("https://")) {
  setTimeout(() => {
    window.location.replace(qrContent);
  }, 1000);
}
 else {
      console.warn("El código QR no contiene una URL válida.");
    }
  }
};

const onInit = async (promise) => {
  try {
    await promise;
    console.log("✅ Cámara lista para escanear.");
  } catch (error) {
    console.error("Error al iniciar la cámara:", error);
    alert("Error al acceder a la cámara. Verifica los permisos.");
  }
};
</script>

<style> 

</style>  