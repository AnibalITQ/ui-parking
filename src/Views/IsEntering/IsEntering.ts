  
  export interface User {
    foto: string;
    nombre: string;
    noControl: string;
    placa: string;
    auto: string;
    color: string;
  }
  
export async function fetchUserData(): Promise<User> {
    // Simulación de una API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          foto: 'https://randomuser.me/api/portraits/men/1.jpg',
          nombre: 'Brian Emmanuel Hernández Zúñiga',
          noControl: '20140908',
          placa: 'UKF - 69 - 04',
          auto: 'Volkswagen Jetta',
          color: 'Azul'
        });
      }, 1000);
    });
  }
  