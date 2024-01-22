import { baseUrl } from '@/app/core/services/baseUrl';
import { userListMapper } from '@/app/user/api/api.mapper';

export const getUsers = async () => {
  return new Promise((resolve, reject) => {
    baseUrl
      .get('/users')
      .then((response) => {
        resolve(userListMapper(response.data));
      })
      .catch((error: unknown) => {
        console.log(error);
        reject(error);
      })
  })
};
