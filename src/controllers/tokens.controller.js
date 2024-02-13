import {Token} from '../models/Token.js'

export const getTokens = async (req, res) =>{
    try {const tokens = await Token.findAll()
        res.json(tokens)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getToken = async (req, res) => {
    try{
        const {id} = req.params
    const token = await Token.findOne({
        where:{
            id
        }
    });

    if(!token) 
        return res.status(404).json({message:'token does not exists'})

    res.json(token)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createToken = async (req, res) =>{
    try {
        const {name, price, description, priceHistory } = req.body

    const newToken = await Token.create({
        name,
        price,
        description,
        priceHistory
    })

    res.json(newToken);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateToken = async (req, res) =>{
    try{

    const { id } = req.params;
    const {name, price, description, priceHistory} = req.body

    const token = await Token.findByPk(id)
    token.name = name
    token.price = price
    token.description = description
    token.priceHistory = priceHistory
    await token.save()

    res.json(token)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteToken = async (req, res) =>{
    try {
        const { id } = req.params
    await Token.destroy({
        where: {
            id,
        },
    });
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

    res.sendStatus(204)
}