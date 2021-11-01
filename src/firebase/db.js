import { firebase } from "./firebase";

//search for pics with perticular tags
const searchPics = (tag) => {
  return firebase
    .database()
    .ref("tags")
    .orderByChild("name")
    .equalTo(tag)
    .once("value")
    .then((snapshot) => {
      return snapshot.val();
    });

  //returns an array of all the pics with the tag
};

const searchTags = (url) => {
  return firebase
    .database()
    .ref("images")
    .orderByChild("name")
    .equalTo(url)
    .once("value")
    .then((snapshot) => {
      return snapshot.val();
    });
};

export { searchPics, searchTags };
