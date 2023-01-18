import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../store/posts";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import Router, { useRouter } from "next/router";
import Banner from "./../../components/Banner";
import moment from "moment/moment";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import Image from "next/image";

const SingleBlogPostPage = () => {
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
      <div className="postWrapper bg-white mx-auto w-[75%] p-10 my-10 border-2 border-dashed rounded-md">
        <article>
          <h3 className="title text-center text-red-700 leading-relaxed text-5xl font-bold mb-5">
            {singleBlogPostData[0]?.title.rendered}
          </h3>
          <figure>
            <Image
              src={
                singleBlogPostData[0]?.better_featured_image.media_details
                  .sizes.large.source_url
              }
              width="700"
              height="400"
              className="rounded-md h-96 mx-auto object-cover"
            />
          </figure>
          <div className="meta my-10 bg-red-100 px-5 py-3 mb-5 rounded flex items-center gap-10">
            <div className="item flex items-center gap-2">
              <i className="las la-calendar"></i>
              {moment
                .utc(singleBlogPostData[0]?.date)
                .local()
                .startOf("seconds")
                .fromNow()}
            </div>
          </div>

          <div className="leading-loose">
            {ReactHtmlParser(singleBlogPostData[0]?.content.rendered)}
          </div>
        </article>
      </div>

    </>
  );
};

export default SingleBlogPostPage;
