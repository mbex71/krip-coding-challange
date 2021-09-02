import { TMerchant } from '@modules/entities/merchant';

export const checkData = async () => {
  const getData = localStorage.getItem('merchants');
  if (!getData) {
    const data = [
      {
        id: 1,
        label: 'MerchantA',
        category: 'car',
        rating: 5,
      },
      {
        id: 2,
        label: 'MerchantB',
        category: 'fashion',
        rating: 4,
      },
      {
        id: 3,
        label: 'MerchantC',
        category: 'fashion',
        rating: 5,
      },
      {
        id: 4,
        label: 'MerchantD',
        category: 'other',
        rating: 5,
      },
    ];

    localStorage.setItem('merchants', JSON.stringify(data));
  }

  return JSON.parse(getData);
};
