import { ObjectId } from "mongodb";

export class Tipo_participante {
  constructor(
    public posicion: string,
    public id: string,
    public _id?: ObjectId
  ){}
  }