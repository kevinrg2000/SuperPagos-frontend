import { useEffect, useState } from "react";
import axios from "axios";

const Inicio = () => {
  const [data, setData] = useState({});
  const [modulo, setModulo] = useState();
  const [categoria, setCategoria] = useState();
  

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

  

  const categoryType =  (array ) =>{

    const arreglo =  array
    if( arreglo?.categories){
      return(
        <>
          {arreglo?.categories.map((e)=>{ return (
        <div class="text-black ml-4">
          {e.name}
          {categoryType(e)}
        </div>

          )})}
        </>
      )
    }
    if( arreglo?.subCategories){
      return(
        <>
          {arreglo?.subCategories.map((e)=>{ return (
        <div class="text-black ml-4">
          {e.name}
          {categoryType(e)}
        </div>

          )})}
        </>
      )
    }
    if( arreglo?.products){
      return(
        <div className="flex flex-wrap  mt-10">
          {arreglo?.products?.map((producto) => {
            return (
              <div className=" bg-white m-5 w-32 h-16 rounded-xl">
                <button className="flex flex-wrap mt-3 ml-10 w-10 h-10 content-center items-center">
                  <img
                    className=" w-10 h-auto flex "
                    src={`https://assets.refacil.co/providers/${producto.image}`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      )
    }

  }

  const words = (word) => {
    if (word == "sells") return "vende";
    else if (word == "charge") return "cargar";
    else if (word == "credits") return "creditos";
    else if (word == "marketplace") return "mercado";
    else if (word == "payments") return "pagos";
    else if (word == "link") return "enlace";
    else if (word == "withdrawal") return "retiro";
  };
  
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
                    setCategoria("")
                  }}
                >
                  {words(modulo?.name)}
                </button>
              </li>
            );
          })}
        </div>

        <div className="flex ml-7 text-2xl to-black font-semibold bg-gradient-to-b from-blue-450 to-blue-350  w-10 max-h-full ">
          <div className="">
            <div className="flex border-b-indigo-500">
              {modulo?.categories?.map((categoria) => {
                return (
                  <div className="border-b-indigo-500">
                    <button
                      class="text-gray-600 hover:text-blue-800 text-base m-4 w-20 border-b-indigo-500"
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
              {
                categoryType(categoria)
                 }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
