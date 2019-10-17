import React, { useState, useContext } from 'react';
import { Formik } from 'formik';
import { submitRegistration } from '../api';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import './Form.css';
import { AppContext } from '../helpers';
import translations from '../helpers/translations';

const Form = props => {
    const [currentStep, setStep] = useState(1);
    const {language, setMessage} = useContext(AppContext);
    return(
        <div className="Form">
            <Formik
                initialValues={{
                    fname: '', 
                    lname: '',  
                    email: '', 
                    username: '',
                    password: '',
                    password_confirm: '' 
                }}
                validate={values => {
                    let errors = {};
                    if (!values.fname) {
                        errors.fname = translations[language].required;
                    } else if (values.fname.length < 2) {
                        errors.fname = translations[language].minLength + ' 2';
                    } else if (values.fname.length > 25) {
                        errors.fname = translations[language].maxLength + ' 25';
                    }
                    if (values.lname.length < 2) {
                        errors.lname = translations[language].minLength + ' 2';
                    } else if (values.lname.length > 25) {
                        errors.lname = translations[language].maxLength + ' 25';
                    }
                    if (values.username.length < 4) {
                        errors.username = translations[language].minLength + ' 4';
                    } else if (values.username.length > 20) {
                        errors.username = translations[language].maxLength + ' 20';
                    }
                    if (!values.password.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/)){
                         errors.password = translations[language].passwordNotStrong;
                    }
                    if (values.password !== values.password_confirm){
                        errors.password_confirm = translations[language].passwordMustBeSame;
                    }
                    
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    const obj = {features: []};
                    Object.keys(values).forEach(key => {
                        obj.features.push({
                            code: key,
                            valueStr: values[key],
                            dataType: 'string'
                        });
                    });
                    const objJSON = JSON.stringify(obj);
                    submitRegistration(objJSON).then((res) => {
                        console.log(res.info.success);
                        if(res.info.success){
                            setMessage(translations[language].successMessage);
                        }else{
                            setMessage(translations[language].failMessage);
                        }
                        
                        setSubmitting(false);
                    });
                }}
                >
                {(props) => (
                    <form onSubmit={props.handleSubmit}>
                    <h1>{translations[language].signUp} ({translations[language].step} {currentStep})</h1>
                    <div>
                        <StepOne {...props} handleButtonClick={() => {
                            props.validateForm().then((errors) => {
                                props.setTouched({
                                    fname: true,
                                    lname: true
                                });
                                if(!errors.fname && !errors.lname){
                                    setStep(2);
                                }
                            });
                        }} className={currentStep === 1 ? '' : 'swipe-left-disappear'}/>
                        <StepTwo {...props} className={currentStep === 1 ? 'hidden' : 'swipe-left-appear'} />
                    </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Form;