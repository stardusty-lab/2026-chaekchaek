import { useCallback } from 'react';

import { Layout } from '@/frames';
import { Header } from '@/frames';
import { Main } from '@/frames';
import { Container } from '@/frames/Container';

import {
  Partition,
  Media,
  ImgBox,
  Entry,
  Shell,
  Avatar,
  Note,
  Icon,
  Button,
  Badge,
  Title,
  ContentArea,
  Divider,
  Text,
} from '@chaekchaek/design-system';

import { useLoadData } from '@/services/core/useLoadData';
import { getFeedReviews } from '@/services/apis/feedReviews/repository';

const SPOILER_PLACEHOLDER_REVIEW = '짹짹짹 짹짹 짹짹짹짹. 짹짹짹 짹짹짹 짹짹짹 짹짹짹짹 짹짹짹짹.';

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
              return (
                <>
                  <Divider />
                  <Partition key={review.reviewId}>
                    <Partition.Item>
                      <Media
                        media={<ImgBox size="large" img={review.bookCoverImageUrl} />}
                        title={review.bookTitle}
                      />
                    </Partition.Item>
                    <Partition.Item>
                      <Entry line="none" variant="bare">
                        <Entry.Main>
                          <Entry.Header>
                            <Shell>
                              <Shell.Leading>
                                <Avatar img={review.author.profileImageUrl} />
                              </Shell.Leading>
                              <Shell.Content
                                title={review.author.displayName}
                                content={new Date(review.createdAt).toLocaleDateString('ko-KR')}
                              />
                            </Shell>
                          </Entry.Header>
                          <Entry.Body>
                            {!review.isSpoiler ? (
                              review.content
                            ) : (
                              <>
                                <span>{SPOILER_PLACEHOLDER_REVIEW}</span>
                                <Text size="small" color="error">
                                  (스포일러 · 눌러보기)
                                </Text>
                              </>
                            )}
                          </Entry.Body>
                          <Entry.Footer>
                            <Button
                              shape="link"
                              variant="ghost"
                              leading={<Icon.HeartOffIcon color="secondary" />}
                            >
                              좋아요 0
                            </Button>
                            <Button
                              shape="link"
                              variant="ghost"
                              leading={<Icon.CommentIcon color="secondary" />}
                            >
                              답글 {review.replyCount}
                            </Button>
                          </Entry.Footer>
                        </Entry.Main>
                      </Entry>
                    </Partition.Item>
                  </Partition>
                </>
              );
            })}
          </ContentArea>
        </Container>
      </Main>
    </Layout>
  );
};
