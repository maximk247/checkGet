import axios from 'axios';
import { Pet } from './interfaces/pet.interface';

const fetchAvailablePets = async () => {
  try {
    const response = await axios.get<Pet[]>(
      'https://petstore3.swagger.io/api/v3/pet/findByStatus',
      {
        params: { status: 'available' },
      }
    );

    const pets = response.data;
    console.log('Доступные питомцы:', pets);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Ошибка при выполнении запроса:', error.message);
    } else {
      console.error('Неизвестная ошибка:', error);
    }
  }
};

fetchAvailablePets();
