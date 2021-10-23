import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import './Installation.css';
import { useState } from 'react';

const npmCommandHeader = '// with npm';
const npmCommand = 'npm install react-validatable-form';
const yarnCommandHeader = '// with yarn';
const yarnCommand = 'yarn add react-validatable-form';

const Installation = () => {
    const [npmCopied, setNpmCopied] = useState(false);
    const [yarnCopied, setYarnCopied] = useState(false);

    const handleNpmCopy = () => {
        setYarnCopied(false);
        setNpmCopied(true);
        navigator.clipboard.writeText(npmCommand);
        setTimeout(() => {
            setNpmCopied(false);
        }, 1000);
    };

    const handleYarnCopy = () => {
        setNpmCopied(false);
        setYarnCopied(true);
        navigator.clipboard.writeText(yarnCommand);
        setTimeout(() => {
            setYarnCopied(false);
        }, 1000);
    };

    return (
        <ExampleUsageWrapper header="Installation">
            <div className="outsideUrlSpan">
                <a href={'https://www.npmjs.com/package/react-validatable-form'} target="_blank" rel="noreferrer">
                    View on npmjs
                </a>
            </div>

            <div className="outsideUrlSpan">
                <a href={'https://github.com/obss/react-validatable-form'} target="_blank" rel="noreferrer">
                    View on GitHub
                </a>
            </div>

            <div className="installButtonsDiv">
                <Tooltip open={npmCopied} placement="top" title="copied!">
                    <Button variant="outlined" onClick={handleNpmCopy}>
                        <div className="commandBox">
                            <p>{npmCommandHeader}</p>
                            <p className="commandText">{npmCommand}</p>
                        </div>
                        <span className="installButtonIcon">
                            {npmCopied ? <DoneOutlineIcon /> : <ContentCopyIcon />}
                        </span>
                    </Button>
                </Tooltip>
                <Tooltip open={yarnCopied} placement="bottom" title="copied!">
                    <Button variant="outlined" onClick={handleYarnCopy}>
                        <div className="commandBox">
                            <p>{yarnCommandHeader}</p>
                            <p className="commandText">{yarnCommand}</p>
                        </div>
                        <span className="installButtonIcon">
                            {yarnCopied ? <DoneOutlineIcon /> : <ContentCopyIcon />}
                        </span>
                    </Button>
                </Tooltip>
            </div>
        </ExampleUsageWrapper>
    );
};

export default Installation;
