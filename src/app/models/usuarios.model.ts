export interface Usuarios {
    id: number;
    nombre: string;
    contrasena: string;
    status: string;
    imagen: string;
    conversaciones: [{
        idConversacion: number;
        idDestinartario: number;
        idGrupo: number;
        tipo: string;
        ultimoMensaje: string;
        horaUltimoMensaje: string;
        nombreDestinatario: string;
        imagenDestinatario: string;
    }]
};

export interface Conversaciones {
    id: number;
    emisor: number
    receptor: number;
    ultimoMensaje: string;
    fechaConversacion: string;
    mensaje: [{
        emisor: number;
        receptor: number;
        mensaje: string;
        hora: string;
    }];
};

export interface ConversacionesG {
    id: number;
    emisor: {
        id: number;
        imagen: string;
        nombre: string;
    }
    ;
    receptor: number;
    ultimoMensaje: string;
    fechaConversacion: string;
    mensaje: [{
        emisor: number;
        receptor: number;
        mensaje: string;
        hora: string;
    }];
};

export interface Grupos {
    id: number;
    nombre: string;
    miembros: [{
        id: number;
        nombre: string;
        imagen: string;
    }];
    mensaje: [{
        emisor: number;
        receptor: number;
        mensaje: string;
        hora: string;
    }]
};