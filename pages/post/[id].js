import Link from "next/link";
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
    <div className="p-10">
      <div className="container p-10 bg-white rounded border-[1px] border-red-300 border-dashed">
        <div className="wrapper flex items-center gap-16">
          <div className="imagearea w-[40%]">
            <Image src={singlePostData[0]?.better_featured_image.source_url} width="500" height='500' className="rounded-md" />
          </div>
          <div className="infoArea w-[60%]">
            <h3 className="title text-red-700 leading-relaxed text-3xl font-bold mb-5">
              {singlePostData[0]?.title.rendered}
            </h3>
            <div className="meta bg-red-100 px-5 py-3 mb-5 rounded flex items-center gap-10">
              <div className="item flex items-center gap-2">
                <i className="las la-calendar"></i>
                {moment.utc(singlePostData[0].date).local().startOf('seconds').fromNow()}
              </div>
            </div>
            <div className="leading-relaxed">

            {ReactHtmlParser(singlePostData[0]?.content.rendered)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
