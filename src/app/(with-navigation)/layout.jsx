// import { Breadcrumb } from "flowbite-react";

import { Anchor, Breadcrumbs } from "@mantine/core";

const items = [
  { title: "User List", href: "/users" },
  { title: "Create User", href: "/users/create" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const NavigationLayout = ({ children }) => {
  return (
    <div className="h-svh p-6">
      <div className="flex gap-x-4 items-center mb-4">
        <Breadcrumbs>{items}</Breadcrumbs>
      </div>
      {children}
    </div>
  );
};

export default NavigationLayout;
