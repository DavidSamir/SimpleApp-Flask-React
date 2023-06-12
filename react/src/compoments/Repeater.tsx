import React, { useState } from 'react';

const RepeaterForm: React.FC = () => {
    const [inputText, setInputText] = useState<string>('');
    const [inputNumber, setInputNumber] = useState<number>(0);
    const [repeatedText, setRepeatedText] = useState<string>('');

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setInputNumber(isNaN(value) ? 0 : value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (inputText.trim() === '' || inputNumber <= 0) { return; }
        const repeated = (inputText + ' ').repeat(inputNumber);
        setRepeatedText(repeated);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Input Text:
                        <input
                            type="text"
                            value={inputText}
                            onChange={handleTextChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Input Number:
                        <input
                            type="number"
                            value={inputNumber}
                            onChange={handleNumberChange}
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>

            {repeatedText && (
                <>
                    <h6>Output:</h6>
                    <p>
                        {repeatedText}
                    </p>
                </>
            )}
        </div>
    );
};

export default RepeaterForm;
