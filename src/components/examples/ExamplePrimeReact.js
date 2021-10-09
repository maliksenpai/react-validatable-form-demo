import { useState } from 'react';
import { useValidatableForm } from 'react-validatable-form';
import { get } from 'lodash';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import ValidationResult from '../ValidationResult';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { AutoComplete } from 'primereact/autocomplete';
import { Dialog } from 'primereact/dialog';
import FormSubmitResult from '../FormSubmitResult';
import { options } from '../../constants/Data';
import CurrentRulesInfo from '../CurrentRulesInfo';

const rules = [
    { path: 'textVal1', ruleSet: [{ rule: 'required' }] },
    { path: 'textVal2', ruleSet: [{ rule: 'required' }] },
    { path: 'numVal', ruleSet: [{ rule: 'required' }] },
    { path: 'selectVal', ruleSet: [{ rule: 'required' }] },
];

const primeReactElementsFocusHandler = (elementId) => {
    const element = document.getElementById(elementId);
    if (!element) {
        console.warn(`Dom element with id ${elementId} could not be found`);
    } else {
        const tagName = element.tagName;
        if (tagName.toUpperCase() === 'INPUT') {
            element.focus();
        } else {
            var inputNodes = element.getElementsByTagName('INPUT');
            for (var i = 0; i < inputNodes.length; ++i) {
                var inputNode = inputNodes[i];
                inputNode.focus();
                return;
            }
        }
    }
};

const ExamplePrimeReact = () => {
    const [
        isValid,
        validationError,
        formData,
        { setPathValue, setFormIsSubmitted, setPathIsBlurred },
    ] = useValidatableForm({
        rules,
        hideBeforeSubmit: true,
        showAfterBlur: true,
        focusToErrorAfterSubmit: true,
        elementFocusHandler: primeReactElementsFocusHandler,
    });
    const [dialogOpen, setDialogOpen] = useState(false);
    const [filterVal, setFilterVal] = useState(null);

    const handleFilter = (ev) => {
        setFilterVal(ev.query);
    };

    const handleFormSubmit = () => {
        const submitResultValid = setFormIsSubmitted();
        if (submitResultValid) {
            setDialogOpen(true);
        }
    };

    const filteredOptions = filterVal ? options.filter((o) => o.includes(filterVal)) : [...options];

    return (
        <ExampleUsageWrapper
            header="Example Usage with PrimeReact Components"
            codeUrl="components/examples/ExamplePrimeReact.js"
        >
            <div>
                <div className="my-prime-div">
                    <label htmlFor="textVal1">Text1</label>
                    <InputText
                        className={get(validationError, 'textVal1') && 'p-invalid'}
                        value={get(formData, 'textVal1') || ''}
                        onChange={(e) => setPathValue('textVal1', e.target.value)}
                        onBlur={() => setPathIsBlurred('textVal1')}
                        id="textVal1"
                    />
                    <small className="p-error">{get(validationError, 'textVal1') || ' '}</small>
                </div>
                <div className="my-prime-div">
                    <label htmlFor="textVal2">Text2</label>
                    <InputText
                        className={get(validationError, 'textVal2') && 'p-invalid'}
                        value={get(formData, 'textVal2') || ''}
                        onChange={(e) => setPathValue('textVal2', e.target.value)}
                        onBlur={() => setPathIsBlurred('textVal2')}
                        id="textVal2"
                    />
                    <small className="p-error">{get(validationError, 'textVal2') || ' '}</small>
                </div>
                <div className="my-prime-div">
                    <label htmlFor="numVal">Num Val</label>
                    <InputNumber
                        className={get(validationError, 'numVal') && 'p-invalid'}
                        value={get(formData, 'numVal') || ''}
                        onChange={(e) => setPathValue('numVal', e.value)}
                        onBlur={() => setPathIsBlurred('numVal')}
                        id="numVal"
                    />
                    <small className="p-error">{get(validationError, 'numVal') || ' '}</small>
                </div>
                <div className="my-prime-div">
                    <label htmlFor="selectVal">Select Val</label>
                    <AutoComplete
                        multiple
                        className={get(validationError, 'selectVal') && 'p-invalid'}
                        value={get(formData, 'selectVal') || []}
                        suggestions={filteredOptions}
                        completeMethod={handleFilter}
                        onChange={(e) => setPathValue('selectVal', e.value)}
                        onBlur={() => setPathIsBlurred('selectVal')}
                        id="selectVal"
                    />
                    <small className="p-error">{get(validationError, 'selectVal') || ' '}</small>
                </div>
                <div>
                    <Button className="mySubmitButton" onClick={() => handleFormSubmit()}>
                        Submit Form
                    </Button>
                </div>
                <ValidationResult isValid={isValid} />
                <CurrentRulesInfo currentRules={rules} />
            </div>
            <Dialog
                header="Form Data Submitted"
                visible={dialogOpen}
                modal
                style={{ width: '50vw' }}
                onHide={() => setDialogOpen(false)}
                onMaskClick={() => setDialogOpen(false)}
                draggable={false}
                resizable={false}
            >
                <FormSubmitResult formData={formData} />
            </Dialog>
        </ExampleUsageWrapper>
    );
};

export default ExamplePrimeReact;
