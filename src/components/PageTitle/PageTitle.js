// React imports
import React from 'react';
// Helpers imports
import PropTypes from 'prop-types';
// Styles imports
import styles from './PageTitle.module.css';

const PageTitle = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

PageTitle.defaultProps = {
  title: '',
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
