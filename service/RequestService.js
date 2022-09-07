import {ApiService} from './ApiService';

export const RequestServices = {
  getRequestDetails: async id => {
    const res = await (
      await ApiService()
    ).get('Purchasing/api/pr/get-pr', {
      params: {id},
    });
    return res.data;
  },
};
