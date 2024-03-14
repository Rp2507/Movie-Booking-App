const { adminSchema } = require("../models");

// ========== find admin by email ========
const findAdminByEmail = (email) => {
  return adminSchema.findOne({ email });
};

// ========= create/add admin ===========
const createAdmin = (reqBody) => {
  return adminSchema.create(reqBody);
};

// ========== get admin ===========
const getAdminList = () => {
  return adminSchema.find()
}

module.exports = { findAdminByEmail, createAdmin, getAdminList };
