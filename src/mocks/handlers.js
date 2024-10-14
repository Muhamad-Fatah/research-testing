// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("https://66b46dac9f9169621ea2dbd1.mockapi.io/users", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
      {
        createdAt: "2024-10-14T14:22:37.315Z",
        name: "fatah",
        avatar: "avatar.jpg",
        email: "email@mail.com",
        job_title: "job title",
        id: "1",
      },
      {
        createdAt: "2024-10-14T14:22:37.315Z",
        name: "udin",
        avatar: "avatar.jpg",
        email: "email@mail.com",
        job_title: "job title",
        id: "2",
      },
      {
        createdAt: "2024-10-14T14:22:37.315Z",
        name: "bambang",
        avatar: "avatar.jpg",
        email: "email@mail.com",
        job_title: "job title",
        id: "3",
      },
      {
        createdAt: "2024-10-14T14:22:37.315Z",
        name: "sutaryo",
        avatar: "avatar.jpg",
        email: "email@mail.com",
        job_title: "job title",
        id: "4",
      },
      {
        createdAt: "2024-10-14T14:22:37.315Z",
        name: "stepen",
        avatar: "avatar.jpg",
        email: "email@mail.com",
        job_title: "job title",
        id: "5",
      },
    ]);
  }),
];
