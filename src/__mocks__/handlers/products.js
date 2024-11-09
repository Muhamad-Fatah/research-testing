import { http, HttpResponse } from "msw";

export const productHandlers = [
  http.post("https://dummyjson.com/products/add", async ({ request }) => {
    const { title, category } = await request.json();
    return HttpResponse.json({
      id: 1,
      title,
      category,
    });
  }),
];
