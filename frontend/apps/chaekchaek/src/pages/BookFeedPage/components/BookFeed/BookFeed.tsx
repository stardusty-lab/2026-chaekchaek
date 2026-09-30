import {
  Avatar,
  Button,
  Divider,
  Entry,
  Icon,
  ImgBox,
  Media,
  Partition,
  Shell,
  Text,
} from '@chaekchaek/design-system';

import styles from './BookFeed.module.css';

import type { BookFeedProps } from './BookFeed.types';

const SPOILER_PLACEHOLDER_REVIEW = '짹짹짹 짹짹 짹짹짹짹. 짹짹짹 짹짹짹 짹짹짹 짹짹짹짹 짹짹짹짹.';

export const BookFeed = (props: BookFeedProps) => {
  const { review } = props;

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
                    <span className={styles.spoiler}>{SPOILER_PLACEHOLDER_REVIEW}</span>
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
};
