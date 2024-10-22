import UserDetail from "@/modules/users/detail";
import { render, screen, waitFor } from "../test-utils";
import { useParams } from "next/navigation";

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useParams: jest.fn(),
}));

describe("User detail page", () => {
  it("should render user by id", async () => {
    useParams.mockReturnValue({ id: "1" });
    render(<UserDetail />);

    // Expect loading while fetching
    const loading = screen.getByLabelText("user-loading");
    expect(loading).toBeInTheDocument();

    await waitFor(() => {
      const email = screen.getByText(/fatah@gmail.com/i);
      expect(email).toBeInTheDocument();
    });
  });

  it("should render error", async () => {
    useParams.mockReturnValue({ id: "999" });
    render(<UserDetail />);

    // Expect loading while fetching
    const loading = screen.getByLabelText("user-loading");
    expect(loading).toBeInTheDocument();

    await waitFor(() => {
      const error = screen.getByText(/Internal server error/i);
      expect(error).toBeInTheDocument();
    });
  });
});
