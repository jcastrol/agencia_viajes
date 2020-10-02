const Viajes = require('../models/Viajes');
exports.mostrarViajes = async (req,res)=>{
    const viajes = await Viajes.findAll();
    res.render( 'viajes',{
        pagina: 'Proximos Viajes',
        viajes
    });
  
}

exports.mostrarViaje=async (req,res)=>{
    const viaje= await Viajes.findByPk(req.params.id)
    res.render( 'viaje',{
        viaje
    }); 
}