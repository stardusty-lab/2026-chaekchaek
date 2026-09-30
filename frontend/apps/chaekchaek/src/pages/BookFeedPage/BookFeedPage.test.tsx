import { screen } from '@testing-library/react';

import { describe, expect, it, vi } from 'vitest';

import { http, HttpResponse } from 'msw';

import { ENV } from '@/configs/env';
import { server } from '@/mocks/msw/server';

import { renderProvider } from '@/test/utils/render';

import { BookFeedPage } from '@/pages/BookFeedPage/BookFeedPage';

import { feedReviewsPage1 } from './BookFeedPage.fixtures';

describe('BookFeedPage', () => {
  it('기본 렌더링이 된다', () => {
    renderProvider(<BookFeedPage />);

    expect(screen.getByText('전체 감상 피드')).toBeInTheDocument();
  });

  it('피드에 진입하면 피드 목록을 조회해 화면에 보여준다', async () => {
    const onFeedRequest = vi.fn();

    server.use(
      http.get(`${ENV.APP_API_URL}/api/v1/feed/reviews`, ({ request }) => {
        const url = new URL(request.url);
        onFeedRequest(url.searchParams.get('page'));

        return HttpResponse.json(feedReviewsPage1);
      }),
    );

    renderProvider(<BookFeedPage />);

    for (const review of feedReviewsPage1.reviews) {
      expect(await screen.findByText(review.bookTitle)).toBeInTheDocument();
      expect(screen.getByText(review.author.displayName)).toBeInTheDocument();
      expect(screen.getByText(review.content)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: `답글 ${review.replyCount}` })).toBeInTheDocument();
    }

    expect(onFeedRequest).toHaveBeenCalledWith('1');
  });
});
