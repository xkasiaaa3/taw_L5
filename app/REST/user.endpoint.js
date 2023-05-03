import business from "../business/business.container";
import applicationException from "../service/applicationException";
import admin from "../middleware/admin";
import auth from "../middleware/auth";

const userEndpoint = (router) => {
  router.post("/api/user/auth", async (request, response, next) => {
    response.status(200).send({ auth: "ok" });
  });

  router.post("/api/user/create", async (request, response, next) => {
    response.status(200).send({ create: "ok" });
  });

  router.delete(
    "/api/user/logout/:userId",
    auth,
    async (request, response, next) => {
      response.status(200).send({ logout: "ok" });
    }
  );
};

export default userEndpoint;
