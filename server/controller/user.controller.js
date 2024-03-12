const { createToken } = require("../middlewares/auth");
const { userService } = require("../service");
const bcrypt = require("bcrypt");

// get all user
const getUser = async (req, res) => {
  try {
    let user = await userService.getUser();

    if (!user) {
      throw new Error("user not found");
    }

    res.status(200).json({
      success: true,
      message: "user get successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error?.message || "Somthing went wrong!",
    });
  }
};

// Register/create/add user controlleer
const createUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    let profile = req.file.path;

    // bcrypt
    const saltRounds = 10;
    const hashPassword = bcrypt.hashSync(password, saltRounds);
    const reqBody = {
      name: name,
      email: email,
      password: hashPassword,
      profile: profile,
    };

    if (!reqBody) {
      throw new Error("data not get");
    }

    if (profile) {
      reqBody.profile = req.file.filename;
    } else {
      throw new Error("profile image is required!!");
    }

    let findUserByEmail = await userService.findUserByEmail(req.body.email);

    if (findUserByEmail) {
      throw new Error("email must be unique");
    }

    let user = await userService.createUser(reqBody);

    if (!user) {
      throw new Error("something went wrong! user not created");
    }

    res.status(201).json({
      success: true,
      message: "user created successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error?.message || "something went wrong!",
    });
  }
};

// delete user
const deleteUser = async (req, res) => {
  try {
    let reqBody = req.body;
    let id = req.params.id;
    // console.log(reqBody);
    // console.log(id);

    if (!reqBody || !id) {
      throw new Error("something went wrong! data not get");
    }

    const userExist = await userService.findUserById(id);

    if (!userExist) {
      throw new Error("user not found");
    }

    let user = await userService.deleteUser(id);

    if (!user) {
      throw new Error("something went wrong! user not deleted");
    }

    res.status(200).json({
      success: true,
      message: "user delete successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error?.message || "something went wrong!",
    });
  }
};

// update user
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id, "id");

    let userExist = await userService.findUserById(id);
    if (!userExist) {
      throw new Error("User not found!");
    }

    let { name, email, password } = req.body;
    let profile = req.file.path;

    // bcrypt
    const saltRounds = 10;
    const hashPassword = bcrypt.hashSync(password, saltRounds);
    const reqBody = {
      name: name,
      email: email,
      password: hashPassword,
      profile: profile,
    };
    console.log(reqBody, "body");

    if (!reqBody) {
      throw new Error("data not get");
    }

    if (profile) {
      reqBody.profile = req.file.filename;
    } else {
      throw new Error("profile image is required!!");
    }

    let user = await userService.updateUser(id, reqBody);

    if (!user) {
      throw new Error("something went wrong!, user not update");
    }

    res.status(200).json({
      success: true,
      message: "user update successfully",
      data: user,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Somthing went wrong!",
    });
  }
};

// login user
const login = async (req, res) => {
  try {
    let email = req.body.email;
    let reqPassword = req.body.password;

    if (!email || !reqPassword) {
      throw new Error("data not get");
    }

    let user = await userService.findUserByEmail(email);
    if (!user) {
      throw new Error("user not found");
    }

    if (reqPassword === user.password) {
      let isPassword = await bcrypt.compareSync(req.body.password);
      console.log(user, "user");

      let token = createToken(user);
      res.cookie("token", token);
      res.status(200).json({ message: "login success", token });

      if (!isPassword) {
        throw new Error("Plz enter correct password");
      }
    }
  } catch (err) {
    res.status(500).json({ success: false, err: err.message });
  }
};



module.exports = { getUser, createUser, deleteUser, updateUser, login };
