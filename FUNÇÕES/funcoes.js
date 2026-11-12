//trazer a lista - K.O

//saber qual é o último id cadastrado - K.O

//somar +1 para ser o proximo id - K.O

//return - K.O

import { listarTodos } from "../MANIPULADOR/manipulador_arquivo.js";

export async function gerarNovoId(){
    const registrosAlunos = await listarTodos();

//pegar todos os ids existentes
const ids = registrosAlunos.map((aluno) => aluno.id);

const novoID = Math.max(...ids) + 1;
return novoID;
}