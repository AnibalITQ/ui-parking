<template>
  <div class="sidebar-container">
    <!-- Overlay que difumina el fondo -->
    <div class="overlay" :class="{ 'is-visible': is_expanded }" @click="ToggleMenu"></div>

    <!-- Sidebar -->
    <aside :class="{ 'is-expanded': is_expanded }">
      <div class="header-container">
        <div class="header">
          <!-- Logo alineado a la izquierda -->
          <div class="logo">
            <img src="../assets/ITQ_SIDEBAR.svg" alt="parking-logo" class="w-20 h-auto" />
          </div>
          <!-- Botón del menú alineado a la derecha -->
          <button class="menu-close" v-if="is_expanded" @click="ToggleMenu">
            <span class="material-symbols-outlined">thumbnail_bar</span>
          </button>
        </div>
        <div class="nameuser">
          <span>Kevin Emmanuel</span>
          <span>Guerrero Aguilar</span>
        </div>
      </div>

      <!-- Menú -->
      <div class="menu">
        <h3>Menú</h3>
        <router-link class="button" to="/parking">
          <span class="material-icons">home</span>
          <span class="text">Inicio</span>
        </router-link>
        <router-link class="button" to="/Perfil">
          <span class="material-icons">person</span>
          <span class="text">Perfil</span>
        </router-link>
        <router-link class="button" to="/Reportes">
          <span class="material-icons">flag</span>
          <span class="text">Reportes</span>
        </router-link>
        <hr>
        <router-link class="button" to="/Estadisticas">
          <span class="material-icons">bar_chart</span>
          <span class="text">Estadísticas</span>
        </router-link>
        <router-link class="button" to="/Informacion">
          <span class="material-icons">info</span>
          <span class="text">Información</span>
        </router-link>
      </div>
    </aside>

    <!-- Botón de abrir -->
    <button class="menu-toggle" v-if="!is_expanded" @click="ToggleMenu">
      <span class="material-symbols-outlined">thumbnail_bar</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const is_expanded = ref(false);
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  position: relative;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 100;
  }

  .overlay.is-visible {
    opacity: 1;
    pointer-events: auto;
  }

  aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: var(--dark);
    overflow: hidden;
    transition: width 0.3s ease-out;
    z-index: 200;

    &.is-expanded {
      width: auto;
    }

    .header-container {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      border-bottom: 1px solid var(--light-grey);
      width: 100%;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .logo {
      display: flex;
    }

    .menu-close {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--grey);
      outline: none;
      .material-symbols-outlined {
        font-size: 2rem;
      }
    }

    .nameuser {
      display: flex;
      flex-direction: column;
      color: var(--light);
      font-weight: bold;
      padding-top: 1rem;
    }

    .menu {
      padding: 1rem;

      h3 {
        color: var(--light);
        font-size: 1rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
      }

      .button {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem;
        text-decoration: none;
        color: var(--light);
        transition: background-color 0.2s ease;

        .material-icons {
          font-size: 1.5rem;
          color: var(--light);
        }
      }
    }
  }

  .menu-toggle {
    position: fixed;
    top: 1rem;
    left: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--Black);
    z-index: 200; /* Asegurar que esté encima del menú */
    outline: none;
    .material-symbols-outlined{
      font-size: 2.5rem;
    }
  }
}
</style>