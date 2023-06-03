import styles from './TweetsPage.module.css';
import { useState } from 'react';
import Users from 'components/Users/Users';
import ButtonGoBack from 'components/ButtonGoBack/ButtonGoBack';
import FilterDropdown from 'components/FilrerDropdawn/FilterDropdown';

const TweetsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('show all');

  const handleFilterChange = (selectedValue) => {
    setSelectedFilter(selectedValue);
};

  return (
    <div>
      <div className={styles.btnWrapper}>
        <ButtonGoBack />
        <FilterDropdown onChange={handleFilterChange} />
      </div>
      <Users filter={selectedFilter}/>
    </div>
  );
};
export default TweetsPage;
