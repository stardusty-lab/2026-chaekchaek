import { useState, type MouseEvent } from 'react';
import { generatePath, Link } from 'react-router-dom';

import {
  Avatar,
  Button,
  Dialog,
  Divider,
  Entry,
  Icon,
  ImgBox,
  Media,
  Partition,
  Shell,
  Text,
} from '@chaekchaek/design-system';

import { ROUTES } from '@/constants/routes';

import { track } from '@/analytics/track';

import styles from './BookFeed.module.css';

import type { BookFeedProps } from './BookFeed.types';

const SPOILER_PLACEHOLDER_REVIEW = '짹짹짹 짹짹 짹짹짹짹. 짹짹짹 짹짹짹 짹짹짹 짹짹짹짹 짹짹짹짹.';

export const BookFeed = (props: BookFeedProps) => {
  const { review } = props;

  const [isSpoilerVisible, setIsSpoilerVisible] = useState(false);

  const showSpoilerVisible = isSpoilerVisible || !review.isSpoiler;

  const handleClickShowSpoiler = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!showSpoilerVisible) {
      e.preventDefault();

      setIsSpoilerVisible(true);
      return;
    }

    track('navigate', {
      destination: 'book_detail',
      source: 'book_feed',
    });
  };

  const handleClickBook = () => {
    track('navigate', {
      destination: 'book_detail',
      source: 'book_feed',
    });
  };

  const handleClickAvatar = (isProfileAvailable: boolean) => {
    if (isProfileAvailable) {
      handleOpenDialog('AlertDialog');
      return;
    }

    track('navigate', {
      destination: 'members_library',
      source: 'book_feed',
    });
  };

  const [dialog, setDialog] = useState<'AlertDialog' | null>(null);
  const handleOpenDialog = (dialog: 'AlertDialog') => {
    setDialog(dialog);
  };
  const handleCloseDialog = () => {
    setDialog(null);
  };

  const renderDialog = (dialog: 'AlertDialog' | null) => {
    switch (dialog) {
      case 'AlertDialog':
        return (
          <Dialog onClose={handleCloseDialog}>
            <Dialog.Container>
              <Dialog.Body>접근이 불가능한 프로필입니다</Dialog.Body>
            </Dialog.Container>
          </Dialog>
        );

      default:
        return null;
    }
  };

  const dialogElement = renderDialog(dialog);

  return (
    <>
      <Divider />
      <Partition key={review.reviewId}>
        <Partition.Item>
          <Link to={`/books/${review.isbn13}`} onClick={handleClickBook}>
            <Media
              media={<ImgBox size="large" img={review.bookCoverImageUrl} />}
              title={review.bookTitle}
            />
          </Link>
        </Partition.Item>
        <Partition.Item>
          <Entry line="none" variant="bare">
            <Entry.Main>
              <Entry.Header>
                <Shell>
                  <Shell.Leading>
                    <Avatar
                      as={review.author?.memberId ? Link : 'div'}
                      {...(review.author?.memberId && {
                        to: generatePath(ROUTES.MEMBER_LIBRARY, {
                          memberId: review.author.memberId.toString(),
                        }),
                      })}
                      onClick={() => {
                        handleClickAvatar(review.author.profileStatus !== 'AVAILABLE');
                      }}
                      img={review.author.profileImageUrl}
                    />
                  </Shell.Leading>
                  <Shell.Content
                    title={review.author.displayName}
                    content={new Date(review.createdAt).toLocaleDateString('ko-KR')}
                  />
                </Shell>
              </Entry.Header>
              <Entry.Body>
                <Link to={`/books/${review.isbn13}`} onClick={handleClickShowSpoiler}>
                  {showSpoilerVisible ? (
                    review.content
                  ) : (
                    <>
                      <span className={styles.spoiler}>{SPOILER_PLACEHOLDER_REVIEW}</span>
                      <Text size="small" color="error">
                        (스포일러 · 눌러보기)
                      </Text>
                    </>
                  )}
                </Link>
              </Entry.Body>
              <Entry.Footer>
                <Button
                  shape="link"
                  variant="ghost"
                  leading={<Icon.HeartOffIcon color="secondary" />}
                  readOnly
                >
                  좋아요 0
                </Button>
                <Button
                  shape="link"
                  variant="ghost"
                  leading={<Icon.CommentIcon color="secondary" />}
                  readOnly
                >
                  답글 {review.replyCount}
                </Button>
              </Entry.Footer>
            </Entry.Main>
          </Entry>
        </Partition.Item>
      </Partition>
      {dialogElement}
    </>
  );
};
