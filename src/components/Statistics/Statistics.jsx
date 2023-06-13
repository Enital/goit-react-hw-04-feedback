import React from "react";
import css from './statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, percentage }) {
    if (!percentage) { percentage = 0 };
    let spanColor = 'white';
    let fontColor = 'black';
    if (percentage <= 33) { spanColor = 'red'; fontColor = 'white'};
    if(percentage>33 && percentage<=66) spanColor='yellow';
    if (percentage > 66) { spanColor = 'green'; fontColor = 'white'; }

    return (
        <div className={css.section}>           
            <ul className={css.stats}>
                <span className={css.stat}>Good: { good }</span>
                <span className={css.stat}>Neutral: { neutral }</span>
                <span className={css.stat}>Bad: { bad }</span>
            </ul>
            <span>Total: { total }</span>
            <span style={{backgroundColor:spanColor, color: fontColor}}>Positive feedback: { percentage }%</span>
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