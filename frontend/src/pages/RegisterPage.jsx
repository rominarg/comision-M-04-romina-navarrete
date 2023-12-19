import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/posts");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    console.log("Form Values:", values); // Agrega este console.log para ver los valores de 'values'
  console.log("Username:", values.username); // Agrega este console.log para ver el valor de 'username'
    await signup(values);
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-5 rounded-md">
        <form onSubmit={onSubmit}>
          <h1 className="text-4xl text-center text-white font-semibold bg-pink-700">
            Registro
          </h1>

          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500">Username es requerido</p>
          )}

          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email es requerido</p>}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Passsword"
          />
          {errors.password && (
            <p className="text-red-500">Contraseña es requerida</p>
          )}

          <input
            type="text"
            {...register("avatarURL", { required: false })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Avatar image URL"
          />

          <button
            type="submit"
            className="bg-pink-700 text-white px-4 py-2 rounded-md my-2"
          >
            Registro
          </button>
        </form>
        <p className="flex justify-between px-4 py-2">
          ¿Ya tienes una cuenta registrada?
          <Link
            to="/login"
            className="px-4 font-semibold rounded-md text-white bg-teal-700"
          >
            Login
          </Link>
        </p>
        {registerErrors.map((error, i) => (
          <div
            className="bg-red-500 p-2 text-white px-4 py-2 rounded-md my-2"
            key={i}
          >
            {error}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegisterPage;
