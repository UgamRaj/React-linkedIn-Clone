// import uuid from "react-uuid";
import { v4 as uuidv4 } from "uuid";

export const getUniqueID = () => {
  let id = uuidv4();
  // console.log("🚀 ~ getUniqueID ~ id:", id);

  return id;
};
