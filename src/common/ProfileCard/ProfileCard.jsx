import { useMemo, useState } from "react";
import "./Profilecard.css";
import { HiOutlinePencil } from "react-icons/hi";
import {
  getSingleStatus,
  getSingleUser,
  // getStatus,
} from "../../firebase/firestoreApi";
import PostCard from "../PostCard/PostCard";

const ProfileCard = ({ currentUser, onEdit }) => {
  //   console.log(currentUser);
  const [allStatuses, setAllStatus] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});

  useMemo(() => {
    if (location?.state?.id) {
      getSingleStatus(setAllStatus, location?.state?.id);
    }

    if (location?.state?.email) {
      getSingleUser(setCurrentProfile, location?.state?.email);
    }
    // getStatus(setAllStatus);
  }, []);

  return (
    <>
      <div className="profile-card">
        <div className="editBtn">
          <HiOutlinePencil className="edit-icon" onClick={onEdit} />
        </div>

        <div className="profileinfo">
          <div>
            <h3 className="useNameProfile">
              {Object.values(currentProfile).length === 0
                ? currentUser.firstName + " " + currentUser.lastName
                : currentProfile?.firstName}
            </h3>
            <p className="heading">
              {Object.values(currentProfile).length === 0
                ? currentUser.headline
                : currentProfile?.headline}
            </p>
            <p>
              {Object.values(currentProfile).length === 0
                ? `${currentUser.city}, ${currentUser.country} `
                : `${currentProfile?.city}, ${currentUser.country}`}
            </p>
          </div>
          <div className="rightInfo">
            <p className="heading">{currentUser?.college}</p>
            <p>{currentUser?.company}</p>
          </div>
        </div>
      </div>
      <div className="postStausMain">
        {allStatuses
          .filter(
            (item) => item.userEmail === localStorage.getItem("userEmail")
          )
          .map((post) => {
            return (
              <div key={post.id}>
                <PostCard post={post} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ProfileCard;
