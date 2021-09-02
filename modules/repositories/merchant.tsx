import { TMerchant } from '@modules/entities/merchant';
import { checkData } from '@helpers/checkData';

export const getMerchantList = async (): Promise<TMerchant[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  })
    .then(() => {
      if (checkData) {
        return checkData();
      }
    })
    .catch((err) => console.log(err));
};

export const addMerchant = async (
  param: TMerchant,
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const data = await checkData();
      if (data) {
        const findData = data.find((item) => item.id === param.id);
        const findDataIndex = data.findIndex(
          (item) => item.id === param.id,
        );

        if (findData?.id !== param.id) {
          const newData = [
            ...data,
            {
              id: param.id,
              label: param.label,
              rating: param.rating,
              category: param.category,
            },
          ];
          localStorage.setItem('merchants', JSON.stringify(newData));
        } else {
          const filterData = data.filter(
            (item) => item.id !== findData.id,
          );
          localStorage.setItem(
            'merchants',
            JSON.stringify([
              ...filterData,
              {
                id: findData.id,
                label: param.label,
                rating: param.rating,
                category: param.category,
              },
            ]),
          );
        }
      }
      resolve(true);
    }, 1000);
  }).then(() => {
    console.log('CHECK DATA: ', checkData());
  });
};
