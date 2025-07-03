import express from "express"

const servidor = express();

servidor.get("/productos", (req, res) => {
    res.json({ mensaje: "mensaje Esta es la ruta [get] de mi entidad [producto]"
    });
    });

servidor.post("/productos", (req, res) =>{
    res.json({ mensaje: "mensaje Esta es la ruta [post] de mi entidad [producto]"
    });
});

servidor.delete("/productos", (req, res) =>{
    res.json({ mensaje: "mensaje Esta es la ruta [delete] de mi entidad [producto]"
    });
});

servidor.put("/productos", (req, res) =>{
    res.json({ mensaje: "mensaje Esta es la ruta [put] de mi entidad [producto]"
    });
});

servidor.listen(3000, () =>{
console.log("El servidor esta en el puerto 3000");
});