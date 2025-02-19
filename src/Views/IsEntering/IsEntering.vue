<template>
  <div
    class="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center p-4"
  >
    <WhiteCard v-if="userData">
      <div class="flex flex-col items-center justify-center">
        <h2>Está ingresando</h2>
        <img :src="userData.foto" alt="Foto del usuario" class="photo" />
        <p>Estudiante</p>
        <p class="text-center">
          <strong>{{ userData.nombre }}</strong>
        </p>
        <p>{{ userData.noControl }}</p>
        <br />
        <p>
          <strong>{{ userData.placa }}</strong>
        </p>
        <p>{{ userData.auto }}</p>
        <p>{{ userData.color }}</p>
      </div>
      <div class="flex justify-around mt-4 w-full">
        <button class="deny" @click="denyAccess" aria-label="Denegar acceso">
          <span class="material-icons">close</span>
        </button>
        <button
          class="accept"
          @click="acceptAccess"
          aria-label="Aceptar acceso"
        >
          <span class="material-icons">check</span>
        </button>
      </div>
    </WhiteCard>
    <p v-else>Cargando...</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { fetchUserData, User } from "./IsEntering";
import WhiteCard from "@/components/WhiteCard.vue";
const userData = ref<User | null>(null);

onMounted(async () => {
  userData.value = await fetchUserData();
});

const acceptAccess = () => {
  alert("Acceso permitido");
};

const denyAccess = () => {
  alert("Acceso denegado");
};
</script>

<style scoped>
.photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
}
button {
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
}
.deny {
  background-color: red;
  color: white;
}
.accept {
  background-color: green;
  color: white;
}
</style>
