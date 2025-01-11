const express = require("express");
const router = express.Router();

const {
  showCustomers,
  editCustomer,
  updateCustomer,
  createCustomer,
  deleteCustomer,
  validateCustomer,
} = require("../controllers/customer.controller");

router.get("/", showCustomers);

router.get("/:id/edit", editCustomer);
router.post("/:id/edit", validateCustomer, updateCustomer);
router.post("/:id/delete", deleteCustomer);

module.exports = router;
