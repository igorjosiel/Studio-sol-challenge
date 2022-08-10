import { ContainerSegments, Segment } from "./styles";
import { DisplayProps } from "./types";
import { RootState } from "../../App.types";
import { useSelector } from "react-redux";

const ledsName: string[] = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
];

function Display({ leds }: DisplayProps) {
  const { success, error } = useSelector<RootState, any>(
    (store) => store?.searchNumber
  );

  return (
    <>
      <ContainerSegments id="container_segments">
        {leds?.map((item: any, index) => (
          <div key={index}>
            {ledsName?.map((ledName) => {
              return (
                <Segment
                  className={`
                    ${ledName}_segment
                    ${item[ledName]}
                    ${success && item[ledName] === "on" && "success"}
                    ${error && item[ledName] === "on" && "error"}`
                  }
                  data-testid={`${ledName}_segment`}
                />
              );
            })}
          </div>
        ))}
      </ContainerSegments>
    </>
  );
}

export default Display;
