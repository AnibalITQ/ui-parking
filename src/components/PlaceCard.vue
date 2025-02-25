<template>
  <WhiteCard height="30%">
    <div class="header">
      <h2>{{ title }}</h2>
      <div class="text-[#EC8013] text-2xl sm:text-xl font-semibold">
        {{ number }}
      </div>
    </div>
    <p v-if="userData">{{ userData.nombre }}</p>
    <br />
    <p v-if="userData">
      {{ userData.auto }} | <strong>{{ userData.placa }}</strong>
    </p>
    <div class="actions">
      <button class="accept" @click="$emit('confirm')">
        <span class="material-icons">check</span>
      </button>
    </div>
  </WhiteCard>
</template>

<script setup lang="ts">
import WhiteCard from "@/components/WhiteCard.vue";
import { ref, onMounted, defineProps } from "vue";
import { fetchUserData, type User } from "../api/userService"; // Ajusta la ruta según tu proyecto

const props = defineProps<{
  title: string;
  number: string;
}>();
const { title, number } = props;
console.log(title, number); // Solo para evitar la advertencia

const userData = ref<User | null>(null);

onMounted(async () => {
  userData.value = await fetchUserData();
});
</script>

<style scoped>
.card {
  width: 250px;
  text-align: center;
  padding: 16px;
  border-radius: 8px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.place-number {
  color: orange;
  font-weight: bold;
}
.actions {
  margin-top: 20px;
  text-align: right;
}
button {
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
}
.accept {
  background-color: green;
  color: white;
}
</style>
