"use client";

import { Button, Notification, TextInput } from "@mantine/core";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const schema = yup
  .object({
    title: yup.string().required("Product name is required"),
    category: yup.string().required("Category is required"),
  })
  .required();

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const createProduct = useMutation({
    mutationFn: (data) =>
      axios.post("https://dummyjson.com/products/add", data),
    onSuccess: ({ data }) => {
      setShowNotif(true);
      setProduct(data);
    },
  });

  const [showNotif, setShowNotif] = useState(false);
  const [product, setProduct] = useState({ title: "", category: "" });

  const onSubmit = (data) => {
    createProduct.mutate(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Product name"
          placeholder="Input product name"
          error={errors["title"]?.message}
          {...register("title")}
        />
        <TextInput
          label="Category"
          placeholder="Input category"
          error={errors["category"]?.message}
          {...register("category")}
        />
        <Button type="submit">Create</Button>
      </form>

      {showNotif && (
        <Notification
          title="Success create product"
          aria-label="success-create-product"
        >
          Created product with name {product.title} and category{" "}
          {product.category}
        </Notification>
      )}
    </>
  );
};

export default CreateUser;
