import { StatisticsData } from './StatisticsData';
import { Container, Title, List, BoxUl } from './Statistics.styled';

export const Statistics = ({ title, statistics }) => (
  <Container>
    <Title>{title}</Title>

    <BoxUl>
      {statistics.map(item => (
        <List key={item.id}>
          <StatisticsData statistics={item} />
        </List>
      ))}
    </BoxUl>
  </Container>
);
