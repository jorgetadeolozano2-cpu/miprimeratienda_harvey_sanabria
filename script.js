const productos = [
  {
    id: 1,
    nombre: "Marvel Gold: Los Vengadores",
    descripcion: "Marvel Gold: Los Vengadores, una aventura épica",
    precio: 25000,
    imagen: "https://www.akiracomics.com/imagenes/poridentidad?identidad=87c3a664-1800-4e42-bab4-618aee6e339c&ancho=850&alto="
  },
  {
    id: 2,
    nombre: "Vengadores: Desunidos",
    descripcion: "Vengadores: Desunidos, una historia llena de acción, giros inesperados y momentos inolvidables que no puede faltar en tu colección.",
    precio: 18000,
    imagen: "https://www.akiracomics.com/imagenes/poridentidad?identidad=57a0dd13-bfde-40f9-949d-932d2e3a0a25&ancho=850&alto="
  },
  {
    id: 3,
    nombre: "Civil War",
    descripcion: "¡Héroes contra héroes! 💥 Civil War: el conflicto que dividió al universo Marvel.",
    precio: 30000,
    imagen: "https://www.akiracomics.com/imagenes/poridentidad?identidad=f0a1bc56-82f7-4fba-bb2e-e35f0fdfe022&ancho=850&alto="
  },
  {
    id: 4,
    nombre: "La Madonna Celestial",
    descripcion: "¡Un misterio cósmico que cambiará el destino de los Vengadores! 🌌 La Madonna Celestial, una joya para tu colección Marvel.",
    precio: 18000,
    imagen: "https://www.akiracomics.com/imagenes/poridentidad?identidad=f5043e52-492e-4ef9-b280-9dce30252640&ancho=850&alto="
  },
  {
    id: 5,
    nombre: "The Ultimates",
    descripcion: "¡Los héroes definitivos de Marvel en acción! 💥 The Ultimates, poder y aventura al límite.",
    precio: 22000,
    imagen: "https://www.akiracomics.com/imagenes/poridentidad?identidad=5e83ac18-c489-40d9-bd34-ad4d2babf942&ancho=850&alto="
  }
];


/* ==============================
   CARRITO
================================ */

const carrito = [];

const contenedorProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total");


/* ==============================
   MOSTRAR PRODUCTOS
================================ */

function mostrarProductos() {

  contenedorProductos.innerHTML = "";

  productos.forEach(prod => {

    const div = document.createElement("div");

    div.className = "producto";

    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">

      <h3>${prod.nombre}</h3>

      <p class="descripcion">
        ${prod.descripcion}
      </p>

      <p class="precio">
        ${prod.precio.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0
        })}
      </p>

      <button onclick="agregarAlCarrito(${prod.id})">
        Agregar al carrito
      </button>
    `;

    contenedorProductos.appendChild(div);

  });

}


/* ==============================
   AGREGAR AL CARRITO
================================ */

function agregarAlCarrito(id) {

  const productoExistente =
    carrito.find(p => p.id === id);

  if (productoExistente) {

    productoExistente.cantidad++;

  } else {

    const producto =
      productos.find(p => p.id === id);

    carrito.push({
      ...producto,
      cantidad: 1
    });

  }

  actualizarCarrito();

}


/* ==============================
   ACTUALIZAR CARRITO
================================ */

function actualizarCarrito() {

  listaCarrito.innerHTML = "";

  let total = 0;
  let totalItems = 0;

  carrito.forEach(item => {

    const li =
      document.createElement("li");

    const subtotal =
      item.precio * item.cantidad;

    li.textContent =
      `${item.nombre} x${item.cantidad} — ` +
      subtotal.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
      });

    listaCarrito.appendChild(li);

    total += subtotal;
    totalItems += item.cantidad;

  });

  totalCarrito.textContent =
    total.toLocaleString("es-CO");

  actualizarTituloCarrito(totalItems);

}


/* ==============================
   CONTADOR DEL CARRITO
================================ */

function actualizarTituloCarrito(cantidad) {

  const titulo =
    document.querySelector(".carrito h2");

  titulo.textContent =
    `🧾 Carrito de Compras (${cantidad})`;

}


/* ==============================
   VACIAR CARRITO
================================ */

function vaciarCarrito() {

  if (carrito.length === 0) {

    alert("🛒 El carrito ya está vacío.");

    return;

  }

  if (
    confirm(
      "¿Estás seguro de que quieres vaciar el carrito?"
    )
  ) {

    carrito.length = 0;

    actualizarCarrito();

  }

}


/* ==============================
   FINALIZAR COMPRA
================================ */

function finalizarCompra() {

  if (carrito.length === 0) {

    alert(
      "🛒 Tu carrito está vacío. Agrega productos antes de finalizar la compra."
    );

    return;

  }

  alert(
    "🎉 ¡Pedido simulado confirmado!\n\n" +
    "En un eCommerce real, ahora entrarían en acción " +
    "el backend, la pasarela de pago y la logística."
  );

  carrito.length = 0;

  actualizarCarrito();

}


/* ==============================
   INICIAR TIENDA
================================ */

mostrarProductos();
