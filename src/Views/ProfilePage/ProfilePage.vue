<template>
  <div class="profile-page">
    <div class="circle">
      <div class="photo">
        <img src="@/assets/ITQ_LOGO.svg" alt="Logo" class="ItqLogo" />
      </div>
    </div>
    <div class="orange-section"></div>
    <div class="white-section">
      <div class="card">
        <div class="contenx">
          <h1 class="title">Descripción general</h1>
          <div class="conteiner-perfil">
            <div class="info-row">
              <h2 class="label">Nombre:</h2>
              <h2 class="text-value">Kevin Emmanuel Guerrero Aguilar</h2>
            </div>
            <div class="info-row">
              <h2 class="label">Num. de control:</h2>
              <h2 class="text-value">21140791</h2>
            </div>
            <div class="info-row">
              <h2 class="label">Teléfono:</h2>
              <h2 class="text-value">442-115-0520</h2>
              <button class="btnEditNum" @click="showModal = true">
                <span class="material-icons">edit_square</span>
              </button>
            </div>
            <div class="info-row">
              <h2 class="label">Status:</h2>
              <h2 class="text-value">Estudiante</h2>
            </div>
            <div class="info-row">
              <router-link class="btnSession" to="/login">
                <span class="text">Cerrar sesión</span>
              </router-link>
            </div>
            <hr />
            <!-- Vehículos -->
            <div class="info-row">
              <h2 class="label">Vehículos:</h2>
            </div>
            <div class="vehiculosqr" v-for="(vehiculo, index) in vehiculos" :key="index">
              <div class="conteiner-vehiculo">
                <div class="info-row vehiculo-info">
                  <img :src="vehiculo.qrImage" alt="QR" class="qrsfox" />
                  <div class="vehiculo-detalles">
                    <h2>{{ vehiculo.nombre }}</h2>
                    <h2>{{ vehiculo.placa }}</h2>
                    <h2>{{ vehiculo.modelo }}</h2>
                    <h2>{{ vehiculo.color }}</h2>
                  </div>
                  <router-link class="btnEdit" to="/home">
                    <span class="material-icons">edit_square</span>
                  </router-link>
                </div>
                <hr class="vehicle-separator" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal con carrusel de imágenes -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <span class="close-btn" @click="showModal = false">&times;</span>

        <div class="carousel">
          <button @click="prevImage" class="prev-btn" :disabled="currentIndex === 0">⬅</button>

          <div class="image-container">
            <img :src="images[currentIndex].src" alt="Imagen carrusel" class="modal-image" />
            <p class="image-text">{{ images[currentIndex].text }}</p>
          </div>

          <button @click="nextImage" class="next-btn" :disabled="currentIndex === images.length - 1">➡</button>
        </div>
      </div>
    </div>
  </div>
</template>



<script lang="ts" src="./ProfilePage.ts"></script>
<style src="./ProfilePage.css" scoped></style>
