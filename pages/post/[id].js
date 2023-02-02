import React, { useEffect, ReactDOM } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../store/posts";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import moment from "moment/moment";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import Head from "next/head";

const SinglePost = () => {
  const router = useRouter();
  const id = router.query.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const allPosts = useSelector((state) => state.postsSlice.data);
  const singlePostData = allPosts.filter((item) => item.id == id);

  return (
    <>
      <Head>
        <title>{singlePostData[0]?.title.rendered}</title>
        <meta
          property="og:title"
          content={singlePostData[0]?.title.rendered}
          key="title"
        />
        <link rel="icon" href="/univa-logo.png" />
      </Head>
      <div className="p-0 md:p-10">
        <div className="container p-5 md:p-10  bg-white rounded border-[1px] border-red-300 border-dashed">
          <div className="wrapper flex flex-col md:flex-row items-start gap-16">
            <div className="imagearea w-full md:w-[40%] md:sticky top-32">
              <Image
                src={singlePostData[0]?.better_featured_image.source_url}
                width="500"
                height="500"
                alt="some info"
                className="rounded-md shadow-md h-[450px] object-cover object-center"
              />
            </div>
            <div className="infoArea w-full md:w-[60%]">
              <h3 className="title text-red-700 leading-snug my-0 text-xl md:text-3xl font-bold mb-5">
                {singlePostData[0]?.title.rendered}
              </h3>
              <div className="meta bg-red-100 text-red-800 px-5 py-3 mb-5 rounded inline-flex items-center gap-10">
                <div className="item flex items-center gap-2">
                  <i className="las la-calendar"></i>
                  {moment
                    .utc(singlePostData[0]?.date)
                    .local()
                    .startOf("seconds")
                    .fromNow()}
                </div>
              </div>
              <div className="leading-loose blog_content">
                {ReactHtmlParser(singlePostData[0]?.content.rendered)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
