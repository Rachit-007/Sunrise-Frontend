import useBreadcrumb from "../../talons/useBreadcrumb";

const BreadCrumb = ({ productName }) => {
  const { navigate } = useBreadcrumb();

  return (
    <ul className="flex flex-wrap items-center mb-3">
      <span onClick={() => navigate()}>
        <li className="mr-6">
          <div className="flex items-center text-base font-medium text-gray-400 hover:text-gray-500">
            <span className="cursor-pointer">Home</span>
            <svg
              className="ml-6"
              width="4"
              height="7"
              viewBox="0 0 4 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </li>
      </span>
      {productName && (
        <li>
          <div className="text-sm font-medium text-green-600 hover:text-green-700 cursor-pointer">
            <span className="text-base">{productName}</span>
          </div>
        </li>
      )}
    </ul>
  );
};

export default BreadCrumb;
