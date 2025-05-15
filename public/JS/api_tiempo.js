import { APIKEY } from "./components/apiKEY.js";

async function tiempo(ciudad) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},ES&appid=${APIKEY}&units=metric&lang=es`;

    try {
        const response = await fetch(url); 
        return await response.json(); 
    } catch (error) {
        console.log(error);
        
    }
}


tiempo('Ceuta').then(info => {

    const tiempoContainer = document.querySelector(".tiempo"); 
    const info_tiempo = document.createElement("section"); 
    info_tiempo.classList.add("info_tiempo"); 

    let h3 = document.createElement("h3"); 
    h3.textContent = 'UBICACIÓN'; 

    let ubicacion = document.createElement("h2");
    ubicacion.textContent = info.name; 

    let temp = document.createElement("p");
    temp.classList.add("temp"); 
    temp.textContent = `${info.main.temp}º`; 
    
    let descripcion = document.createElement("p"); 
    descripcion.textContent = info.weather[0].description;
    
    let tempsContainer = document.createElement("article");

    let temp_min = document.createElement("p");
    temp_min.textContent = `Min. ${info.main.temp_min}º`;

    let temp_max = document.createElement("p")
    temp_max.textContent = `Max. ${info.main.temp_max}º`; 

    tempsContainer.append(temp_min, temp_max);
    
    info_tiempo.append(h3,ubicacion, temp, descripcion, tempsContainer)

    tiempoContainer.appendChild(info_tiempo); 
})


/*
function Tiempo({ info }) {
    return (
      <section className="info_tiempo">
        <h3>UBICACIÓN</h3>
        <h2>{info.name}</h2>
        <p className="temp">{info.main.temp}º</p>
        <p>{info.weather[0].description}</p>
        <article>
          <p>Min. {info.main.temp_min}º</p>
          <p>Max. {info.main.temp_max}º</p>
        </article>
      </section>
    );
  }
  
  function App() {
    const [info, setInfo] = useState(null);
  
    useEffect(() => {
      tiempo('Ceuta').then(setInfo);
    }, []);
  
    return <>{info && <Tiempo info={info} />}</>;
  }
  
  // Montar en section.tiempo
  const tiempoSection = document.querySelector('section.tiempo');
  if (tiempoSection) {
    createRoot(tiempoSection).render(<App />);
  }
*/
