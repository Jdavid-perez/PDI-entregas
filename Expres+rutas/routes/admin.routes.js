import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        mensaje: "mensaje Esta es la ruta get de mi entidad admin"
    });
    });

router.get('/:id', (req, res) => {
    res.json({ 
    mensaje: `Esta es la ruta GET de mi entidad admin con el ID ${req.params.id}` 
    });
});    

router.post("/", (req, res) =>{
    res.json({ 
    mensaje: `mensaje Esta es la ruta post de mi entidad admin`
    });
});

router.delete('/:id', (req, res) => {
  res.json({ 
    mensaje: `Esta es la ruta delete de mi entidad admin con el ID  ${req.params.id}` 
    });
});   

router.put('/:id', (req, res) =>{
    res.json({ 
      mensaje: `mensaje Esta es la ruta put de mi entidad admin con el ID  ${req.params.id}`
    });
});

const servidor = express();

export default router;