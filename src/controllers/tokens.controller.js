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

export const getLastTokenPrice = async (req, res) => {
    try {
        const { id } = req.params;
        const token = await Token.findOne({
            where: { id },
            attributes: ['price'],
            order: [['createdAt', 'DESC']],
            limit: 1
        });

        if (!token) 
            return res.status(404).json({ message: 'Token not found' });

        res.json({ price: token.price });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getTokenPriceHistory = async (req, res) => {
    try {
        const { id } = req.params;
        const token = await Token.findByPk(id);
        if (!token) 
            return res.status(404).json({ message: 'Token not found' });

        res.json({ priceHistory: token.priceHistory });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createToken = async (req, res) => {
    try {
        const { name, price, description, priceHistory } = req.body;

        const newToken = await Token.create({
            name,
            price,
            description,
            priceHistory: priceHistory || [],
        });

        res.json(newToken);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


export const updateToken = async (req, res) => {
    try {
        const { id } = req.params;
        const { price, priceHistory } = req.body;

        console.log('Request body:', req.body);

        const token = await Token.findByPk(id);
        if (!token) 
            return res.status(404).json({ message: 'Token not found' });

        console.log('Existing priceHistory:', token.priceHistory);

        // Actualiza el historial de precios
        const updatedPriceHistory = [...(token.priceHistory || []), token.price]; // Agrega el precio actual al historial
        console.log('Updated priceHistory:', updatedPriceHistory);

        await token.update({ price, priceHistory: updatedPriceHistory });

        res.json(token);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};




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