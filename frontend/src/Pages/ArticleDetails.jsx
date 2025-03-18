import React, { useEffect, useState } from "react";
import youtube from "../Assets/youtube.png";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const ArticleDetails = () => {
  const [articleDetails, setArticleDetails] = useState([]);
  const { id } = useParams();
  const getArticleDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/articles/${id}`);
      setArticleDetails(res.data);
      console.log(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  useEffect(() => {
    getArticleDetails();
  }, [id]);

  const formatDate = (isoString) => {
    if (!isoString) return "";
    const dateObj = new Date(isoString);
    return dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <>
      <div className="section articlesdetails_container">
        <div className="articlesdetails_sec">
          <h3>{articleDetails.title}</h3>
          <img src={`http://localhost:4000/${articleDetails.image}`} alt="" />
          <br />
          <div className="sht_desc">
            <p>Published Date: {formatDate(articleDetails.date)}</p>
            <p>Category: {articleDetails.category}</p>
            <p>Posted By: {articleDetails.writtenBy}</p>
          </div>
          {/* <div class="sharethis-inline-share-buttons">
            <script
              type="text/javascript"
              src="https://platform-api.sharethis.com/js/sharethis.js#property=67b22c0b3c04610012ab7068&product=inline-share-buttons"
              async="async"
            ></script>
          </div> */}

          <script
            src="https://static.elfsight.com/platform/platform.js"
            async
          ></script>
          <div
            class="elfsight-app-ad0f6c27-259e-4828-9406-86f99f710a7a"
            data-elfsight-app-lazy
          ></div>
          <div className="article_desc">
            <p>{articleDetails.description}</p>
          </div>
        </div>
        {/*  */}
        <div className="advertisment_container">
          <div className="youtube_video">
            <iframe
              src="https://www.youtube.com/embed/K65DEXrR9As"
              title="MUST Know Important Laws of India!"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="channel_sec">
            <div className="channel_container">
              <img src={youtube} alt="" />
              <div className="channel_name">
                <h3 className=" text-black">Law Society</h3>
                <h6>For Video Content Subscribe Us On Youtube</h6>
              </div>
            </div>
            <div className="subscribe_btn">
              <a href="#">
                Subscribe Channel{" "}
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.193-.538 1.193H5.538c-.538 0-.538-.6-.538-1.193 0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365Zm-8.134 5.368a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M8.54 17.901a3.48 3.48 0 0 0 6.92 0H8.54Z"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* ads */}
          <div className="ads_container">Advertisment</div>
        </div>
      </div>
    </>
  );
};

export default ArticleDetails;
