import Users from "@/modules/users";
import { fireEvent, render, screen, waitFor } from "../test-utils";
// import { useQuery } from "@tanstack/react-query";

describe("Users page", () => {
  it("should render loading and remove loading after successfully fetch", async () => {
    render(<Users />);

    const loading = screen.getByLabelText("user-loading");
    expect(loading).toBeInTheDocument();

    await waitFor(() => {
      expect(loading).not.toBeInTheDocument();
    });
  });

  it("should render user list table", async () => {
    render(<Users />);

    const row = screen.getAllByRole("row");
    const johnDoe = screen.getByRole("cell", { name: /john_doe/i });
    expect(johnDoe).toBeInTheDocument();
    expect(row).toHaveLength(6);
  });

  it("should go to page detail with user id", async () => {
    render(<Users />);

    const username = screen.getByRole("link", { name: /john_doe/i });
    expect(username).toHaveAttribute("href", "/users/1");
  });
});
