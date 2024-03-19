import Image from "next/image";
import { Hero ,SearchBar, Filters } from "./components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
       <div className='mt-12 padding-x padding-y max-width' id='descubrir'>
      <div className='home__text-container'>
        <h1 className='text-4x1 font-extrabold'>
          Catálogo
        </h1>
        <p>
          Encontrá ese que querés manejar acá
        </p>
      </div>
      <div className='home__filters'>
        <SearchBar />
        <div className="home__filter-container">
          <Filters title=''/>
          <Filters title=''/>
        </div>
      </div>
       </div>
    </main>
  );
}
