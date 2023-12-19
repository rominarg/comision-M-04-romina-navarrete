import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="bg-red-500 flex justify-center items-center">
    <header className="bg-zinc-800 p-10">
      <h1 className="text-5xl py-2 font-bold">TuristBlog</h1>
      <p className="text-md text-slate-400">

      ¡Bienvenido a nuestro blog de viajes, donde cada entrada es una ventana a nuevas aventuras! Sumérgete en relatos fascinantes de viajeros apasionados que comparten sus experiencias por rincones del mundo. Desde destinos exóticos hasta joyas locales, nuestro objetivo es inspirarte a explorar y descubrir lugares inolvidables. Acompáñanos en este viaje virtual lleno de consejos prácticos, anécdotas emocionantes y sugerencias para convertir tus sueños de viaje en realidad. ¡Descubre el mundo a través de los ojos y las palabras de quienes ya han vivido la magia de viajar!
      </p>

      <Link
        className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
        to="/register"
      >
        Empezar
      </Link>
    </header>
  </section>
  );
}

export default HomePage;
