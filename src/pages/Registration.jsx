import Form from "../components/Form";
import registrationBg from "../../public/images/registration-bg.png";

const Registration = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
        <img
          src={registrationBg}
          alt="Registration Background"
          className="hidden lg:block w-full h-full object-cover"
        />
        <div
          className="lg:hidden absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${registrationBg})` }}
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="max-w-md w-full">
          {/* <h2 className="text-2xl font-bold mb-4 text-center">Register</h2> */}
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Registration;
