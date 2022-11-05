import express from "express";
import logger from "morgan";
import cors from "cors";
import router from "./routes";
import config from "./config";

const app = express();

// Middleware to parse body to JSON
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(logger(config.LOGGER));

// CORS config
const whiteList = ["http://localhost:3000"];

// const corsOptions = {
//   origin: (origin: any, callback: any) => {
//     if (whiteList.indexOf(origin) === -1) callback(null, true);
//     else callback(new Error("Nor allowed by CORS"));
//   },
// };

app.use(cors({ origin: whiteList }));

// Add routes
app.use(router);

console.log(`NODE_ENV=${config.NODE_ENV}`);
console.log(`LOGGER=${config.LOGGER}`);

app.listen(config.PORT, () => {
  console.log(`App listening on port ${config.PORT}`);
});
