<template>
    <div class="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg shadow-lg overflow-y-auto w-full max-w-md h-[80vh] sm:h-[70vh] min-h-[500px] mx-auto">

        <div class="h-[40%] w-full flex justify-center items-center pt-4">
          <img class="h-full w-full object-contain" alt="Estacionamiento" src="../assets/ejemplo.png" />
        </div>
  
        <div class="Items mt-auto pt-8">
          <v-simple-table>
            <tbody>
              <tr>
                <td colspan="2" class="border-t border-black my-1"></td>
              </tr>
              <tr>
                <td>Cajones estudiantes disponibles</td>
                <td style="text-align: right;">{{ cajonesDisponiblesAlumnos }}</td>
              </tr>
              <tr>
                <td>Cajones profesores disponibles</td>
                <td style="text-align: right;">{{ cajonesDisponiblesProfesores }}</td>
              </tr>
              <tr>
                <td colspan="2" class="border-t border-black my-2"></td>
              </tr>
              <tr>
                <td>Cajones estudiantes ocupados</td>
                <td style="text-align: right;">{{ cajonesOcupadosAlumnos }}</td>
              </tr>
              <tr>
                <td>Cajones profesores ocupados</td>
                <td style="text-align: right;">{{ cajonesOcupadosProfesores }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
  
        <div class="qr-icon" style="text-align: right; margin-top: 20px; margin-right: 20px;">
          <i class="fas fa-qrcode" style="font-size: 120px; cursor: pointer;" @click="irAQR"></i>
          <hr />
        </div>

        <div class="qr-container flex justify-end">
          <img src="../assets/Qr.svg" alt="Qr Code" />
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "ParkingStatus",
    data() {
      return {
        cajonesDisponiblesAlumnos: 150 as number,
        cajonesDisponiblesProfesores: 50 as number,
        cajonesOcupadosAlumnos: 50 as number,
        cajonesOcupadosProfesores: 20 as number,
      };
    },
    methods: {
      irAQR(): void {
        console.log("Redirigiendo al QR...");
      },
    },
  });
  </script>
  
  <style scoped>
  td {
    font-size: 20px;
    padding: 8px;
  }
  
  .qr-container {
  margin-top: -20px;
}

.qr-container img {
  width: 15%; /* Reduce el tamaño a la mitad */
  height: auto; /* Mantén las proporciones del SVG */
}
  </style>
  