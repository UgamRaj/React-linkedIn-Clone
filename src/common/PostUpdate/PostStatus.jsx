import { postStatus, getStatus, updatePost } from "../../firebase/firestoreApi";
import { useState, useMemo } from "react";
import { getCurrentTimeStamp } from "../../helpers/useMoment";
import { getUniqueID } from "../../helpers/getUniqueId";
import ModalComponent from "../Modal/ModalComponent";
import { uploadPostImage } from "../../ImageUpload";
import PostCard from "../PostCard/PostCard";

const PostStatus = ({ currentUser }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatuses, setAllStatus] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [postImage, setPostImage] = useState("");
  // console.log(currentUser.firstName);
  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      userEmail: currentUser.email,
      userName: currentUser.firstName + " " + currentUser.lastName,
      postID: getUniqueID(),
      //   userID: currentUser.id,
      postImage: postImage,
    };
    await postStatus(object);
    await setModalOpen(false);
    setIsEdit(false);
    await setStatus("");
  };
  //   console.log(allStatuses);
  const getEditData = (posts) => {
    setModalOpen(true);
    setStatus(posts?.status);
    setCurrentPost(posts);
    setIsEdit(true);
  };

  const updateStatus = () => {
    updatePost(currentPost.id, status, postImage);
    setModalOpen(false);
  };

  useMemo(() => {
    getStatus(setAllStatus);
  }, []);

  return (
    <div>
      <div className="sharebox">
        <div>
          <img src="/images/user.svg" alt="user" />
          <button
            onClick={() => {
              setModalOpen(true);
              setIsEdit(false);
            }}
          >
            Start a post
          </button>
        </div>

        <ModalComponent
          setStatus={setStatus}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          status={status}
          sendStatus={sendStatus}
          //   isEdit={isEdit}
          //   updateStatus={updateStatus}
          //   uploadPostImage={uploadPostImage}
          //   postImage={postImage}
          //   setPostImage={setPostImage}
          //   setCurrentPost={setCurrentPost}
          //   currentPost={currentPost}
        />
        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="media" />
            <span>Media</span>
          </button>
          <button>
            <img src="/images/event-icon.svg" alt="event" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article-icon.svg" alt="article" />
            <span>Write article</span>
          </button>
        </div>
      </div>

      <div>
        {allStatuses.map((post) => {
          return (
            <div key={post.id}>
              <PostCard post={post} />
              {/* <PostsCard posts={posts} getEditData={getEditData} /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostStatus;
