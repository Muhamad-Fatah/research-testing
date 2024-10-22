import { server } from "@/__mocks__/node";
import "@testing-library/jest-dom";

// Start server before all tests
beforeAll(() => server.listen());

// Reset handlers after each test to avoid test state leak
afterEach(() => server.resetHandlers());

// Close server after tests
afterAll(() => server.close());
