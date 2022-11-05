import express from "express";

// Import api service routes

// import routeA from 'api_services/a'
// import routeB from 'api_services/b'

// Init express router
const router = express.Router();

// index route
router.get("/", (_req, res) => {
  res.send("Hello world!");
});

// Add api service routes
// router.use('/records', routerA);
// router.use('/missions', routerB);

export default router;
