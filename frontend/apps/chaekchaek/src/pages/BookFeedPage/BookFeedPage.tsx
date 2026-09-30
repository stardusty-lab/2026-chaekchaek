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
} from '@chaekchaek/design-system';

export const BookFeedPage = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <Container>
          <ContentArea spacing="large">
            <Title level="main" description="독자들이 남긴 따끈따끈한 문장들" sx={{ mt: 4, mb: 8 }}>
              전체 감상 피드
            </Title>

            {Array.from({ length: 10 }).map(() => {
              return (
                <>
                  <Divider />
                  <Partition>
                    <Partition.Item>
                      <Media
                        media={<ImgBox size="large" img="" />}
                        title="title"
                        description="author"
                      />
                    </Partition.Item>
                    <Partition.Item>
                      <Entry spacing="medium" line="none" variant="bare">
                        <Entry.Main>
                          <Entry.Header>
                            <Shell>
                              <Shell.Leading>
                                <Avatar img={null} />
                              </Shell.Leading>
                              <Shell.Content
                                title={
                                  <>
                                    title{' '}
                                    <Badge variant="soft" size="small">
                                      P. 1까지
                                    </Badge>
                                  </>
                                }
                                content="content"
                              />
                            </Shell>
                          </Entry.Header>
                          <Entry.Body>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                            voluptatum possimus nobis quas error consequatur cumque nam recusandae
                            dicta ab commodi, reiciendis accusantium magni quis voluptates, velit
                            nisi dolorum id.
                            <Note>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                              voluptatum possimus nobis quas error consequatur cumque nam recusandae
                              dicta ab commodi, reiciendis accusantium magni quis voluptates, velit
                              nisi dolorum id.
                            </Note>
                          </Entry.Body>
                          <Entry.Footer>
                            <Button
                              shape="link"
                              variant="ghost"
                              leading={<Icon.HeartOffIcon color="secondary" />}
                            >
                              좋아요 12
                            </Button>
                            <Button
                              shape="link"
                              variant="ghost"
                              leading={<Icon.CommentIcon color="secondary" />}
                            >
                              답글 12
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
