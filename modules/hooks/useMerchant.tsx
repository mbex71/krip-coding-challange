import { useMutation, useQuery } from 'react-query';
import type { UseQueryResult, UseMutationResult } from 'react-query';

import { TMerchant } from '@modules/entities/merchant';
import {
  getMerchantList,
  addMerchant,
} from '@modules/repositories/merchant';

export const useMerchantList = () =>
  useQuery<TMerchant[], Error>('merchantList', getMerchantList);

export const useAddMerchant = (): UseMutationResult<
  unknown,
  unknown,
  TMerchant,
  unknown
> => useMutation((param: TMerchant) => addMerchant(param));
