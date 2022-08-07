import { useState } from "react";
import Input from "../Input";

function Footer() {
    const [guessNumber, setGuessNumber] = useState('');

    const changeGuessNumber = (value: string) => {
        if (value.includes('e') || value.includes('.')) return;

        setGuessNumber(value);
    }

    return (
        <div>
            <Input
                name={'guessNumber'}
                value={guessNumber}
                onChange={changeGuessNumber}
                placeholder={'Digite o palpite'}
                type={'number'}
            />
        </div>
    );
}

export default Footer;