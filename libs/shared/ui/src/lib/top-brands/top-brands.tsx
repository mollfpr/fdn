import { SectionHeading } from '../..';

/* eslint-disable-next-line */
export interface TopBrandsProps {}

export function TopBrands(props: TopBrandsProps) {
  return (
    <div>
      <div className="mb-6">
        <SectionHeading
          title="Top Brands"
          subTitle="we all know and love"
          seeMore="#"
        />
      </div>

      <div className="flex justify-around gap-x-4 mb-8">
        <img src="/assets/images/nivea.svg" alt="Nivea" className="h-12" />
        <img
          src="/assets/images/the-ordinary.png"
          alt="The Ordinary"
          className="h-12"
        />
        <img
          src="/assets/images/the-body-shop.png"
          alt="The Body Shop"
          className="h-12"
        />
        <img src="/assets/images/sk-ii.png" alt="SK-II" className="h-12" />
        <img
          src="/assets/images/maybelline.jpeg"
          alt="Maybelline"
          className="h-12"
        />
        <img
          src="/assets/images/innisfree.png"
          alt="Innisfree"
          className="h-12"
        />
      </div>

      <div className="text-lg font-bold mb-2">
        Female Daily - Find everything you want to know about beauty on Female
        Daily
      </div>
      <p className="text-base font-normal leading-5">
        Product Reviews, Tips & Trick, Expert and Consumer Opinions, Beauty
        Tutorials, Discussions, Beauty Workshops, anything!
        <br />
        We are here to be your friendly solution to all things beauty, inside,
        and out!
      </p>
    </div>
  );
}

export default TopBrands;
