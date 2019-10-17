import React, {useContext} from 'react';
import { BeatLoader } from 'react-spinners';
import { AppContext } from '../helpers';
import translations from '../helpers/translations';

const StepTwo = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    className
}) => {
    const {language} = useContext(AppContext);
    return(
        <div className={'StepTwo ' + className}>
        <input
            type="text"
            name="username"
            placeholder={translations[language].username}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
        />
        <p className="error">{errors.username && touched.username && errors.username}</p>
        <input
            type="email"
            name="email"
            placeholder={translations[language].email}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
        />
        <p className="error">{errors.email && touched.email && errors.email}</p>
        
        <input
            type="password"
            name="password"
            placeholder={translations[language].password}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
        />
        <p className="error">{errors.password && touched.password && errors.password}</p>
        
        <input
            type="password"
            name="password_confirm"
            placeholder={translations[language].confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password_confirm}
        />
        <p className="error">{errors.password_confirm && touched.password_confirm && errors.password_confirm}</p>
        
        <button type="submit" disabled={isSubmitting}>
            {translations[language].submit}
            <BeatLoader
                css={{
                    float: 'right',
                    marginLeft: '10px'
                }}
                sizeUnit={"px"}
                size={10}
                color={'#60C0E6'}
                loading={isSubmitting}
            />
        </button>
        </div>
    );
}

export default StepTwo;