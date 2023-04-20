
const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://i.pinimg.com/originals/e4/d4/bc/e4d4bc510d283101a3eb3aa4d1c6bdc3.jpg",
      rooms: 5,
      m: 500
    }
  ];

  




  const propiedadesDiv = document.querySelector(".propiedades");
  const totalPropiedades = document.querySelector("#Propiedades span");
  
  const generarTarjetaPropiedad = (propiedad) => {
    const tarjetaPropiedad = document.createElement("div");
    tarjetaPropiedad.classList.add("propiedad");
  
    const imagen = document.createElement("div");
    imagen.classList.add("img");
    imagen.style.backgroundImage = `url(${propiedad.src})`;
    tarjetaPropiedad.appendChild(imagen);
  
    const infoPropiedad = document.createElement("section");
    const nombre = document.createElement("h5");
    nombre.textContent = propiedad.name;
    infoPropiedad.appendChild(nombre);
  
    const detalles = document.createElement("div");
    detalles.classList.add("d-flex", "justify-content-between");
    const cuartos = document.createElement("p");
    cuartos.textContent = `Cuartos: ${propiedad.rooms}`;
    const metros = document.createElement("p");
    metros.textContent = `Metros: ${propiedad.m}`;
    detalles.appendChild(cuartos);
    detalles.appendChild(metros);
    infoPropiedad.appendChild(detalles);
  
    tarjetaPropiedad.appendChild(infoPropiedad);
  
    const verMas = document.createElement("button");
    verMas.classList.add("btn", "btn-info", "ver-mas");
    verMas.textContent = "Ver más";
    verMas.dataset.toggle = "modal";
    verMas.dataset.target = "#modal-propiedad";
    verMas.dataset.name = propiedad.name;
    verMas.dataset.description = propiedad.description;
    verMas.dataset.src = propiedad.src;
    verMas.dataset.rooms = propiedad.rooms;
    verMas.dataset.metros = propiedad.m;
    tarjetaPropiedad.appendChild(verMas);
  
    return tarjetaPropiedad;
  };
  
  let propiedadesFiltradas = [...propiedadesJSON];

const filtrarPropiedades = (rooms, mFrom, mTo) => {
  propiedadesFiltradas = propiedadesJSON.filter(
    (propiedad) =>
      propiedad.rooms == rooms && propiedad.m >= mFrom && propiedad.m <= mTo
  );
  mostrarPropiedades(propiedadesFiltradas);


  };
  
  const mostrarPropiedades = (propiedades) => {
    propiedadesDiv.innerHTML = "";
    totalPropiedades.textContent = propiedades.length;
    propiedades.forEach((propiedad) => {
      const tarjetaPropiedad = generarTarjetaPropiedad(propiedad);
      propiedadesDiv.appendChild(tarjetaPropiedad);
    });
  };
  
  mostrarPropiedades(propiedadesFiltradas);
  
  const btnFiltrarPropiedades = document.querySelector("#btnFiltrarPropiedades");
  const selectCuartos = document.querySelector("#cuartos");
  const inputMetrosDesde = document.querySelector("#metros_desde");
  const inputMetrosHasta = document.querySelector("#metros_hasta");
  
  btnFiltrarPropiedades.addEventListener("click", () => {
    const cuartos = selectCuartos.value;
    const mFrom = parseInt(inputMetrosDesde.value);
    const mTo = parseInt(inputMetrosHasta.value);
  
    if (cuartos && mFrom && mTo) {
      filtrarPropiedades(cuartos, mFrom, mTo);
    } else {
      alert("Todos los filtros son obligatorios");
    }
  });