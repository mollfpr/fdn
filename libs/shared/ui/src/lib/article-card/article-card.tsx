import { ArticleType } from '@female-daily/shared/types';

/* eslint-disable-next-line */
export interface ArticleCardProps extends ArticleType {}

export function ArticleCard(props: ArticleCardProps) {
  return (
    <div className="flex flex-col">
      <img
        src={props.image}
        alt={props.title}
        className="object-cover object-center rounded-md w-full mb-5"
        style={{
          height: 135,
        }}
      />
      <p className="font-bold text-base mb-3">{props.title}</p>
      <div className="text-sm">
        <span className="text-gray-600 capitalize">{props.author}&nbsp;</span>
        <span className="text-gray-400">| {props.published_at}</span>
      </div>
    </div>
  );
}

export default ArticleCard;
