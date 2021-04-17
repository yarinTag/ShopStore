const router = require("express").Router();

const {
  newOrder,
  getSingleOrder,
  myOrder,
  allOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const { isAuthenticated, authorizeRoles } = require("../utils/auth");

router.post("/order/new", isAuthenticated, newOrder);
router.get("/order/:id", isAuthenticated, getSingleOrder);
router.get("/orders/me", isAuthenticated, myOrder);
//--------angular------//
router.get("/orders", allOrders);
router.delete("/order/delete/:id", deleteOrder);
router.put("/order/edit/:id", updateOrder);
//---------Admin Routs----------//
router.get(
  "/admin/orders",
  isAuthenticated,
  authorizeRoles("admin"),
  allOrders
);
router.put(
  "/admin/order/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  updateOrder
);
router.delete(
  "/admin/order/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteOrder
);
module.exports = router;
