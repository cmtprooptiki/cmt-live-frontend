import type { Block } from "@/types";

import { HeroSection } from "@/components/blocks/HeroSection";
import { InfoBlock } from "@/components/blocks/InfoBlock";
import {MilestoneBlock} from "@/components/blocks/MilestoneBlock";
import {VerticalAccordionBlock} from "@/components/blocks/VerticalAccordionBlock";
import {ServicesAccordionBlock} from "@/components/blocks/ServicesAccordionBlock";
import {LogoCarouselBlock} from "@/components/blocks/LogoCarouselBlock";
import { TestimonialsBlock } from "@/components/blocks/TestimonialsBlock";
import { FeaturesBlock } from "@/components/blocks/FeatureBlocks";
import { FeaturedArticle } from "@/components/blocks/FeaturedArticle";
import { AboutSection } from "@/components/blocks/AboutSection";
import { AboutInfo } from "@/components/blocks/AboutInfo";
import { FullImage } from "@/components/blocks/FullImage";
import { Heading } from "@/components/blocks/Heading";
import { Paragraph } from "@/components/blocks/Paragraph";
import { ParagraphWithImage } from "@/components/blocks/ParagraphWithImage";
import { StickyMenuBlock } from "@/components/blocks/StickyMenuBlock";
import { TeamGrid } from "@/components/blocks/TeamGrid";


function blockRenderer(block: Block, index: number,allBlocks: Block[]) {
    
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={index} />;
    case "blocks.info-block":
      return <InfoBlock {...block} key={index} />;
    case "blocks.milestones-block":
      return <MilestoneBlock {...block} key={index} />;
    case "blocks.vertical-accordion-block":
       return <VerticalAccordionBlock {...block} key={index} />;
    case "blocks.services-accordion-block":
       return <ServicesAccordionBlock {...block} key={index}  />;
    case "blocks.logo-carousel-block":
       return <LogoCarouselBlock  {...block} key={index}  />;
    case "blocks.testimonials-block":
        return <TestimonialsBlock {...block} key={index} />;
    case "blocks.features-block" :
        return <FeaturesBlock {...block} key={index} />;
    case "blocks.featured-article":
        return <FeaturedArticle {...block} key={index}/>;
    case "blocks.about-section":
        return <AboutSection {...block} key={index} />;
    case "blocks.about-info":
        return <AboutInfo {...block} key={index} />;
    case "blocks.heading":
      return <Heading {...block} key={index} />;
    case "blocks.paragraph-with-image":
      return <ParagraphWithImage {...block} key={index} />;
    case "blocks.paragraph":
      return <Paragraph {...block} key={index} />;
    case "blocks.full-image":
      return <FullImage {...block} key={index} />;
    case "blocks.sticky-menu": {
      const aboutInfoBlocks = allBlocks.filter(
        (b): b is Block & { __component: "blocks.about-info" } =>
          b.__component === "blocks.about-info"
      );
      return (
        <StickyMenuBlock
          {...block}
          aboutInfoBlocks={aboutInfoBlocks}

          key={index}
        />
      );
    }
    case "blocks.team-grid":
      return <TeamGrid {...block} key={index}></TeamGrid>
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index,blocks));
}