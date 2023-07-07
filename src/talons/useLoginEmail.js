import { useForm } from "react-hook-form";

const useLoginEmail = () => {
  const { register, handleSubmit } = useForm();
  return { register, handleSubmit };
};

export default useLoginEmail;
