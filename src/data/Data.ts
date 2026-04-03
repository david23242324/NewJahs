import Rv1 from "../assets/Rv1.1.png"
import Rp2 from "../assets/Rv1.2.png";
import Rp3 from "../assets/Rv1.3.png";
import Rp4 from "../assets/Rv1.4.png";
import Rp5 from "../assets/Rv1.5.png";
import Rp6 from "../assets/Rv1.6.png";

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
}

export const productos: Producto[] = [
  {
    id: 1,
    nombre: "CORE HOODIE",
    precio: 125,
    imagen: Rv1,
  },
  {
    id: 2,
    nombre: "BLACK TEE",
    precio: 80,
    imagen: Rp2,
  },
  {
    id: 3,
    nombre: "SPORT TEE",
    precio: 95,
    imagen: Rp3,
  },
  {
    id: 4,
    nombre: "URBAN JACKET",
    precio: 150,
    imagen: Rp4,
  },
  {
    id: 5,
    nombre: "MINIMAL SHIRT",
    precio: 70,
    imagen: Rp5,
  },
  {
    id: 6,
    nombre: "OVERSIZE HOODIE",
    precio: 135,
    imagen: Rp6,
  },
];