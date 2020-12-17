import React, { Fragment, FunctionComponent, useRef } from "react";
import Image from "next/image";
import { Theme, ThemeProvider } from "@emotion/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import dayjs from "dayjs";
import Post from "../../lib/ghost/post";
import Skeleton from "../Skeleton";
import { HeaderHeading, SmallHeading, SubTitle } from "../text/headings";
import { breakpoints, media } from "../../styles/breakpoints";
import Container from "../Container";
import darkTheme from "../../styles/theme/dark";
import { useLang } from "../../hooks/lang";
import AuthorName from "../author/Name";

export interface PostHeaderProps {
  post: Post;
}

const PostHeader: FunctionComponent<PostHeaderProps> = ({ post }) => {
  const { scrollY } = useViewportScroll();
  const wrapperRef = useRef<HTMLDivElement>();

  const scrollProgress = useTransform(scrollY,
    ((y) => (y / wrapperRef?.current?.getBoundingClientRect()?.height) || 0));

  const backgroundOpacity = useTransform(scrollProgress, (progress) => (0.5 + progress));
  const foregroundOpacity = useTransform(scrollProgress, (progress) => (1 - progress));

  const lang = useLang();

  return (
    <>

      <div
        ref={wrapperRef}
        css={{
          position: "relative",
          minHeight: "80vh",
          margin: 0,
          backgroundColor: "#000000",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",

          [media(breakpoints.medium)]: {
            marginLeft: "3rem",
            marginRight: "3rem",
          },

          img: {
            objectFit: "cover",
          },
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <Container css={{
            flex: 1,
          }}
          >
            <motion.div
              css={{
                position: "relative",
                padding: "3rem 0",
                zIndex: 1,
                maxWidth: "56rem",

                [media(breakpoints.large)]: {
                  paddingTop: "6rem",
                  paddingBottom: "6rem",
                },
              }}
              style={{
                opacity: foregroundOpacity,
              }}
            >
              <HeaderHeading>{post?.title || <Skeleton />}</HeaderHeading>
              <SubTitle css={{
                marginTop: "2rem",
              }}
              >
                {post?.excerpt}
              </SubTitle>
              <div css={{
                marginTop: "2rem",
              }}
              >
                <SmallHeading css={(theme: Theme) => ({
                  color: theme.color.text.primary,
                  opacity: 0.7,
                })}
                >
                  {(post?.authors || new Array(2).fill(null)).map((author, index) => (
                    <Fragment key={author?.id || index}>
                      {index !== 0 ? ", " : null}
                      <AuthorName author={author} />
                    </Fragment>
                  ))}
                  {" "}
                  {post?.publishedAt ? dayjs(post?.publishedAt).locale(lang).format("HH:mm D MMMM YYYY") : <Skeleton width="10em" />}
                </SmallHeading>
              </div>
            </motion.div>
          </Container>
        </ThemeProvider>
        {post?.cover ? (
          <motion.div style={{
            opacity: backgroundOpacity,
          }}
          >
            <Image src={post?.cover} layout="fill" />
          </motion.div>
        ) : null}
      </div>
    </>
  );
};

export default PostHeader;