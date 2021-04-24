import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Container from "../components/Container";
import { TabPanel, TabHeader, TabBody } from "../components/TabComponent";
function Verifications() {
  return (
    <Container className="text-black h-full flex justify-center items-start">
      <TabPanel color="purple">
        <TabHeader>
          <div>{"Profile"}</div>
          <div>{"Settings"}</div>
          <div>{"Options"}</div>
        </TabHeader>
        <TabBody className="max-w-2xl">
          <p>
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits.
            <br />
            <br /> Dramatically visualize customer directed convergence without
            revolutionary ROI.
          </p>
          <p>
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            robust ideas.
            <br />
            <br />
            Dynamically innovate resource-leveling customer service for state of
            the art customer service.
          </p>
          <p>
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize timely deliverables for real-time schemas.
            <br />
            <br /> Dramatically maintain clicks-and-mortar solutions without
            functional solutions.
          </p>
        </TabBody>
      </TabPanel>
    </Container>
  );
}

export default Verifications;
