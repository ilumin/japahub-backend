import express from "express";

const router = express.Router();

router.get("/api/messenger/test", (req, res) => {
  res.send("Hi japa folks!");
});

export { router as testRouter };
