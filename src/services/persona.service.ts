import { Persona } from '../models/persona';

const personas: Persona[] = [
    {
        id: 1,
        nombre: "Luis",
        apellido: "Espinoza",
        edad: 21
    }
];

export async function obtenerTodos(): Promise<Persona[]> {
    return personas;
}

export async function obtenerPorId(id: number): Promise<Persona | undefined> {
    return personas.find(p => p.id === id);
}

export async function CrearPersona(persona: Persona): Promise<Persona> {
    personas.push(persona);
    return persona;
}

export async function actualizar(id: number, persona: Partial<Persona>): Promise<Persona> {
    const personaExistente = await obtenerPorId(id);

    const personaActualizada = { ...personaExistente, ...persona } as Persona;
    
    const index = personas.indexOf(personaExistente as Persona);
    personas[index] = personaActualizada;

    return personaActualizada;
}

export async function eliminar(id: number): Promise<void> {
    const personaExistente = await obtenerPorId(id);
    const index = personas.indexOf(personaExistente as Persona);
    personas.splice(index, 1);
}