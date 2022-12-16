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
  rest.get("/data/recommends", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: "Brian", info: "this is info" },
        { name: "Dawnleaf", info: "this is dawnleaf" },
        {
          name: "Imzozo",
          info: "this is imzozo. born form Hhan country at 1033 year. i was not educated...",
        },
      ])
    );
  }),
];
