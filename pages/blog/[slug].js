import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../store/posts";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import moment from "moment/moment";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import Head from "next/head";

const SingleBlogPostPage = () => {
  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r, g, b) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

  const router = useRouter();
  const slug = router.query.slug;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const allBlogPosts = useSelector((state) => state.postsSlice.data);
  const singleBlogPostData = allBlogPosts.filter((item) => item.slug == slug);

  return (
    <>
      <Head>
        <title>{singleBlogPostData[0].title.rendered}</title>
        <meta
          property="og:title"
          content={singleBlogPostData[0].title.rendered}
          key="title"
        />
        <link rel="icon" href="/univa-logo.png" />

      </Head>
      <div className="postWrapper bg-white mx-auto w-full md:w-[75%] p-5 md:p-10 my-10 border-2 border-dashed rounded-md">
        <article>
          <h3 className="title text-center text-red-700 leading-relaxed text-2xl md:text-5xl font-bold mb-5">
            {singleBlogPostData[0]?.title.rendered}
          </h3>
          <figure>
            <Image
              src={
                singleBlogPostData[0]?.better_featured_image.media_details.sizes
                  .large.source_url
              }
              width="700"
              alt="image details"
              height="400"
              placeholder="blur"
              blurDataURL="./logo-univa.png"
              className="rounded-md h-96 mx-auto object-cover"
            />
          </figure>
          <div className="meta my-10  mb-5 rounded flex mx-auto justify-center items-center gap-5 md:gap-10">
            <div className="item  flex items-center gap-2  bg-red-100 px-5 py-3 rounded-md">
              <i className="las la-calendar"></i>
              {moment
                .utc(singleBlogPostData[0]?.date)
                .local()
                .startOf("seconds")
                .fromNow()}
            </div>
            <div className="item  flex i  tems-center gap-2  bg-red-100 px-5 py-3 rounded-md">
              <i className="las la-user"></i>
              Univa
            </div>
          </div>

          <div className="leading-loose blog_content">
            {ReactHtmlParser(singleBlogPostData[0]?.content.rendered)}
          </div>
        </article>
      </div>
    </>
  );
};

export default SingleBlogPostPage;
