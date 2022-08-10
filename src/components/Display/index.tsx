import { ContainerSegments, Segment } from "./styles";
import { DisplayProps } from "./types";

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
  return (
    <>
      <ContainerSegments id="container_segments">
        {leds?.map((item: any, index) => (
          <div key={index}>
            {ledsName?.map((ledName) => {
              return (
                <Segment
                  className={`${ledName}_segment ${item[ledName]}`}
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
