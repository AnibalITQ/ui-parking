<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <v-btn icon color="primary" @click="toggleScanner">
      <v-icon>
        <svg width="24" height="24" viewBox="0 0 459 458" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_110_1422)">
            <rect x="4.75" width="450" height="450" rx="45" fill="#3F3F3F" shape-rendering="crispEdges"/>
            <path d="..." fill="white"/>
          </g>
        </svg>
      </v-icon>
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