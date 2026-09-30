import { useCallback } from 'react';

import { Layout } from '@/frames';
import { Header } from '@/frames';
import { Main } from '@/frames';
import { Container } from '@/frames/Container';

import { Title, ContentArea } from '@chaekchaek/design-system';

import { useLoadData } from '@/services/core/useLoadData';
import { getFeedReviews } from '@/services/apis/feedReviews/repository';

import { BookFeed } from './components/BookFeed';

export const BookFeedPage = () => {
  const getFeedReviewsLoadData = useCallback(async () => {
    return await getFeedReviews({ page: 1 });
  }, []);
  const {
    status: { data: feedReviews },
  } = useLoadData({
    queryFn: getFeedReviewsLoadData,
  });

  return (
    <Layout>
      <Header />
      <Main>
        <Container>
          <ContentArea spacing="large">
            <Title level="main" description="독자들이 남긴 따끈따끈한 문장들" sx={{ mt: 4, mb: 8 }}>
              전체 감상 피드
            </Title>

            {feedReviews?.reviews.map((review) => {
              return <BookFeed key={review.reviewId} review={review} />;
            })}
          </ContentArea>
        </Container>
      </Main>
    </Layout>
  );
};
