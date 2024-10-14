import Users from "@/modules/users";
import { render, screen, waitFor } from "../test-utils";
// import { useQuery } from "@tanstack/react-query";

describe("Users page", () => {
  it("should render user list table", async () => {
    render(<Users />);

    const loading = screen.getByLabelText("user-loading");
    expect(loading).toBeInTheDocument();

    await waitFor(
      () => {
        const row = screen.getAllByRole("row");
        expect(row).toHaveLength(6);
        expect(loading).not.toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });
});
