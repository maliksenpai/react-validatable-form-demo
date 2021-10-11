import { useState } from 'react';
import { useValidatableForm } from 'react-validatable-form';
import { get } from 'lodash';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import ValidationResult from '../ValidationResult';
import CurrentRulesInfo from '../CurrentRulesInfo';
import { Dialog, DialogTitle } from '@mui/material';
import FormSubmitResult from '../FormSubmitResult';
import { options } from '../../constants/Data';

const initialFormData = {};

const rules = [
    { path: 'textVal1', ruleSet: [{ rule: 'required' }] },
    { path: 'textVal2', ruleSet: [{ rule: 'required' }, { rule: 'length', greaterThanOrEqualTo: 7 }] },
    { path: 'val3', ruleSet: [{ rule: 'required' }, { rule: 'listSize', equalTo: 2 }] },
    { path: 'textVal4', ruleSet: [{ rule: 'required' }, { rule: 'url' }] },
];

const AdvancedShowAfterBlur = () => {
    const [
        isValid,
        validationError,
        formData,
        { setPathValue, setFormIsSubmitted, setPathIsBlurred },
    ] = useValidatableForm({
        rules,
        initialFormData,
        hideBeforeSubmit: true,
        showAfterBlur: true,
    });
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleFormSubmit = () => {
        const submitResultValid = setFormIsSubmitted();
        if (submitResultValid) {
            setDialogOpen(true);
        }
    };

    return (
        <ExampleUsageWrapper header="showAfterBlur" codeUrl="components/advanced/AdvancedShowAfterBlur.js">
            <div>
                <div className={'formField'}>
                    <TextField
                        id={'textVal1'}
                        error={!!get(validationError, 'textVal1')}
                        helperText={get(validationError, 'textVal1') || ' '}
                        label="requiredField"
                        type="text"
                        value={get(formData, 'textVal1') || ''}
                        onChange={(e) => setPathValue('textVal1', e.target.value)}
                        onBlur={() => setPathIsBlurred('textVal1')}
                    />
                    <TextField
                        id={'textVal2'}
                        error={!!get(validationError, 'textVal2')}
                        helperText={get(validationError, 'textVal2') || ' '}
                        label="requiredAndLengthField"
                        type="text"
                        value={get(formData, 'textVal2') || ''}
                        onChange={(e) => setPathValue('textVal2', e.target.value)}
                        onBlur={() => setPathIsBlurred('textVal2')}
                    />
                    <Autocomplete
                        id={'val3'}
                        multiple
                        value={get(formData, 'val3') || []}
                        onChange={(event, newValue) => {
                            setPathValue('val3', newValue);
                        }}
                        onBlur={() => setPathIsBlurred('val3')}
                        options={options}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                error={!!get(validationError, 'val3')}
                                helperText={get(validationError, 'val3') || ' '}
                                label="requiredAndListSize"
                            />
                        )}
                    />
                    <TextField
                        id={'textVal4'}
                        error={!!get(validationError, 'textVal4')}
                        helperText={get(validationError, 'textVal4') || ' '}
                        label="requiredAndUrl"
                        type="text"
                        value={get(formData, 'textVal4') || ''}
                        onChange={(e) => setPathValue('textVal4', e.target.value)}
                        onBlur={() => setPathIsBlurred('textVal4')}
                    />
                </div>
                <div>
                    <Button className="mySubmitButton" variant="contained" onClick={() => handleFormSubmit()}>
                        Submit Form
                    </Button>
                </div>
                <ValidationResult isValid={isValid} />
                <CurrentRulesInfo currentRules={rules} />
            </div>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>Form Data Submitted</DialogTitle>
                <FormSubmitResult formData={formData} />
            </Dialog>
        </ExampleUsageWrapper>
    );
};

export default AdvancedShowAfterBlur;