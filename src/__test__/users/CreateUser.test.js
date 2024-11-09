import CreateUser from "@/modules/users/create";
import { act, fireEvent, render, screen, waitFor } from "../test-utils";

describe("Create user", () => {
  it("Should render text input and submit button", () => {
    render(<CreateUser />);

    expect(
      screen.getByRole("textbox", { name: /product name/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /category/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /create/i })).toBeInTheDocument();
  });

  it("Should render error message", async () => {
    render(<CreateUser />);

    fireEvent.click(screen.getByRole("button", { name: /create/i }));

    await waitFor(() => {
      expect(screen.getByText("Product name is required"));
      expect(screen.getByText("Category is required"));
    });
  });

  it("Should show notification when success create product", async () => {
    render(<CreateUser />);

    const productName = "larutan cap kaki tiga";
    const productCategory = "minuman";

    const nameInput = screen.getByRole("textbox", { name: /product name/i });
    const categoryInput = screen.getByRole("textbox", { name: /category/i });
    const button = screen.getByRole("button", { name: /create/i });

    fireEvent.change(nameInput, { target: { value: productName } });
    fireEvent.change(categoryInput, { target: { value: productCategory } });
    fireEvent.click(button);

    // bisa juga seperti ini, nanti nya code dibawahnya tidak perlu await lagi
    // await act(async () => {
    // fireEvent.click(button);
    // });

    await waitFor(() => {
      // Bisa juga kayak gini, cuman yang bawah sekalian nyoba tangkep data yang di post ke msw
      //   expect(screen.getByText(/Success create product/i));

      expect(
        screen.getByText(
          new RegExp(
            `Created product with name ${productName} and category ${productCategory}`,
            "i"
          )
        )
      );
    });
  });
});
