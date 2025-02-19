<template>
  <div
    class="bg-[#EC8013] flex items-center justify-center p-4 w-full h-screen relative"
  >
    <!-- Contenedor para el texto fuera de la caja blanca -->
    <h1
      class="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold text-center text-[#F2A14E] mb-4"
      style="top: 7.5%"
    >
      PARKING ITQ
    </h1>

    <div class="w-full sm:w-96 bg-white rounded-3xl shadow-lg p-8 mt-[10%]">
      <h2 class="text-2xl font-semibold text-center mb-6">INICIAR SESIÓN</h2>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="space-y-4">
          <div>
            <label
              for="numControl"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              NUM CONTROL
            </label>
            <input
              id="numControl"
              v-model="form.numControl"
              type="text"
              required
              class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
              :class="{ 'border-red-500': errors.numControl }"
            />
            <p v-if="errors.numControl" class="mt-1 text-sm text-red-500">
              {{ errors.numControl }}
            </p>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              CONTRASEÑA
            </label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              required
              class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
              :class="{ 'border-red-500': errors.password }"
            />
            <p v-if="errors.password" class="mt-1 text-sm text-red-500">
              {{ errors.password }}
            </p>
          </div>
        </div>

        <div class="text-right">
          <a href="#" class="text-orange-500 text-sm hover:underline">
            Olvidé mi contraseña
          </a>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            type="button"
            @click="handleRegister"
            class="w-full sm:w-1/2 px-6 py-3 bg-[#2C3E50] text-white rounded-full hover:bg-[#34495E] transition-colors"
          >
            Registrarse
          </button>
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full sm:w-1/2 px-6 py-3 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 transition-colors disabled:opacity-50"
          >
            {{ isLoading ? "Cargando..." : "Acceder" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from 'vue-router';

interface FormData {
  numControl: string;
  password: string;
}

interface FormErrors {
  numControl?: string;
  password?: string;
}

const form = reactive<FormData>({
  numControl: "",
  password: "",
});

const errors = reactive<FormErrors>({});
const isLoading = ref(false);

const router = useRouter();
const validateForm = (): boolean => {
  errors.numControl = "";
  errors.password = "";

  if (!form.numControl) {
    errors.numControl = "El número de control es requerido";
    return false;
  }

  if (!form.password) {
    errors.password = "La contraseña es requerida";
    return false;
  }
  if (!/^\d+$/.test(form.numControl)) {
    errors.numControl = "El número de control debe contener solo números";
    return false;
  }

  if(form.numControl.length != 8 )
  {
    errors.numControl = "El numero de control no es valido";
    return false;
  }
  if (form.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
    return false;
  }

  return true;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  try {
    isLoading.value = true;
    // Aquí iría la lógica de autenticación
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Iniciando sesión con:", form);

    // Ejemplo de redirección después del login exitoso
    router.push('/parking')
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
  } finally {
    isLoading.value = false;
  }
};

const handleRegister = () => {
  // Aquí iría la lógica de navegación al registro
  console.log("Navegando a registro...");
};
</script>

<style scoped>
/* Asegura que los inputs tengan el mismo ancho en dispositivos móviles */
input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
}

/* Mejora la visualización en iOS */
@supports (-webkit-touch-callout: none) {
  input {
    font-size: 16px; /* Previene el zoom en iOS */
  }
}
</style>
