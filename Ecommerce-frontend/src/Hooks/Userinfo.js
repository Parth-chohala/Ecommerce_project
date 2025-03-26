
// Custom hook to store user information
const User_id_provider = () => {
  return localStorage.getItem("user") || null;
};
const setUser = (user) => {
    localStorage.setItem("user", user);
};

const removeUser = () => {
    localStorage.removeItem("user");
};
export { User_id_provider, setUser,removeUser };