import { route } from "../src/apps/web";
import { logger } from "../src/apps/logger";
import supertest from "supertest";

describe("POST api/v1/users", () => {
  it("should ", async () => {
    const res = await supertest(route).post("/api/v1/users").send({
      username: "",
      password: "",
      name: "",
    });

    logger.debug(res.body);

    expect(res.status).toBe(400);
    expect(res.body.errors).toBeDefined();
  });
});
