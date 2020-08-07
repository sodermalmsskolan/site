import { PostOrPage } from "@tryghost/content-api";
import { Navigation } from "../../basic/Navigation";
import { HeroBackground, Hero } from "../../layout/Hero";
import styled from "styled-components";
import { Row } from "../../grid/Row";
import { LeadText, SmallBig, TextColorModifier } from "../../basic/Typography";
import moment from "moment";
import { Avatar, AvatarWrapper, useSmallAvatar } from "../../basic/Avatar";
import { LinkBlock } from "../../basic/Link";
import { getAuthorUrl } from "../../../lib/api/ghost/author";

const Background = styled.div<{ image: string }>`
  background-size: cover;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
`;

const Overlay = styled.div`
  backdrop-filter: brightness(30%);
`;

const Container = styled(TextColorModifier)`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  grid-column: span 12;

  @media (min-width: 768px) {
    grid-column: span 9;
  }

  @media (min-width: 1200px) {
    grid-column: span 6;
  }
`;

const Title = styled.h1`
  font-weight: 600;
`;

const Lead = styled(LeadText)``;

const MetaRow = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const MetaField = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  color: var(--accents-5);

  &:not(:last-child) {
    margin-right: 15px;
    padding-right: 15px;
    border-right: 1px solid var(--accents-2);
  }
`;

const AuthorCard = styled(LinkBlock)`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  white-space: nowrap;
  margin-left: 2px;

  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const AuthorImage = styled.div<{ src: string }>`
  width: 18px;
  height: 18px;
  margin: -2px 8px -2px -2px;
  background-size: cover;
  background-position: center;
  background-image: ${({ src }) => `url(${src})`};
  border-radius: 50%;
`;

const AuthorName = styled.small`
  white-space: nowrap;
`;

export const ArticleHero: React.FunctionComponent<{
  post: PostOrPage;
  dateText: string;
}> = ({ post, dateText }) => {
  return (
    <>
      <Navigation noPlaceholder brightText />
      <Background image={post?.feature_image}>
        <Overlay>
          <Container bright>
            <Hero>
              <Row>
                <Wrapper>
                  <Title>{post?.title}</Title>
                  {post?.custom_excerpt && <Lead>{post?.custom_excerpt}</Lead>}
                  <MetaRow>
                    <MetaField>
                      {(post?.authors || []).map((author, index) => (
                        <AuthorCard
                          key={index}
                          href={getAuthorUrl(author?.slug)}
                        >
                          <AuthorImage
                            src={useSmallAvatar(author?.profile_image)}
                          />
                          <AuthorName>{author?.name}</AuthorName>
                        </AuthorCard>
                      ))}
                    </MetaField>
                    <MetaField>
                      <small>{dateText}</small>
                    </MetaField>
                  </MetaRow>
                </Wrapper>
              </Row>
            </Hero>
          </Container>
        </Overlay>
      </Background>
    </>
  );
};