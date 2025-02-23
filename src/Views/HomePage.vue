<template>
 <div
    class="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center p-4"
  >
  <div class="text-[#2E4057] flex items-center justify-center">
        <h1 class="text-2xl sm:text-xl font-semibold">{{ welcomeMessage }}</h1>
      </div>
    <!-- Contenedor principal blanco -->
    <div
      class="p-4 bg-white rounded-lg shadow-lg overflow-y-auto w-full max-w-md h-[80vh] sm:h-[70vh] min-h-[500px] mx-auto"
      @click="handleContainerClick"
    >
      <!-- Header -->
      <div class="flex items-center justify-center">
        <p class="text-xl sm:text-lg text-[#396296]">{{ status }}</p>
      </div>

      <!-- QR Code Gallery -->
      <div
        class="qr-image-container relative aspect-square w-full max-w-[300px] mx-auto my-4 sm:my-2"
      >
        <transition name="fade" mode="out-in">
          <img
            v-if="currentImageIndex !== null"
            :key="qrImages[currentImageIndex].url"
            :src="qrImages[currentImageIndex].url"
            :alt="qrImages[currentImageIndex].alt"
            class="w-full h-full object-contain"
          />
        </transition>
      </div>

      <!-- Parking Information -->
      <div class="">
        <div class="mb-4">
          <h2 class="text-2xl sm:text-xl font-bold text-gray-800">
            {{ plate }}
          </h2>
          <p class="text-gray-600">{{ vehicleInfo }}</p>
        </div>

        <!-- Location Details -->
        <div class="space-y-2">
          <div
            v-for="(location, index) in locations"
            :key="index"
            class="flex justify-between items-center"
          >
            <span class="text-gray-700">{{ location.name }}</span>
            <span class="text-gray-900"
              >{{ location.available }} Disponibles</span
            >
          </div>
        </div>
      </div>

      <!-- Se elimina la sección de botones de navegación
      <div class="flex justify-between p-4 border-t border-gray-200">
        <button
          @click="previousImage"
          class="text-gray-600 p-2 rounded-lg hover:bg-gray-200"
        >
          Anterior
        </button>
        <button
          @click="nextImage"
          class="text-gray-600 p-2 rounded-lg hover:bg-gray-200"
        >
          Siguiente
        </button>
      </div>
      -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Location {
  name: string;
  available: number;
}

interface QRImage {
  url: string;
  alt: string;
  plate: string;
  vehicleInfo: string;
}

const welcomeMessage = ref("Bienvenido Brian");
const status = ref("Sin lugar apartado");

import jettaImage from "@/assets/jetta.png";
import corollaImage from "@/assets/corolla.png";

const qrImages = ref<QRImage[]>([
  {
    url: jettaImage,
    alt: "QR Code 1",
    plate: "UKF-69-04",
    vehicleInfo: "Volkswagen Jetta, Modelo 2020, Color Azul",
  },
  {
    url: "/placeholder.svg?height=300&width=300",
    alt: "QR Code 2",
    plate: "ANI-12-34",
    vehicleInfo: "Honda Civic, Modelo 2019, Color Blanco",
  },
  {
    url: corollaImage,
    alt: "QR Code 3",
    plate: "GFW-15-92",
    vehicleInfo: "Toyota Corolla, Modelo 2022, Color Rojo",
  },
]);

const plate = ref("");
const vehicleInfo = ref("");

onMounted(() => {
  plate.value = qrImages.value[0].plate;
  vehicleInfo.value = qrImages.value[0].vehicleInfo;
});

const locations = ref<Location[]>([
  { name: "Av Universidad", available: 20 },
  { name: "Escobedo", available: 15 },
]);

const currentImageIndex = ref(0);

const nextImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value + 1) % qrImages.value.length;
  plate.value = qrImages.value[currentImageIndex.value].plate;
  vehicleInfo.value = qrImages.value[currentImageIndex.value].vehicleInfo;
};

const previousImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + qrImages.value.length) % qrImages.value.length;
  plate.value = qrImages.value[currentImageIndex.value].plate;
  vehicleInfo.value = qrImages.value[currentImageIndex.value].vehicleInfo;
};

/**
 * Detecta si el usuario hizo clic en la mitad izquierda o en la mitad derecha
 * del contenedor para navegar a la imagen anterior o siguiente.
 */
const handleContainerClick = (event: MouseEvent) => {
  // Obtener el rectángulo del contenedor
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
  // Posición del clic dentro del contenedor
  const clickX = event.clientX - rect.left;
  
  if (clickX < rect.width / 2) {
    // Mitad izquierda
    previousImage();
  } else {
    // Mitad derecha
    nextImage();
  }
};
</script>

<style scoped>
.qr-image-container {
  position: relative;
  z-index: 50; /* Asegura que la imagen QR quede detrás del sidebar */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Media query for very small screens */
@media (max-width: 320px) {
  .h-\[80vh\] {
    height: 60vh; /* Reduce height for very small screens */
  }

  .max-w-\[300px\] {
    max-width: 80%; /* Limit the image size */
  }

  .text-xl {
    font-size: 1rem; /* Reduce font size */
  }

  .text-2xl {
    font-size: 1.25rem; /* Reduce font size */
  }

  .sm\:text-xl {
    font-size: 1rem; /* Adjust for small screens */
  }
}
</style>
