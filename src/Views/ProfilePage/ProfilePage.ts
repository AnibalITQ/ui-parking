import { ref } from 'vue';
import image1 from '@/assets/first.jpg';
import image2 from '@/assets/middle.jpg';
import image3 from '@/assets/last.jpg';

const showModal = ref(false);

const images = ref([
  {src: image1, text: 'Abrir el SII e ingresar con tus datos'}, 
  {src: image2, text: 'Nos vamos a actualizar datos de contacto'}, 
  {src: image3, text: 'Bajamos y nos vamos al campo de telefono y guardamos'}
]);

const currentIndex = ref(0);

// Función para avanzar la imagen
const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

// Función para retroceder la imagen
const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};

export default {
  name: 'ProfilePage',
  setup() {
    return {
      showModal,
      images,
      currentIndex,
      nextImage,
      prevImage
    };
  },
  data() {
    return {
      vehiculos: [
        {
          qrImage: '@/assets/QRSFox.svg',
          nombre: 'Volkswagen Jetta',
          placa: 'UKF-69-04',
          modelo: '2015',
          color: 'Azul',
        },
        {
          qrImage: '@/assets/QRSFox.svg',
          nombre: 'Nissan Altima',
          placa: 'XYZ-12-34',
          modelo: '2018',
          color: 'Negro',
        },
        // Puedes añadir más vehículos aquí
      ]
    };
  },
};
