import PropTypes from 'prop-types';
import { Section, TitleStatistics, List, Item, Percentage } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <TitleStatistics>{title}</TitleStatistics>}

      <List>
        {stats.map(element => (
          <Item key={element.id} type={element.label}>
            <span>{element.label}</span>
            <Percentage>{element.percentage}</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};