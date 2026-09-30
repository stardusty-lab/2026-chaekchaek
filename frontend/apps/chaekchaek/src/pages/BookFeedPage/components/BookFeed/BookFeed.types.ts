export type BookFeedReview = {
  reviewId: number;
  bookCoverImageUrl: string;
  bookTitle: string;
  author: {
    profileImageUrl: string | null;
    displayName: string;
  };
  createdAt: string;
  isSpoiler: boolean;
  content: string;
  replyCount: number;
};

export type BookFeedProps = {
  review: BookFeedReview;
};
