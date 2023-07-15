import React from "react";
import { useForm } from "react-hook-form";
import useCreatAccount from "../../hooks/useCreatAccount";

const CreateAccount = ({ setStep }) => {
  const { register, handleSubmit, onSubmit } = useCreatAccount(setStep);

  return (
    <div class="py-6">
      <h2 class="font-bold text-gray-900 text-base">Contact Information</h2>
      <form class="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <div class="space-y-5">
          <div>
            <label for="" class="text-sm font-medium text-gray-600">
              {" "}
              Email Address{" "}
            </label>
            <div class="mt-2">
              <input
                type="text"
                name=""
                id=""
                {...register("email")}
                placeholder="Enter email address"
                class="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md bg-gray-50 caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
                fdprocessedid="a3i12l"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              class="inline-flex items-center justify-center w-full px-6 py-4 max-sm:px-4 max-sm:py-3 text-sm font-bold text-white transition-all duration-200 bg-green-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900 hover:bg-green-700 max-sm:whitespace-nowrap"
              fdprocessedid="hnw2au"
            >
              Continue As Guest
            </button>
            <button
              type="submit"
              class="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold max-sm:px-4 max-sm:py-3 text-white transition-all duration-200 bg-green-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900 hover:bg-green-700 max-sm:whitespace-nowrap"
              fdprocessedid="hnw2au"
            >
              Create An Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
