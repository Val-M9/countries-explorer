import axios from 'axios';

export const callApi = {
  async getAll() {
    const response = await axios.get<Record<string, string>[]>(
      'https://restcountries.com/v3.1/all',
    );
    return response.data;
  },

  async searchByName(name: string) {
    const response = axios.get(`https://restcountries.com/v3.1/name/${name}`);
    return response;
  },
};
