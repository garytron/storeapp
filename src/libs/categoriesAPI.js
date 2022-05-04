import axios from 'axios';

export const getCategories = async () => {
  try {
    return await axios.get(`${process.env.REACT_APP_API_URL}products/categories`);
  } catch (error) {
    throw error;
  }
}