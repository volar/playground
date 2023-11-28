/* eslint-disable */
import { useState } from 'react';

type TableData = Record<string, string | number> & { id: string };

type Sort = 'asc' | 'desc' | 'neutral';

type TableProps = {
  data: TableData[];
  columns: string[];
  onSort?: (sortType: Sort, column: string) => void;
};

const getNextSort = (currentSort: Sort): Sort => {
  if (currentSort === 'neutral') return 'asc';
  if (currentSort === 'asc') return 'desc';
  return 'neutral';
};

export const Table = ({ data, columns, onSort }: TableProps) => {
  const [currentSort, setCurrentSort] = useState<Sort>('neutral');

  const onTableHeaderClick = (clickedColumn: string) => {
    if (!onSort) return;

    const newSort = getNextSort(currentSort);
    onSort(newSort, clickedColumn);
    setCurrentSort(newSort);
  };

  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} onClick={() => onTableHeaderClick(col)}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((tableData) => {
          return (
            <tr key={tableData.id}>
              {columns.map((col, idx) => {
                return <td key={`tableData-${tableData.id}-${idx}`}>{tableData[col.toLowerCase()]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
