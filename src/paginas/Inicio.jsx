
import { useEffect, useState } from "react";
import axios from "axios";


const Inicio =  () =>{
  const [data, setData] = useState({});
  const [modulo, setModulo] = useState();
  const [categoria, setCategoria] = useState();
  const [subCategoria, setSubCategoria] = useState();

  useEffect(() => {
    const getAlbum = async () => {
      const config = {
        username: "3136962979",
        password: "Andres!23",
      };
      await axios
        .post(`${import.meta.env.VITE_BACKEND_URL}`, config)
        .then((res) => {
          setData(res.data);
          console.log("data:", data);
        });
    };
    getAlbum();
  }, []);

  return (
    <div className=" h-full w-full ">
      <div className=" font-bold text-4xl m-4">Seleccione un producto</div>
      <div className="flex flex-row mt-4">
        <div className="  flex-wrap ">
          {data.modules?.map((modulo) => {
            return (
              <li className="list-none">
                <button
                  className=" text-gray-600  font-medium text-xl m-4 hover:text-sky-600 "
                  onClick={(e) => {
                    setModulo(modulo);
                  }}
                >
                  {modulo.name}
                </button>
              </li>
            );
          })}
        </div>

        <div className="flex ml-7 text-2xl to-black font-semibold bg-gradient-to-b from-blue-450 to-blue-350  w-10 max-h-full ">
          <div className="">
            <div className="flex">
              {modulo?.categories?.map((categoria) => {
                return (
                  <div className="">
                    <button
                      class="text-sky-600 hover:text-blue-800 text-base m-3"
                      onClick={(e) => {
                        setCategoria(categoria);
                      }}
                    >
                      {categoria.name}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="">
              {categoria?.subCategories?.map((subCategorias) => {
                return (
                  
                    <div class="text-black" >
                      {subCategorias.name}
                      <div className="flex flex-wrap  mt-10">

                      {subCategorias?.products?.map((producto) => {
                        return(
                          
                          <button className="flex flex-wrap m-4 w-10 h-10">
                            <img className=" w-10 h-auto flex "src={ `https://assets.refacil.co/providers/${producto.image}`} />
                            </button>
                      )})}
                      </div>
                    </div>
                  
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Inicio