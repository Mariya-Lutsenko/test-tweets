import PropTypes from 'prop-types';
import styles from './FilterDropdown.module.css';
import { useState, useEffect } from 'react';

const FilterDropdown = ({ onChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('show all');

  const handleFilterChange = e => {
    const selectedValue = e.target.value;
    setSelectedFilter(selectedValue);
    onChange(selectedValue);
    localStorage.setItem('selectedFilter', selectedValue);
  };

  useEffect(() => {
    const storedSelectedFilter = localStorage.getItem('selectedFilter');
    if (storedSelectedFilter) {
      setSelectedFilter(storedSelectedFilter);
      onChange(storedSelectedFilter);
    }
  }, [onChange]);

  return (
    <div className={styles.filterWrapper}>
      <label className={styles.label} htmlFor="filter">
        Filter:
      </label>
      <select
        className={styles.select}
        value={selectedFilter}
        onChange={handleFilterChange}
      >
        <option className={styles.optionName} value="show all">
          Show All
        </option>
        <option className={styles.optionName} value="follow">
          Follow
        </option>
        <option className={styles.optionName} value="followings">
          Followings
        </option>
      </select>
    </div>
  );
};

FilterDropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterDropdown;
