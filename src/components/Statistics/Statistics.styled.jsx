import styled from '@emotion/styled';

export const CardTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes[4]}px;
  text-transform: uppercase;
  margin: 0;
  padding: ${p => p.theme.space[4]}px;
`;

export const StatisticItem = styled.li`
  flex-grow: 1;
  padding: ${p => p.theme.space[3]}px;

  list-style: none;
  background-color: ${p => p.backgroundColor};
  color: ${p => p.theme.colors.textLight};
`;

export const StatisticsCaption = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const StatisticNumber = styled.span`
  display: block;
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
`;
