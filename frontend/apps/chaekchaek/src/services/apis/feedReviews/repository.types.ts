export interface GetFeedReviewsParams {
  page: number;
}

export type GetFeedReviews = (params: GetFeedReviewsParams) => Promise<{
  reviews: {
    createdAt: string;
    replyCount: number;
    isSpoiler: boolean;
    author: {
      mine: boolean;
      actorType: string;
      displayName: string;
      profileStatus: string;
      anonymous: boolean;
      profileImageUrl: string;
      memberId: number;
    };
    isbn13: string;
    bookCoverImageUrl: string;
    reviewId: number;
    content: string;
    bookTitle: string;
    bookId: number;
  }[];
  nextPage: number;
  totalCount: number;
}>;
