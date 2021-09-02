import Datatable, {
  IDataTableColumn,
} from 'react-data-table-component';
import RatingStar from 'react-star-rating-component';
import { TMerchant } from '@modules/entities/merchant';
import Link from 'next/link';
import router from 'next/router';

interface IProps {
  data: TMerchant[];
  isLoading: boolean;
}

const MerchantTable: React.FC<IProps> = ({
  data,
  isLoading,
}: IProps) => {
  const columns: IDataTableColumn[] = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Label',
      selector: 'label',
      sortable: true,
      ignoreRowClick: false,
      cell: (row) => (
        <Link href={`/${row.id}`}>
          <a>{row.label}</a>
        </Link>
      ),
    },
    {
      name: 'Category',
      selector: 'category',
      sortable: true,
    },
    {
      name: 'Rating',
      selector: 'rating',
      sortable: true,
      cell: (row) => (
        <RatingStar
          name="Rating"
          editing={false}
          value={row.rating}
          starCount={5}
        />
      ),
    },
  ];

  const handleRedirect = (row) => {
    router.push(
      `/detail?id=${row.id}&label=${row.label}&category=${row.category}&rating=${row.rating}`,
    );
  };
  return (
    <Datatable
      progressPending={isLoading}
      noHeader
      pointerOnHover
      highlightOnHover
      onRowClicked={(row) => handleRedirect(row)}
      columns={columns}
      data={data}
    />
  );
};

export default MerchantTable;
