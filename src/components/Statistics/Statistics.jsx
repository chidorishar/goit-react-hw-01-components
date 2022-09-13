import { getRandomHSLColor } from 'utils/getRandomColor';
import { Box } from 'components/common/Box/Box.styled';
import {
  CardTitle,
  StatisticItem,
  StatisticsCaption,
  StatisticNumber,
} from './Statistics.styled';

export function Statistics({ title = '', stats }) {
  return (
    <Box
      width="cardWide"
      mt={4}
      mr="auto"
      ml="auto"
      borderRadius="normal"
      overflow="hidden"
      textAlign="center"
      boxShadow="medium"
      as="section"
    >
      {title ? <CardTitle>{title}</CardTitle> : null}

      <Box display="flex" m={0} p={0} as="ul">
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} backgroundColor={getRandomHSLColor()}>
            <StatisticsCaption>{label}</StatisticsCaption>
            <StatisticNumber>{percentage}%</StatisticNumber>
          </StatisticItem>
        ))}
      </Box>
    </Box>
  );
}
