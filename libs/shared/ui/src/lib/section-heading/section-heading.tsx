import { ChevronRightIcon } from '@heroicons/react/solid';

/* eslint-disable-next-line */
export interface SectionHeadingProps {
  title: string;
  subTitle: string;
  seeMore?: string;
}

export function SectionHeading(props: SectionHeadingProps) {
  return (
    <div>
      <div className="text-lg font-bold leading-8">{props.title}</div>

      <div className="flex justify-between items-center">
        <div className="text-base font-normal text-gray-400">
          {props.subTitle}
        </div>
        {props.seeMore && (
          <a
            href={props.seeMore}
            className="text-base font-normal text-primary flex items-center"
          >
            See more <ChevronRightIcon className="ml-4 w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}

export default SectionHeading;
