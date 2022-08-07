import { useState } from "react";
import { Input, Button } from "../index";
import { Container } from "./styles";

function Footer() {
    const [guessNumber, setGuessNumber] = useState('');

    const changeGuessNumber = (value: string) => {
        if (value.includes('e') || value.includes('.')) return;

        setGuessNumber(value);
    }

    return (
        <Container>
            <Input
                name={'guessNumber'}
                value={guessNumber}
                onChange={changeGuessNumber}
                placeholder={'Digite o palpite'}
                type={'number'}
                height={'15%'}
            />
            <Button text="Enviar" height="35%" />
        </Container>
    );
}

export default Footer;