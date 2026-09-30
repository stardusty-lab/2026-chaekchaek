import { screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { renderProvider } from '@/test/utils/render';

import { BookFeedPage } from '@/pages/BookFeedPage/BookFeedPage';

describe('BookFeedPage', () => {
  it('기본 렌더링이 된다', () => {
    renderProvider(<BookFeedPage />);

    expect(screen.getByText('전체 감상 피드')).toBeInTheDocument();
  });
});
