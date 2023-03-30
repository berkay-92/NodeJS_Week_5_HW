import { Sequelize } from "sequelize";
import Posts from "../models/postModel.js";
import User from "../models/userModel.js";
import Comment from "../models/commentModel.js";

const sequelize = new Sequelize("Bloggy", "hicoders", "hicoders_12", {
  host: "localhost",
  dialect: "mysql",
});

User.hasMany(Comment);
Comment.belongsTo(User);

Posts.hasMany(Comment);
Comment.belongsTo(Posts);

User.hasMany(Posts);
Posts.belongsTo(User);

const connectionToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await User.sync();
    await Posts.sync();
    await Comment.sync();

    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connectionToDatabase();
