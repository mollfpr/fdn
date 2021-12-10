import { EditorType } from '@female-daily/shared/types';
import { EditorChoiceCard, EditorChoiceCardProps, SectionHeading } from '../..';

/* eslint-disable-next-line */
export interface EditorsChoiceProps {
  editorsChoice?: EditorType[];
}

export function EditorsChoice(props: EditorsChoiceProps) {
  return (
    <div>
      <div className="mb-6">
        <SectionHeading title="Editor's Choice" subTitle="Curated with love" />
      </div>

      <div className="flex gap-x-4">
        {props.editorsChoice &&
          props.editorsChoice.map((editorChoice, index) => (
            <EditorChoiceCard key={index} {...editorChoice} />
          ))}
      </div>
    </div>
  );
}

export default EditorsChoice;
