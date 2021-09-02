import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import Select from 'react-select';

import { useMerchantList } from '@modules/hooks/useMerchant';
import type { TMerchant } from '@modules/entities/merchant';
import { MerchantTable } from '@components/Tables';

const Home: NextPage = () => {
  const [listData, setListData] = useState<TMerchant[] | undefined>(
    [],
  );
  const { data, isLoading, isError } = useMerchantList();
  const [options, setOptions] = useState([]);

  const handleFilter = (selected) => {
    if (selected) {
      setListData(data);
      setListData((prevState) =>
        prevState?.filter((item) => item.category === selected.value),
      );
    } else {
      setListData(data);
    }
  };

  // const options = [

  //   { value: 'car', label: 'Car' },
  //   { value: 'fashion', label: 'Fashion' },
  //   { value: 'other', label: 'Other' },
  // ]

  useEffect(() => {
    if (data) {
      setListData(data);
      const newMapping = data?.map((item) => ({
        value: item.category,
      }));
      const newArr = Array.from(
        new Set(newMapping.map((item) => item.value)),
      );
      setOptions(
        newArr.map((item) => ({
          value: item,
          label: item?.toUpperCase(),
        })),
      );
    }
  }, [data]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Krip - Coding Challange</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="p-12">
          <h1 className="text-center font-bold text-2xl">
            Merchant Listing
          </h1>
          <div className="mt-12">
            <div className="flex justify-between mb-2">
              <div className="mb-4 flex flex-row justify-start items-center">
                <h1>Select Filter by: </h1>
                <Select
                  instanceId="filterMerchant"
                  className="w-64 mx-4"
                  options={options}
                  onChange={handleFilter}
                  isClearable
                />
              </div>
              <Link href="/detail">
                <a className="btn btn-md">Add Merchant</a>
              </Link>
            </div>

            <MerchantTable data={listData} isLoading={isLoading} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
