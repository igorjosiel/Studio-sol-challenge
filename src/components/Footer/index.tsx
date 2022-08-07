import { useState } from "react";
import { Input, Button } from "../index";

function Footer() {
    const [guessNumber, setGuessNumber] = useState('');

    const changeGuessNumber = (value: string) => {
        if (value.includes('e') || value.includes('.')) return;

        setGuessNumber(value);
    }

    return (
        <div style={{ width: '380px', margin: '0px auto', display: 'flex', justifyContent: 'space-between' }}>
            <Input
                name={'guessNumber'}
                value={guessNumber}
                onChange={changeGuessNumber}
                placeholder={'Digite o palpite'}
                type={'number'}
            />
            <Button text="Enviar" />
        </div>
    );
}

export default Footer;