const lista = require('../dados/comunicados.json');



export default function handler(req, res){
    return res.status(200).json(lista);
}