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
          <h1 class="audiowide-regular move-center">Perfil de Usuario</h1>
          <h2 class="audiowide-regular">Descripción general</h2>
          <h3 class="audiowide-regular">Nombre: 
            <span class="text-value">Kevin Emmanuel Guerrero Aguilar</span>
            <!--prueba de que kega es puto-->
          </h3>
          <h3 class="audiowide-regular">Num. de control: 
            <span class="text-value">21140791</span>
          </h3>
          <h3 class="audiowide-regular">Status: 
            <span class="text-value">Estudiante</span>
          </h3>
          <h3 class="audiowide-regular spaces">Vehiculos: 
            <router-link class="button" to="/Home">
              <span class="material-icons">arrow_right_alt</span>
            </router-link>
          </h3>
          <router-link class="btnSession" to="/">
            <span class="text">cerrar sessión</span>
          </router-link>
        </div>
      </div>    
    </div>
  </div>
</template>

<script lang="ts" src="./ProfilePage.ts"></script>
<style src="./ProfilePage.css" scoped></style>
