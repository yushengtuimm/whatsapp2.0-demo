import firebase from "firebase";

const getRecipientEmail = (users: string[], userLoggedIn: firebase.User) => {
  return users?.filter(
    (userToFilter) => userToFilter !== userLoggedIn?.email
  )[0];
};

export default getRecipientEmail;
