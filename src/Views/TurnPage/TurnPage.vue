<script setup lang="ts">
import UserCard from "@/components/PlaceCard.vue";

const handleConfirm = () => {
  console.log("Usuario confirmado");
};
</script>

<template>
  <UserCard title="Turno asignado" number="3" @confirm="handleConfirm" />
</template>
