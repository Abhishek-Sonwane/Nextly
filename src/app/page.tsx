import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";

import { benefitFour, benefitOne, benefitThree, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree}/>
      <Benefits imgPos="right" data={benefitFour}/>

    </Container>
  );
}
