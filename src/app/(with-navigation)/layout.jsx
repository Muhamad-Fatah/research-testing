import { Breadcrumb } from "flowbite-react";

const NavigationLayout = ({ children }) => {
  return (
    <div className="h-svh p-6">
      <div className="flex gap-x-4 items-center mb-4">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/users">User List</Breadcrumb.Item>
          <Breadcrumb.Item href="/users/create">Create User</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {children}
    </div>
  );
};

export default NavigationLayout;
