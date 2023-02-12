import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import Alerta from '../components/Alerta'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})
    const [data, setData] = useState('');


    const navigate = useNavigate()

    useEffect (() => {
        const getAlbum = async () => {
    
        const config =  {
            username :"3136962979",
            password :"Andres!23"
        }
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}`, config).then((res) => {
            setData(res.data);
            console.log('data:',data);
        });
    
        };
        getAlbum()
    },[])
    
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(data.user))
    },[data])

    const handleSubmit = async e => {
        e.preventDefault();

        if([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });
            return
        }


        
        
            if(email === JSON.parse(localStorage.getItem("user")).email && password === JSON.parse(localStorage.getItem("user")).username){
        
                navigate('/Inicio')
            }
            else{
                
                setAlerta({
                    msg: "datos incorrectos",
                    error: true
                })
            }
            
        

    }

    const { msg } = alerta

return (
    <>
    <div className=" mx-72 my-52">

    
        <h1 className="text-sky-600 font-black text-6xl  capitalize">Inicia sesión en  {''}
            <span className="text-slate-700">Super Pagos</span>
        </h1>

        {msg && <Alerta alerta={alerta } />}
    
        <form 
            className="my-10 bg-white shadow rounded-lg p-10"
            onSubmit={handleSubmit}
        >
            <div className="my-5">
                <label 
                    className="uppercase text-gray-600 block text-xl font-bold"
                    htmlFor="email"
                >Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email de Registro"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                />
            </div>
            <div className="my-5">
                <label 
                    className="uppercase text-gray-600 block text-xl font-bold"
                    htmlFor="password"
                >Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Password de Registro"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    value={password}
                    onChange={ e => setPassword(e.target.value)}
                />
            </div>

            <input 
                type="submit"
                value="Iniciar Sesión"
                className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
            />
            
        </form>

        <nav className="lg:flex lg:justify-between">
            <Link 
                className='block text-center my-5 text-slate-500 uppercase text-sm'
                to="/registrar"
            >¿No tienes una cuenta? Regístrate</Link>

            <Link 
                className='block text-center my-5 text-slate-500 uppercase text-sm'
                to="/olvide-password"
            >Olvide Mi Password</Link>
        </nav>
        </div>
    </>
  )
}

export default Login