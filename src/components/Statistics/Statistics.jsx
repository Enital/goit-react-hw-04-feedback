import React from "react";
import css from './statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, percentage }) {
    if (!percentage) { percentage = 0 };

    return (
        <div className={css.section}>           
            <ul className={css.stats}>
                <span className={css.stat}>Good: { good }</span>
                <span className={css.stat}>Neutral: { neutral }</span>
                <span className={css.stat}>Bad: { bad }</span>
            </ul>
            <span>Total: { total }</span>
            <span>Positive feedback: { percentage }%</span>
        </div>
    )
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
}