import React, { useEffect, ReactDOM } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../store/posts";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import moment from "moment/moment";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";

const SinglePost = () => {
  const router = useRouter();
  const id = router.query.id;

  console.log('router',router);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const allPosts = useSelector((state) => state.postsSlice.data);
  const singlePostData = allPosts.filter((item) => item.id === id);
  console.log('allPosts', allPosts);  
  console.log('singlePostData', singlePostData);


  return (
    <div className=" py-10 mx-auto max-w-7xl">
      <div className="container p-10 bg-white rounded border-[1px] border-red-300 border-dashed">
        <div className="wrapper flex items-center flex-col justify-center gap-16">
          <div className="imagearea w-full">
            <Image
              src={singlePostData[0]?.better_featured_image.source_url}
              width="500"
              height="500"
              alt="some info"
              className="rounded-md shadow-md"
            />
          </div>
          <div className="infoArea w-full">
            <h3 className="title text-red-700 leading-snug my-0 text-5xl font-bold mb-5">
              {singlePostData[0]?.title.rendered}
            </h3>
            <div className="meta bg-red-100 px-5 py-3 mb-5 rounded inline-flex items-center gap-10">
              <div className="item flex items-center gap-2">
                <i className="las la-calendar"></i>
                {moment
                  .utc(singlePostData[0]?.date)
                  .local()
                  .startOf("seconds")
                  .fromNow()}
              </div>
            </div>
            <div className="leading-loose">
              {ReactHtmlParser(singlePostData[0]?.content.rendered)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
