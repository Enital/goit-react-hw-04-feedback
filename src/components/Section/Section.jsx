import React from "react";
import PropTypes from 'prop-types';

import css from './section.module.css'

function Section ({ title, children}) {
    return (
        <>
            <h1 className={css.title}> {title}</h1>
            {children}
        </>
    )
}

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
}