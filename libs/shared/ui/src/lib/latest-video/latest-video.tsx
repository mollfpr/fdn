import { SectionHeading } from '../..';

/* eslint-disable-next-line */
export interface LatestVideoProps {}

export function LatestVideo(props: LatestVideoProps) {
  return (
    <div>
      <div className="mb-6">
        <SectionHeading
          title="Latest Videos"
          subTitle="Watch and learn, ladies"
          seeMore="/"
        />
      </div>

      <div
        className="flex gap-x-5"
        style={{
          height: 300,
        }}
      >
        <div className="w-2/3">
          <div className="bg-primary w-full h-full"></div>
        </div>
        <div className="w-1/3 flex flex-col gap-y-3.5">
          <div className="bg-primary w-full h-1/2"></div>
          <div className="bg-primary w-full h-1/2"></div>
        </div>
      </div>
    </div>
  );
}

export default LatestVideo;
