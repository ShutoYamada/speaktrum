import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello, Hono!");
});

app.get("/ping", (c) => {
  return c.json({ message: "pong" });
});

app.post("/echo", async (c) => {
  const body = await c.req.json();
  return c.json({ received: body });
});

export default app;
