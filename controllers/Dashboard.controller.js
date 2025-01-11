const Customer = require("../libs/models/customer.model");
const Invoice = require("../libs/models/invoice.model");
const { USDollar } = require("../libs/formatter");

const showDashboard = async (req, res) => {
  const query = { owner: req.session.userId };
  const invoiceCount = await Invoice.countDocuments(query);
  const customerCount = await Customer.countDocuments(query);
};

module.exports = {
  showDashboard,
};
