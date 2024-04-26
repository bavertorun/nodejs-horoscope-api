const data = require('../data/hororscopes.json');

module.exports.horoscopes = (req,res) =>{
    res.json(data);
}
module.exports.horoscopeDetail = (req,res)=>{

    const {name} = req.params;

    detail = data.find(dt => dt.name.toLowerCase() == name.toLowerCase())

    if(!detail){
        res.status(400).json({error: 'The specified horoscope was not found.'})
    }
    res.json(detail);
   
}