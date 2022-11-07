import axios from 'axios';

export const callApi = {
  async getAll() {
    try {
      const response = await axios.get<Record<string, any>[]>('https://restcountries.com/v3.1/all');
      return response.data;
    } catch (error: any) {
      if (error.response) {
        console.log('Response error:', error.response.data);
      } else if (error.request) {
        console.log('Request error:', error.request);
      } else {
        console.log(error.message);
      }
    }
  },

  async getByName(name: string) {
    try {
      const response = await axios.get<Record<string, any>>(
        `https://restcountries.com/v3.1/name/${name}`,
      );
      return response.data;
    } catch (error: any) {
      if (error.response) {
        console.log('Response error:', error.response.data);
      } else if (error.request) {
        console.log('Request error:', error.request);
      } else {
        console.log(error.message);
      }
    }
  },

  async getByCode(codes: string) {
    try {
      const response = await axios.get<Record<string, any>[]>(
        `https://restcountries.com/v3.1/alpha?codes=${codes}`,
      );
      return response.data;
    } catch (error: any) {
      if (error.response) {
        console.log('Response error:', error.response.data);
      } else if (error.request) {
        console.log('Request error:', error.request);
      } else {
        console.log(error.message);
      }
    }
  },
};
