"use client";

import { Loader } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";

const UserDetail = () => {
  const { id } = useParams();

  const {
    data: { data = {} } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user-detail", id],
    queryFn: () => axios.get(`https://dummyjson.com/users/${id}`),
  });
  const { email } = data;

  if (isLoading) return <Loader aria-label="user-loading" />;
  if (error) return <h1>Internal server error</h1>;

  return (
    <>
      <p>{email}</p>
    </>
  );
};

export default UserDetail;
