import { StarIcon } from '@heroicons/react/solid';

/* eslint-disable-next-line */
export interface StarRatingProps {
  star: number;
  size?: number;
}

export function StarRating({ size = 4, ...props }: StarRatingProps) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          className={`w-${size} h-${size} ${
            index + 1 <= props.star ? 'text-primary' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export default StarRating;
