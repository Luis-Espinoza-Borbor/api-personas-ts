export interface Saludo {
    nombreRecibido: string;
    mensaje: string;
}

export async function crearSaludo(nombre: string): Promise<Saludo> {
    const saludo: Saludo = {
        nombreRecibido: nombre,
        mensaje: `Hola ${nombre}` 
    }

    return saludo;
}