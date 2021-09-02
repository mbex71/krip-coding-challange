import { useQuery } from "react-query";
import type { UseQueryResult } from "react-query";

import { getMerchantList } from "@modules/repositories/merchant";
import { TMerchant } from "@modules/entities/merchant";

export const useMerchantList = () =>
  useQuery<TMerchant[], Error>("merchantList", getMerchantList);
