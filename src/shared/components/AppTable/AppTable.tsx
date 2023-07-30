import { CSSProperties, ReactNode, useState } from 'react';
import type { ScrollAreaProps, TableProps } from '@mantine/core';
import { createStyles, ScrollArea, Table } from '@mantine/core';
import _ from 'lodash-es';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

interface IAppHeader {
  label: string;
  key: string;
  align?: 'start' | 'center' | 'end';
  styles?: CSSProperties;
  clsName?: string;
  custom?: (key: string) => ReactNode;
}

type Dataset = Record<string, any>;

type Datasets<T extends Dataset = Dataset> = T[];

interface IAppTableProps {
  headers: IAppHeader[];
  datasets: Datasets;
  scrollAreaProps?: ScrollAreaProps;
  tableProps?: TableProps;
}

export default function AppTable({
  headers,
  datasets,
  scrollAreaProps,
  tableProps,
}: IAppTableProps) {
  const [scrolled, setScrolled] = useState(false);
  const { classes, cx } = useStyles();

  const rows = datasets.map((row, idx) => (
    <tr key={idx.toString()}>
      {Object.entries(row).map(([key, value]) => (
        <td key={key}>{value}</td>
      ))}
    </tr>
  ));

  return (
    <ScrollArea
      h={900}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      {...scrollAreaProps}
    >
      <Table
        miw={700}
        striped
        highlightOnHover
        withBorder
        withColumnBorders
        {...tableProps}
      >
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            {headers.map((h) => (
              <th
                className={h.clsName}
                style={_.merge({ textAlign: h.align ?? 'left' }, h.styles)}
                key={h.key}
              >
                {h.custom ? h.custom(h.key) : h.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
