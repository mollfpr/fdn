import { render } from '@testing-library/react';

import EditorChoiceCard from './editor-choice-card';

describe('EditorChoiceCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditorChoiceCard />);
    expect(baseElement).toBeTruthy();
  });
});
