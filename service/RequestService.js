import {ApiService} from './ApiService';

export const getRequestDetails = async id => {
  const res = ApiService().get(
    'http://data.vnas.com.vn:108/Purchasing/api/pr/get-pr',
    {params: {id}},
  );
  return res.data;
};
