import { ContainerSegments, Segment } from "./styles";
import { DisplayProps } from "./tyes";

function Display({ arrayActive }: DisplayProps) {
    return (
        <>
            <ContainerSegments id="container_segments">
                <Segment
                    className={`segment_a ${arrayActive.a}`}
                    data-testid="segment_a"
                />
                <Segment
                    className={`segment_b ${arrayActive.b}`}
                    data-testid="segment_b"
                />
                <Segment
                    className={`segment_c ${arrayActive.c}`}
                    data-testid="segment_c"
                />
                <Segment
                    className={`segment_d ${arrayActive.d}`}
                    data-testid="segment_d"
                />
                <Segment
                    className={`segment_e ${arrayActive.e}`}
                    data-testid="segment_e"
                />
                <Segment
                    className={`segment_f ${arrayActive.f}`}
                    data-testid="segment_f"
                />
                <Segment
                    className={`segment_g ${arrayActive.g}`}
                    data-testid="segment_g"
                />
                {/* {Object.keys(arrayActive).map((item, index) => (
                    <div key={index}>
                        <Segment
                            className={`segment_a ${item}`}
                            data-testid="segment_a"
                        /> */}
                {/* <Segment
                            className={`segment_b ${item.b}`}
                            data-testid="segment_b"
                        />
                        <Segment
                            className={`segment_c ${item.c}`}
                            data-testid="segment_c"
                        />
                        <Segment
                            className={`segment_d ${item.d}`}
                            data-testid="segment_d"
                        />
                        <Segment
                            className={`segment_e ${item.e}`}
                            data-testid="segment_e"
                        />
                        <Segment
                            className={`segment_f ${item.f}`}
                            data-testid="segment_f"
                        />
                        <Segment
                            className={`segment_g ${item.g}`}
                            data-testid="segment_g"
                        /> */}
                {/* </div>
                ))} */}
            </ContainerSegments>
        </>
    );
}

export default Display;