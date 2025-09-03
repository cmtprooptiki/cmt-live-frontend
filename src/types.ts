

export interface LinkProps {
  id: number;
  text: string;
  href: string;
  isExternal: boolean;
}

export interface ImageProps {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
}

export interface LogoProps {
  logoText: string;
  image: ImageProps;
}


export interface FeaturedArticleProps extends Base<"blocks.featured-article"> {
  title: string;
  excerpt: string;
  link: LinkProps;
  image: ImageProps;
  author: {
    name: string;
    imageAuthor?: ImageProps;
  };
  publishedAt: string;
}



// export interface FeaturedArticleProps {
//   id: number;
//   title: string;
//   excerpt: string;
//   image: ImageProps;
//   link: {
//     href: string;
//     text: string;
//   };
//   author: {
//     name: string;
//     imageAuthor?: ImageProps;
//   };
//   publishedAt: string;
// }

export interface ArticleProps {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  image: ImageProps;
  
  author: string;
  imageAuthor?: {
    url: string;
    alternativeText?: string;
  };
  featured: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}




type ComponentType ="blocks.hero-section-main" | "blocks.hero-section" | "blocks.info-block"   
                | "blocks.milestones-block" | "blocks.vertical-accordion-block" 
                | "blocks.services-accordion-block" | "blocks.logo-carousel-block"
                 | "blocks.testimonials-block" | "blocks.features-block" 
                 | "blocks.featured-article"
                 | "blocks.about-info"
                 | "blocks.about-section"
                 | "blocks.heading"
                  | "blocks.paragraph-with-image"
                  | "blocks.paragraph"
                  | "blocks.full-image"
                  | "blocks.sticky-menu"
				  | "blocks.secondary-menu"
		   
                  |"blocks.team-grid";

interface Base<
  T extends ComponentType,
  D extends object = Record<string, unknown>
> {
  id: number;
  __component?: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
}

export type Block = HeroSectionMainProps | HeroSectionProps | InfoBlockProps | MilestonesBlockProps
 | VerticalAccordionBlockProps | ServicesAccordionBlockProps 
 | LogoCarouselBlockProps | TestimonialsBlockProps 
 | FeaturesBlockProps | FeaturedArticleProps | AboutSectionProps | AboutInfoProps
   | HeadingProps
  | ParagraphWithImageProps
  | ParagraphProps
  | FullImageProps
  | StickyMenuProps
  | SecondaryMenuProps
  |TeamGridProps;

export interface HeroSectionMainProps extends Base<"blocks.hero-section-main"> {
  theme: "black" | "blue";
  heading: string;
  image: ImageProps;
  cta?: LinkProps;
  milestones: Milestone[];
  logo?: LogoProps;
  author?: string;
  darken?: boolean;
}



export interface HeroSectionProps extends Base<"blocks.hero-section"> {
  theme: "black" | "blue";
  heading: string;
  image: ImageProps;
  cta?: LinkProps;
  logo?: LogoProps;
  author?: string;
  darken?: boolean;
}

export interface InfoBlockProps extends Base<"blocks.info-block"> {
  theme: "black" | "red";
  reversed?: boolean;
  headline: string;
  description:string;
  content: string;
  image: ImageProps;
  cta?: LinkProps;
}



// ✅ Milestone structure
export interface Milestone {
  id: number;
  label: string;
  value: number;
}

export interface MilestonesBlockProps extends Base<"blocks.milestones-block"> {
  title: string;
  description: string;
  heading: string;
  milestones: Milestone[];
}

export interface FooterProps {
  logo: LogoProps;
  description: string;
  copyrightText:string;
  newsletterTitle:string;
  newsletterInputPlaceholder:string;
  newsletterButtonLabel:string;

  column: {
    title: string;
    link: LinkProps[];
  }[];
  socialLink: LinkProps[];
  bottomLink: LinkProps[];
}


export interface AccordionItem {
  id?: string; // for anchor linking
  title: string;
  description: string;
  cta?: LinkProps;
}

export interface VerticalAccordionBlockProps extends Base<"blocks.vertical-accordion-block"> {
  title?: string;
  items: AccordionItem[];
    cta?: LinkProps;

}


export interface ServiceAccordionItem {
  id: number;
  title: string;
  description: string;
}

export interface ServicesAccordionBlockProps {
  __component: "blocks.services-accordion-block";
  id: number;
  heading:string;
  items: ServiceAccordionItem[];
  image: ImageProps;
  cta?: LinkProps;
}





export interface LogoCarouselItem {
  image: {
    url: string;
    alternativeText?: string;
  };
}

export interface LogoCarouselBlockProps extends Base<"blocks.logo-carousel-block"> {
  items: LogoCarouselItem[];
}



export interface TestimonialItem {
  id: number;
  name: string;
  position: string;
  quote: string;
  image: {
    url: string;
    alternativeText?: string;
  };
}

export interface TestimonialsBlockProps {
  __component: "blocks.testimonials-block";
  id: number;
  heading?: string;
  items: TestimonialItem[];
}

export interface FeaturesBlockProps {
  __component: "blocks.features-block";
  id: number;
  heading: string;
  description: string;
  cta?: {
    text: string;
    href: string;
    isExternal: boolean;
  };
}

// export interface FeaturedArticleProps extends Base<"blocks.featured-article"> {
//   headline: string;
//   excerpt: string;
//   link: LinkProps;
//   image: ImageProps;
// }

export interface AboutSectionProps extends Base<"blocks.about-section"> {
  title: string;
  description: string;
  infographic: ImageProps;
}
 
export interface AboutInfoProps extends Base<"blocks.about-info"> {
  title: string;
  content: string;
  heading:string;
}

export interface HeadingProps extends Base<"blocks.heading"> {
  heading: string;
  linkId?: string;
}

export interface ParagraphWithImageProps extends Base<"blocks.paragraph-with-image"> {
  content: string;
  image: ImageProps;
  reversed?: boolean;
  imageLandscape?: boolean;
}

export interface ParagraphProps extends Base<"blocks.paragraph"> {
  content: string;
}

export interface FullImageProps extends Base<"blocks.full-image"> {
  id: number;
  __component: "blocks.full-image";
  image: ImageProps;
}

export interface StickyMenuProps {
  // __component: "blocks.sticky-menu";
  // id: number;
  // logo?: LogoProps;
  // text: string;
  // href: string;
  // isExternal: boolean;
  id:number;
  __component: "blocks.sticky-menu";
  logo?: LogoProps;
  navigation: {
    id: number;
    text: string;
    href: string;
  }[];
   hamnavigation: {
    id: number;
    text: string;
    href: string;
    isExternal:boolean;
  }[];
  aboutInfoBlocks: Block[];
}


export interface SecondaryMenuProps {
  // __component: "blocks.sticky-menu";
  // id: number;
  // logo?: LogoProps;
  // text: string;
  // href: string;
  // isExternal: boolean;
  id:number;
  __component: "blocks.secondary-menu";
    title:string;
    slug:string;
    items?: {
    label: string;
    href: string;
    icon?: ImageProps;
  }[];
  
  
  aboutInfoBlocks: Block[];
}
export interface TeamMember {
  id: number;
  FullName: string;
  JobTitle: string;
  ProfileImage: ImageProps;
  CoverImage: ImageProps;
  LinkedInUrl: string;
  Bio: string;
  slug: string;
}
 
export interface TeamGridProps extends Base<"blocks.team-grid"> {
  Title: string;
  description: string
  team_members: TeamMember[];
}
 
// types/index.ts
export interface TeamMemberProps {
  id: number;
  FullName: string;
  JobTitle: string;
  Bio?: string;
  slug: string;
  LinkedInUrl?: string;
  ProfileImage?: {
    data?: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
}
