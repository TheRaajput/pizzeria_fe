import RegisterForm from "../../components/register/registerForm";

const Register = () => {
  return (
    <div className="bg-center bg-no-repeat bg-cover bg-loginImage">
      <div className="flex justify-center min-h-screen">
        <div className="flex-col items-center justify-center hidden w-1/2 p-10 lg:flex">
          <div className="flex flex-col self-start space-y-4 text-white">
            <h1 className="text-5xl font-bold">Welcome To Pizzeria</h1>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <div className="flex self-center justify-center w-full px-5 md:px-20 md:w-1/2">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
