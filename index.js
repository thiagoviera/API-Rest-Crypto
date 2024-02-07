import express from 'express';
import fs, { read } from "fs";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const readData = () => {
    try {
        const data = fs.readFileSync("./db.json");
    return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
};

const writeData = (data) => {
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data))
    } catch (error) {
        console.log(error);
    }
};

app.get("/", (req, res) =>{
    res.send("Bienvenido al api challenge de Flixxo");
});

app.get("/cryptos", (req, res) => {
    const data = readData();
    res.json(data.cryptos);
})

app.get("/cryptos/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const crypto = data.cryptos.find((crypto) => crypto.id === id);
    res.json(crypto)
})

app.post("/cryptos", (req, res) => {
    const data = readData();
    const body = req.body;
    const newCrypto = {
        id: data.cryptos.length + 1,
        ...body,
    };
    data.cryptos.push(newCrypto);
    writeData(data);
    res.json(newCrypto)
})

app.put("/cryptos/:id", (req,res) =>{
    const data = readData();
    const body = req.body;
    const id = parseInt(req.params.id);
    const cryptoIndex = data.cryptos.findIndex((crypto) => crypto.id === id);
    data.cryptos[cryptoIndex] = {
        ...data.cryptos[cryptoIndex],
        ...body,
    };
    writeData(data);
    res.json({message: "Se actualizo correctamente la crypto"})
});

app.delete("/cryptos/:id", (req, res) =>{
    const data = readData();
    const id = parseInt(req.params.id);
    const cryptoIndex = data.cryptos.findIndex((crypto) => crypto.id === id);
    data.cryptos.splice(cryptoIndex, 1);
    writeData(data);
    res.json({message: "Se elimino correctamente la crypto"})
});

app.listen(3000, () => {
    console.log('El servidor se esta ejecutando en el puerto 3000');
});