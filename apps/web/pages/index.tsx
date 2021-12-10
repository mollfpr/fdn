import React, { useEffect } from 'react';
import {
  Billboard,
  NavBar,
  TopFrame,
  EditorsChoice,
  MatchesProducts,
  Horizontal,
  SectionHeading,
  ArticleCard,
  Mr2,
  ReviewsSlider,
  PopularGroupCard,
  LatestVideo,
  TrendingProducts,
  TopBrands,
  Footer,
} from '@female-daily/shared/ui';
import { useDataContext } from '../contexts/DataContext';

export function Index() {
  const { editorsChoice, latestArticles, latestReview, fetchData } =
    useDataContext();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="mb-3.5">
        <NavBar />
      </div>

      <div className="flex justify-center mb-8">
        <TopFrame />
      </div>

      <div className="flex justify-center mb-10">
        <Billboard />
      </div>

      <div className="max-w-6xl mx-auto mb-10">
        <EditorsChoice editorsChoice={editorsChoice} />
      </div>

      <div className="mb-20">
        <MatchesProducts />
      </div>

      <div className="flex justify-center mb-20">
        <Horizontal />
      </div>

      <div className="max-w-6xl mx-auto mb-20">
        <div className="mb-6">
          <SectionHeading
            title="Latest Articles"
            subTitle="So you can make better purchase decision"
            seeMore="#"
          />
        </div>

        <div className="grid grid-cols-3 gap-8">
          {latestArticles &&
            latestArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex mb-20">
        <div className="w-2/3">
          <div className="mb-6">
            <SectionHeading
              title="Latest Reviews"
              subTitle="So you can make better purchase decision"
              seeMore="#"
            />
          </div>

          <ReviewsSlider reviews={latestReview} />
        </div>

        <div className="w-1/3">
          <div className="mt-20 flex justify-end">
            <Mr2 />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-20">
        <div className="mb-6">
          <SectionHeading
            title="Popular Group"
            subTitle="Where the beauty TALK are"
            seeMore="#"
          />
        </div>

        <div className="flex gap-x-4">
          <PopularGroupCard
            name="Embrace the Curl"
            image="https://picsum.photos/id/1/200/300"
            description="May our curls pop and never stop!"
          />
          <PopularGroupCard
            name="Embrace the Curl"
            image="https://picsum.photos/id/1/200/300"
            description="May our curls pop and never stop!"
          />
          <PopularGroupCard
            name="Embrace the Curl"
            image="https://picsum.photos/id/1/200/300"
            description="May our curls pop and never stop!"
          />
          <PopularGroupCard
            name="Embrace the Curl"
            image="https://picsum.photos/id/1/200/300"
            description="May our curls pop and never stop!"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-20">
        <LatestVideo />
      </div>

      <div className="max-w-6xl mx-auto mb-20">
        <TrendingProducts />
      </div>

      <div className="max-w-6xl mx-auto mb-20">
        <TopBrands />
      </div>

      <Footer />
    </div>
  );
}

export default Index;
