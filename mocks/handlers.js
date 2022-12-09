import { rest } from "msw";

export const handlers = [
  rest.get("/data/profile", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: "Brian",
        bio: "My name is brian",
        connections: 32,
        viewed: 28,
      })
    );
  }),
];
