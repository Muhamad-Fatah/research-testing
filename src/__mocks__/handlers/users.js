import { http, HttpResponse } from "msw";

export const userHandlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("https://dummyjson.com/users", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      users: [
        {
          id: 1,
          username: "john_doe",
          email: "john.doe@example.com",
          gender: "male",
          phone: "+1-555-1234",
        },
        {
          id: 2,
          username: "jane_smith",
          email: "jane.smith@example.com",
          gender: "female",
          phone: "+1-555-5678",
        },
        {
          id: 3,
          username: "mike_jones",
          email: "mike.jones@example.com",
          gender: "male",
          phone: "+1-555-8765",
        },
        {
          id: 4,
          username: "emily_watson",
          email: "emily.watson@example.com",
          gender: "female",
          phone: "+1-555-4321",
        },
        {
          id: 5,
          username: "chris_taylor",
          email: "chris.taylor@example.com",
          gender: "male",
          phone: "+1-555-9987",
        },
      ],
    });
  }),
  http.get("https://dummyjson.com/users/:id", ({ params }) => {
    const { id } = params;

    if (id == 999) return HttpResponse.error();
    return HttpResponse.json({ email: "fatah@gmail.com" });
  }),
];
