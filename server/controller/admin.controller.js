const bcrypt = require("bcrypt");
const { adminService } = require("../service");
const { createToken } = require("../middlewares/auth");

// =========== create/add admin ===========
const createAdmin = async (req, res) => {
//   console.log(req.body, "body");
  try {
    let {name, email, password} = req.body;
    // bcrypt password
    const saltRounds = 10;
    const hashPassword = bcrypt.hashSync(req.body.password, saltRounds);

    const reqBody = {
      name: name,
      email: email,
      password: hashPassword,
    };

    if (!reqBody) {
      throw new Error("data not get");
    }

    let adminExist = await adminService.findAdminByEmail(req.body.email);

    if (adminExist) {
      throw new Error("email must be unique");
    }

    let admin = await adminService.createAdmin(reqBody);

    if (!admin) {
      throw new Error("something went wrong! admin not created");
    }

    res.status(201).json({
      success: true,
      message: "admin created successfully",
      data: admin,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error?.message || "something went wrong!",
    });
  }
};

// ========== login ===========
const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    let admin = await adminService.findAdminByEmail(email);

    if (!admin) {
      throw new Error("admin not found");
    } else {
      const validPassword = await bcrypt.compareSync(password, admin.password);

      if (!validPassword) {
        throw new Error("Invalid Password");
      }

      let token = createToken(admin);
      res.cookie("token", token);
      res.status(200).json({ message: "Login SUccess", token });
    }
  } catch (err) {
    res.status(500).json({ success: false, err: err.message });
  }
}

// ============ get admin ============
const getAdminList = async (req, res) => {
  try {
    let admin = await adminService.getAdminList()

    if(!admin){
      throw new Error('something went wrong! admin not found')
    }

    res.status(200).json({
      success: true,
      message: "admin get successfully",
      data: admin
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || 'something went wrong'
    })
  }
}

// ============ get admin by id ============
const getAdminById = async (req, res) => {
  try {
      let id = req.params.id;

      if(!id){
        throw new Error('id not get')
      }

      let admin = await adminService.getAdminById(id)

      if(!admin){
        throw new Error('CanNot find Admin')
      }

      res.status(200).json({
        success: true,
        message: "admin get successfully",
        admin
      })

  } catch (error) {
     res.status(400).json({
       success: false,
       message: error.message || "something went wrong",
     });
  }
}

module.exports = { createAdmin, login, getAdminList, getAdminById };
