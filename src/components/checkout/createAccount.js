import React from "react";
import { Link } from "react-router-dom";
import useCreatAccount from "../../hooks/useCreatAccount";

const CreateAccount = ({ setStep, setCartItems, email }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    userEmail,
    setUserEmail,
    setValue,
  } = useCreatAccount(setStep, setCartItems, email);

  console.log("email from checkout ", email);

  return (
    <div class="py-6">
      <h2 class="font-bold text-gray-900  text-xl uppercase">
        Contact Information
      </h2>
      {userEmail ? (
        <div className="mt-6 flex justify-between items-center">
          <h1 className="font-medium text-lg text-gray-700">{userEmail}</h1>
          <button
            className="inline-flex items-center justify-center px-6 py-2 text-sm font-bold max-sm:px-4 max-sm:py-3 text-white transition-all duration-200 bg-green-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900 hover:bg-green-700 max-sm:whitespace-nowrap"
            onClick={() => {
              setUserEmail(null);
              setValue("email", email);
            }}
          >
            Edit
          </button>
        </div>
      ) : (
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
                class="inline-flex items-center justify-center w-full px-5 py-3 max-sm:px-4 max-sm:py-3 text-sm font-bold text-white transition-all duration-200 bg-green-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900 hover:bg-green-700 max-sm:whitespace-nowrap"
                fdprocessedid="hnw2au"
              >
                Continue As Guest
              </button>
              <Link
                to="/signup"
                type="submit"
                class="inline-flex items-center justify-center w-full px-5 py-3  text-sm font-bold max-sm:px-4 max-sm:py-3 text-white transition-all duration-200 bg-green-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900 hover:bg-green-700 max-sm:whitespace-nowrap"
                fdprocessedid="hnw2au"
              >
                Create An Account
              </Link>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default CreateAccount;
