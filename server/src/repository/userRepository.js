import User from "../models/userModel.js";

const getUserList = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (pUser) => {
  try {
    return await User.create(pUser);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (pUserId) => {
  try {
    await User.destroy({
      where: {
        id: pUserId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// add> create()
// delete>destroy({where})
// update> set, save

export { getUserList, addUser, deleteUser };
