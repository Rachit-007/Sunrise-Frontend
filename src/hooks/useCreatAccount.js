import React from "react";
import { useForm } from "react-hook-form";

const useCreatAccount = (setStep) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setStep(2);
    console.log(data);
  };

  return { register, handleSubmit, onSubmit };
};

export default useCreatAccount;
