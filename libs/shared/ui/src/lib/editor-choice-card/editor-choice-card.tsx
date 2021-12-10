import { EditorType } from '@female-daily/shared/types';
import { ProductCard } from '../..';

/* eslint-disable-next-line */
export interface EditorChoiceCardProps extends EditorType {}

export function EditorChoiceCard(props: EditorChoiceCardProps) {
  return (
    <div className="relative flex flex-col">
      <img
        src="https://picsum.photos/id/1/200/300"
        alt=""
        className="rounded-full object-cover absolute left-3 top-0"
        style={{
          width: 45,
          height: 45,
        }}
      />

      <div
        className=""
        style={{
          marginLeft: 65,
        }}
      >
        <div className="text-sm font-bold">{props.editor}</div>
        <div className="text-xs text-gray-400 font-medium leading-4">
          {props.role}
        </div>
      </div>

      <div className="flex-1 rounded-lg border border-gray-200 overflow-hidden">
        <ProductCard {...props.product} />
      </div>
    </div>
  );
}

export default EditorChoiceCard;
