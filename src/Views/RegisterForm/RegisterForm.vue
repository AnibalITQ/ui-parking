<template>
  <!-- Contenedor principal con color de fondo y centramiento del contenido -->
  <div
    class="bg-[#EC8013] flex items-center justify-center p-4 w-full h-screen relative"
  >
    <!-- Tarjeta (card) interna para el formulario -->
    <div
      class="bg-white rounded-3xl mt-10 p-8 overflow-y-auto w-full h-[90vh] sm:h-[70vh] min-h-[500px] mx-auto"
    >
      <h2 class="text-2xl font-semibold text-center mb-6">Regístrate</h2>

      <!-- Formulario principal -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Campo: Número de control -->
        <div>
          <label
            for="numControl"
            class="block text-sm font-semibold text-gray-700 mb-1"
          >
            Número de Control
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

        <!-- Campo: Numero de Telefono -->
        <div>
          <label
            for="telefono"
            class="block text-sm font-semibold text-gray-700 mb-1"
          >
            Número de teléfono
          </label>
          <input
            id="telefono"
            v-model="form.telefono"
            type="text"
            required
            placeholder="ingresa tu número de teléfono a 10 dígitos"
            class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
            :class="{ 'border-red-500': errors.telefono }"
          />
          <p v-if="errors.telefono" class="mt-1 text-sm text-red-500">
            {{ errors.telefono }}
          </p>
        </div>

        <!-- Campo: Nombre -->
        <div>
          <label
            for="nombre"
            class="block text-sm font-semibold text-gray-700 mb-1"
          >
            Nombre
          </label>
          <input
            id="nombre"
            v-model="form.nombre"
            type="text"
            required
            class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
            :class="{ 'border-red-500': errors.nombre }"
          />
          <p v-if="errors.nombre" class="mt-1 text-sm text-red-500">
            {{ errors.nombre }}
          </p>
        </div>

        <!-- Campo: Apellidos -->
        <div>
          <label
            for="apellidos"
            class="block text-sm font-semibold text-gray-700 mb-1"
          >
            Apellidos
          </label>
          <input
            id="apellidos"
            v-model="form.apellidos"
            type="text"
            required
            class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
            :class="{ 'border-red-500': errors.apellidos }"
          />
          <p v-if="errors.apellidos" class="mt-1 text-sm text-red-500">
            {{ errors.apellidos }}
          </p>
        </div>

        <!-- Campo: Contraseña -->
        <div>
          <label
            for="password"
            class="block text-sm font-semibold text-gray-700 mb-1"
          >
            Contraseña
          </label>

          <!-- Contenedor "relative" para posicionar el ícono -->
          <div class="relative">
            <input
              id="password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
              :class="{ 'border-red-500': errors.password }"
            />
            <p v-if="errors.password" class="mt-1 text-sm text-red-500">
              {{ errors.password }}
            </p>

            <!-- Botón o ícono de Material Icons para togglear la contraseña -->
            <button
              type="button"
              @click="toggleShowPassword"
              class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
            >
              <span class="material-icons">
                {{ showPassword ? "visibility_off" : "visibility" }}
              </span>
            </button>
          </div>
        </div>

        <!-- Campo: Confirmar Contraseña -->
        <div>
          <label
            for="passwordConfirm"
            class="block text-sm font-semibold text-gray-700 mb-1"
          >
            Confirmar Contraseña
          </label>

          <div class="relative">
            <input
              id="passwordConfirm"
              v-model="form.passwordConfirm"
              :type="showPasswordConfirm ? 'text' : 'password'"
              required
              class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
              :class="{ 'border-red-500': errors.passwordConfirm }"
            />
            <p v-if="errors.passwordConfirm" class="mt-1 text-sm text-red-500">
              {{ errors.passwordConfirm }}
            </p>

            <!-- Segundo ícono de Material Icons -->
            <button
              type="button"
              @click="toggleShowPasswordConfirm"
              class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
            >
              <span class="material-icons">
                {{ showPasswordConfirm ? "visibility_off" : "visibility" }}
              </span>
            </button>
          </div>

          <!-- Campo: Apellidos -->
          
        </div>

        <!-- Sección de autos -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            Autos
          </label>

          <!-- Repetimos un bloque por cada auto que el usuario agregue -->
          <div
            v-for="(car, index) in form.autos"
            :key="index"
            class="mt-6 p-4 border border-gray-300 rounded-lg shadow-md bg-gray-50"
          >
            <div class="Top-card">
              <p class="block text-lg font-semibold text-gray-800 mb-1 textAutos">
                Auto {{ index + 1 }}
              </p>
              <button class="btnDelete" v-if="form.autos.length > 1" @click="removeCar(index)">
                <span class="material-icons">
                  delete
                </span>
              </button>
            </div>

            <!-- Campo: Placas -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Placas
              </label>
              <input
                v-model="car.placas"
                type="text"
                required
                class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
                :class="{ 'border-red-500': carErrors[index]?.placas }"
              />
              <p
                v-if="carErrors[index]?.placas"
                class="mt-1 text-sm text-red-500"
              >
                {{ carErrors[index].placas }}
              </p>
            </div>

            <!-- Campo: Modelo -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Modelo
              </label>
              <input
                v-model="car.modelo"
                type="text"
                required
                class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
                :class="{ 'border-red-500': carErrors[index]?.modelo }"
              />
              <p
                v-if="carErrors[index]?.modelo"
                class="mt-1 text-sm text-red-500"
              >
                {{ carErrors[index].modelo }}
              </p>
            </div>

            <!-- Campo: Año -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Año
              </label>
              <input
                v-model="car.year"
                type="text"
                required
                class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
                :class="{ 'border-red-500': carErrors[index]?.year }"
              />
              <p
                v-if="carErrors[index]?.year"
                class="mt-1 text-sm text-red-500"
              >
                {{ carErrors[index].year }}
              </p>
            </div>

            <!-- Campo: Color -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Color
              </label>
              <input
                v-model="car.color"
                type="text"
                required
                class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
                :class="{ 'border-red-500': carErrors[index]?.color }"
              />
              <p
                v-if="carErrors[index]?.color"
                class="mt-1 text-sm text-red-500"
              >
                {{ carErrors[index].color }}
              </p>
            </div>
          </div>
        </div>

        <!-- Validación general de autos (por ejemplo, si no se ha agregado ninguno) -->
        <p v-if="errors.autos" class="mt-1 text-sm text-red-500">
          {{ errors.autos }}
        </p>

        <!-- Botones de acción -->
        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <!-- Botón para agregar un nuevo auto -->
          <button
            type="button"
            @click="handleNewCar"
            class="w-full sm:w-1/2 px-6 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Agregar Auto
          </button>

          <!-- Botón para enviar el formulario -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full sm:w-1/2 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors disabled:opacity-50"
          >
            {{ isLoading ? "Cargando..." : "Registrarse" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRegisterForm } from "./RegisterForm";

const { form, errors, carErrors, handleNewCar, handleSubmit, isLoading, removeCar } =
  useRegisterForm();

/**
 * Banderas reactivas para cada campo de contraseña
 */
const showPassword = ref(false);
const showPasswordConfirm = ref(false);

/**
 * Funciones para alternar la visibilidad de la contraseña
 */
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const toggleShowPasswordConfirm = () => {
  showPasswordConfirm.value = !showPasswordConfirm.value;
};
</script>

<style src="./RegisterForm.css" scoped></style>