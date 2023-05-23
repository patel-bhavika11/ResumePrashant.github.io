import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  const data1 = (
    <div>
      <div>Deaerator (MHPS BOILERS PVT. LTD)</div>
      <br />
      <div>
        Heavy Fractionator column (HPCL) SA 516M GR 485 (Shell/d’end) ASME
        SEC.VIII, DIV.1 EDITION 2015 50 Meter Height & Max.50 mm THK
      </div>
      <br />
      <div>
        L.P Duplex Heater & L P Feed Water Heater (Shell Assembly) (HASSYAN
        ENERGY) (4 NOS.) ASME SEC.VIII, DIV.1 EDITION 2015 (CODE STAMP) SA 516M
        GR 485 (Shell/d’end) + SA266M GR-2 (TUBE SHEET) 16 Meter Height & 12-14
        mm THK
      </div>
      <br />
      <div>
        Ammonia Converter (HINDUSTAN URVARAK & RASAYAN LIMITED, BARAUNI &
        SINDRI) (2 NOS.) ASME SEC VIII Div. 2 CLASS 2 ED.2017 SA 336M GR. F11 CL
        3 23 Meter Height & 178.5 mm THK
      </div>
      <br />
    </div>
  );

  const data2 = (
    <div>
      <div>
        Main Absorber (LNG CANADA DEVELOPMENT INC, CANADA) (2 NOS.) ASME SEC
        VIII Div. 2 CLASS 2 ED.2017 (CODE STAMP) SA 516M GR 485 + SS316L Weld
        Overlay 53 Meter Height 131 – 128 MM THK.
      </div>
      <br />
      <div>
        Coke Drum (COKER COMPLEX REHABILITATION PROJECT SUEZ, EGYPT) (PEMEX
        TRANSFORMACION INDUSTRIAL INFRASTRUCTURA DE DESARROLLO S.A. DE CV) ASME
        SEC VIII Div. 1 ED.2019 (CODE STAMP) SA 387 GR.12 CL.2 + SA 240 TYPE
        410S CLAD 44 Meter height 56 MM + 2 MM CLAD THK.
      </div>
    </div>
  );

  const data3 = (
    <div>
      <div>RR PACKAGE (HPCL RAJASTHAN REFINERY LIMITED) (AT SITE)</div>
      <br />
      <div>
        REACTOR REGENRATOR (NAYAA ENERGY LTD, VADINAR, GUJARAT, INDIA)
        (PRE-SHUTDOWN + SHUTDOWN WORK-JUNE.2022 TO DEC.2022) (AT NAYARA,
        JAMNAGER SITE) FCCU REVAMP REACTOR REGENRATOR NAYARA, SA 516M GR 70 /
        6600 ID / 22-50 THK.
      </div>
      <br />
      <div>
        COKE DRUM – WELD REPAIR OF CIRCUMFERENTIAL SEAM (BHARAT PETROLEUM
        CORPORATION LIMITED (BPCL), BINA, MADHYA PRADESH) (SHUTDOWN
        WORK-JAN-2023 TO FAB.2023) (AT SITE BPCL, BINA, MADHYA PRADESH) LAS +
        INCONEL WELD / 32 + 3 MM THK
      </div>
      <br />
      <div>
        PIPING REROUTING WORK FOR REVAMPING OF UREA - II PLANT (GUJARAT STATE
        FERTILIZERS CHEMICALS LIMITED, VADODARA, GUJARAT) (SHUTDOWN WORK –
        APRIL-2023 TO MAY-2023) (22 DAYS) (AT SITE – GSFC, VADODARA, GUJARAT) CS
        + SS + ALUMINIUM HDPE PIPING REROUTING WORK (1.5’’, 2’’ 8’’ PIPE)
      </div>
    </div>
  );

  return (
    <Container id="service">
      <Slide direction="down">
        <h1>
          My <span className="green">Recent Projects</span>
        </h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={
              "Q TOP FAB ENGINEERING PVT. LTD (At L&T, Hazira) & STELLARC PROJECT PVT. LTD (At L&T, Hazira) (Nov.2017 to June.2020)"
            }
            disc={data1}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"R.K FABRICATION (At L&T, Hazira) (July.2020 to Dec.2021)"}
            disc={data2}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"L&T MRU (At Site & Vendor Place) (Jan.2022 to till date)"}
            disc={data3}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
