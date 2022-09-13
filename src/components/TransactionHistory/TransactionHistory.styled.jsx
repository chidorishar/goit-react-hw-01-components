import styled from '@emotion/styled';

export const TableHead = styled.thead`
  font-size: ${p => p.theme.fontSizes[1]}px;
  text-transform: uppercase;

  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.backgroundLight};
`;

export const TableHeadRow = styled.tr`
  border: ${p => p.theme.borders.small};

  border-color: ${p => p.theme.colors.light};
`;

export const TableHeadCaption = styled.th`
  width: 10px;
  padding: ${p => p.theme.space[3]}px;

  border: inherit;
`;

export const TableBody = styled.tbody``;

export const TableBodyRow = styled.tr`
  border: ${p => p.theme.borders.small};

  border-color: ${p => p.theme.colors.light};

  &:nth-of-type(2n) {
    background-color: ${p => p.theme.colors.backgroundLight};
  }
`;

export const TableData = styled.td`
  font-weight: ${p => p.theme.fontWeights.medium};
  text-transform: capitalize;
  border: inherit;
  padding: ${p => p.theme.space[2]}px;

  color: ${p => p.theme.colors.grey};
`;
