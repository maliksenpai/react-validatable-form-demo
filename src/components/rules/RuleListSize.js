import { useState } from 'react';
import { useValidatableForm } from 'react-validatable-form';
import { get } from 'lodash';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ruleOptions } from '../../constants/Constants';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ValidationResult from '../ValidationResult';
import CurrentRulesInfo from '../CurrentRulesInfo';
import { options } from '../../constants/Data';

const defaultComparisonValue = 3;
const listSizeRule = { rule: 'listSize' };
listSizeRule[ruleOptions[0]] = defaultComparisonValue;
const rules = [{ path: 'val', ruleSet: ['required', listSizeRule], dependantPaths: ['comparisonValue'] }];
const initialFormData = {
    val: [...options].slice(0, 2),
    ruleOption: ruleOptions[0],
    comparisonValue: defaultComparisonValue,
};

const RuleListSize = () => {
    const [isValid, validationError, formData, { setPathValue, setRules }] = useValidatableForm({
        rules,
        initialFormData,
    });
    const [currentRules, setCurrentRules] = useState(rules);
    const [ruleOption, setRuleOption] = useState(ruleOptions[0]);
    const [isFunc, setIsFunc] = useState(false);

    const updateRules = (funcParam, ruleParam) => {
        const newRules = [...rules];
        const newRuleSet = [...newRules[0].ruleSet];
        const newRule = { rule: 'listSize' };
        if (funcParam) {
            newRule[ruleParam] = (formData) => formData['comparisonValue'];
        } else {
            newRule[ruleParam] = defaultComparisonValue;
        }
        newRuleSet.splice(1, 1, newRule);
        newRules[0].ruleSet = newRuleSet;
        setCurrentRules(newRules);
        setRules(newRules);
    };

    const handleSetIsFunc = (newValue) => {
        updateRules(newValue, ruleOption);
        setIsFunc(newValue);
    };

    const handleRuleOptionChange = (newValue) => {
        updateRules(isFunc, newValue);
        setRuleOption(newValue);
    };

    return (
        <ExampleUsageWrapper header="listSize" codeUrl="components/rules/RuleListSize.js">
            <div className="comparisonDiv">
                <Autocomplete
                    multiple
                    value={get(formData, 'val')}
                    onChange={(event, newValue) => {
                        setPathValue('val', newValue);
                    }}
                    options={options}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            error={!!validationError.val}
                            helperText={validationError.val || ' '}
                            label="equalTo"
                        />
                    )}
                />

                <Autocomplete
                    className="ruleOptionComponent"
                    value={ruleOption}
                    onChange={(event, newValue) => {
                        handleRuleOptionChange(newValue);
                    }}
                    options={ruleOptions}
                    disableClearable={true}
                    renderInput={(params) => <TextField {...params} label="ruleOption" />}
                />
                {isFunc ? (
                    <TextField
                        className="comparisonComponent"
                        label="comparisonValue"
                        type="number"
                        value={get(formData, 'comparisonValue')}
                        onChange={(e) => setPathValue('comparisonValue', e.target.value)}
                    />
                ) : (
                    <TextField
                        disabled={true}
                        className="comparisonComponent"
                        label="comparisonValue"
                        type="number"
                        value={defaultComparisonValue}
                        onChange={() => {}}
                    />
                )}
                <FormGroup className={'checkboxOnRight'}>
                    <FormControlLabel
                        control={<Checkbox checked={isFunc} onChange={(e) => handleSetIsFunc(e.target.checked)} />}
                        label="as Function"
                    />
                </FormGroup>
            </div>
            <ValidationResult isValid={isValid} />
            <CurrentRulesInfo currentRules={currentRules} />
        </ExampleUsageWrapper>
    );
};

export default RuleListSize;