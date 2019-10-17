import React, { useContext } from 'react';
import { AppContext } from '../helpers';
import translations from '../helpers/translations';

const StepOne = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    handleButtonClick,
    className
}) => {
    const {language} = useContext(AppContext);
    return(
        <div className={'StepOne ' + className}>
        <input
            type="text"
            name="fname"
            placeholder={translations[language].firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fname}
        />
        <p className="error">{errors.fname && touched.fname && errors.fname}</p>
        <input
            type="text"
            name="lname"
            placeholder={translations[language].lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lname}
        />
        <p className="error">{errors.lname && touched.lname && errors.lname}</p>
        <button type="button" onClick={handleButtonClick}>
            {translations[language].next}
        </button>
        </div>
    );
}

export default StepOne;