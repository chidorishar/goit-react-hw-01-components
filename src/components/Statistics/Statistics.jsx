import {
  StatisticsCard,
  CardTitle,
  StatisticsList,
  StatisticItem,
  StatisticsCaption,
  StatisticNumber,
} from './Statistics.styled';

function Statistics({ title = '', stats }) {
  return (
    <StatisticsCard>
      {title ? <CardTitle>{title}</CardTitle> : null}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id}>
            <StatisticsCaption>{label}</StatisticsCaption>
            <StatisticNumber>{percentage}%</StatisticNumber>
          </StatisticItem>
        ))}
      </StatisticsList>
    </StatisticsCard>
  );
}

export { Statistics };
