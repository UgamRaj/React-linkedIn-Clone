import { useState } from "react";
import { editProfile } from "../../firebase/firestoreApi";
import "./ProfileEdit.css";

const ProfileEdit = ({ onEdit, currentUser }) => {
  const [editInputs, setEditInputs] = useState(currentUser);

  const getinput = (e) => {
    // let { name, value } = e.target;
    // e.preventDefault();
    let { name, value } = e.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
    // const data = new FormData(e.currentTarget);
    // console.log(data.get("name"));
    // const firstName = data.get("firstName");
    // const lastName = data.get("lastName");
    // const headline = data.get("headline");
    // const country = data.get("country");
    // const city = data.get("city");
    // const company = data.get("company");
    // const college = data.get("college");
    // const industry = data.get("industry");
    // const website = data.get("website");
    // const aboutme = data.get("aboutme");
    // const skills = data.get("skills");

    // const userUpdatedData = {
    //   firstName,
    //   lastName,
    //   headline,
    //   country,
    //   city,
    //   company,
    //   college,
    //   industry,
    //   website,
    //   aboutme,
    //   skills,
    // };
    // console.log(data);
    // editProfile(currentUser?.id, userUpdatedData);
    // onEdit();
  };
  const updateProfileData = async () => {
    await editProfile(currentUser?.id, editInputs);
    await onEdit();
  };

  return (
    <div className="profile-card profileEdit">
      <div className="editBtn">
        <button onClick={onEdit}>Go Back</button>
      </div>
      <div className="profileEditInput">
        <label>First Name</label>
        <input
          onChange={getinput}
          type="text"
          name="firstName"
          className="editInput"
          placeholder="First Name"
          value={editInputs.firstName}
        />
        <label>Last Name</label>
        <input
          onChange={getinput}
          type="text"
          name="lastName"
          className="editInput"
          placeholder="Last Name"
          value={editInputs.lastName}
        />
        <label>Headline</label>
        <input
          onChange={getinput}
          type="text"
          className="editInput"
          placeholder="Headline"
          name="headline"
          value={editInputs.headline}
        />
        <label>Country</label>
        <input
          onChange={getinput}
          type="text"
          className="editInput"
          placeholder="Country"
          name="country"
          value={editInputs.country}
        />
        <label>City</label>
        <input
          onChange={getinput}
          type="text"
          className="editInput"
          placeholder="City"
          name="city"
          value={editInputs.city}
        />

        <label>Company</label>
        <input
          onChange={getinput}
          type="text"
          className="editInput"
          placeholder="Company"
          name="company"
          value={editInputs.company}
        />
        <label>Industry</label>
        <input
          onChange={getinput}
          type="text"
          className="editInput"
          placeholder="Industry"
          name="industry"
          value={editInputs.industry}
        />
        <label>College</label>
        <input
          onChange={getinput}
          type="text"
          className="editInput"
          placeholder="Collage"
          name="college"
          value={editInputs.college}
        />
        <label>Website</label>
        <input
          onChange={getinput}
          type="text"
          className="editInput"
          placeholder="Website"
          name="website"
          value={editInputs.website}
        />
        <label>About</label>
        <textarea
          rows={5}
          onChange={getinput}
          type="text"
          className="editInput"
          placeholder="About Me"
          name="aboutMe"
          value={editInputs.aboutMe}
        />
        <label htmlFor="">Skills</label>
        <input
          onChange={getinput}
          type="text"
          className="editInput"
          placeholder="Skills"
          name="skills"
          value={editInputs.skills}
        />
        <button className="saveBtn" onClick={updateProfileData}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileEdit;
