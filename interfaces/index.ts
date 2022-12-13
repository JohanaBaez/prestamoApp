export interface Prestamo {
    id: string
    foto: string
    nombre: string
    fecha: string
    vencimiento: string
    monto: number
    taza_de_interes: number
    intereses: number
    total: number
    tipo_cambio: number
    cantidad_de_Cuotas: number
    saldo_estatus: string
}
interface Metadata {
    nextPage: number
    currentPage: number
    perPage: number
}
export interface ListPrestamoResponse {
    data: [Prestamo] | []
    metadata: Metadata
}
