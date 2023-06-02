import axios from 'axios';

axios.defaults.baseURL =
  'https://647a1caaa455e257fa64545f.mockapi.io/api/users';

export const getUsers = async (page = 1) => {
  const { data } = await axios.get(`?page=${page}&limit=3`);
  return data;
};
