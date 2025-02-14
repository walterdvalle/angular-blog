export class Noticia {

  id: string;
  imagem : string;
  titulo: string;
  manchete: string;

  constructor(id:string, imagem: string, titulo: string, manchete: string) {
    this.id = id;
    this.imagem = imagem;
    this.titulo = titulo;
    this.manchete = manchete;
  }

}
