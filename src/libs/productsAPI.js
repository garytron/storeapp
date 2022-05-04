import axios from 'axios';

export const getProducts = async (limit = 0, sort = 'asc') => {
  try {
    return await axios.get(`${process.env.REACT_APP_API_URL}products?limit=${limit}&sort=${sort}`);
  } catch (error) {
    throw error;
  }
}

export const getProduct = async (id) => {
  try {
    return await axios.get(`${process.env.REACT_APP_API_URL}products/${id}`);
  } catch (error) {
    throw error;
  }
}

export const addProduct = async (data) => {
  try {
    return await axios.post(`${process.env.REACT_APP_API_URL}products`,data);
  } catch (error) {
    throw error;
  }
}

export const updateProduct = async (id, data) => {
  try {
    return await axios.put(`${process.env.REACT_APP_API_URL}products/${id}`,data);
  } catch (error) {
    throw error;
  }
}

export const deleteProduct = async (id) => {
  try {
    return await axios.delete(`${process.env.REACT_APP_API_URL}products/${id}`);
  } catch (error) {
    throw error;
  }
}