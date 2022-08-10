import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button } from "../index";
import { Container } from "./styles";
import switchLed from "../../utils/switchLeds";
import { changeLedsAction } from "../../redux/fetchActions/searchNumberAction";

function Footer() {
  const [guessNumber, setGuessNumber] = useState("");

  const dispatch = useDispatch<any>();

  const changeGuessNumber = (value: string) => {
    if (value.includes("e") || value.includes(".")) return;

    setGuessNumber(value);
  };

  const handleGuessNumber = () => {
    const changedLeds = switchLed(guessNumber);
    dispatch(changeLedsAction(changedLeds, guessNumber));

    setGuessNumber("");
  };

  return (
    <Container>
      <Input
        name={"guessNumber"}
        value={guessNumber}
        onChange={changeGuessNumber}
        placeholder={"Digite o palpite"}
        type={"number"}
        height={"15px"}
        max={3}
      />
      <Button
        text="Enviar"
        height="45px"
        onClick={handleGuessNumber}
        disabled={false}
      />
    </Container>
  );
}

export default Footer;
