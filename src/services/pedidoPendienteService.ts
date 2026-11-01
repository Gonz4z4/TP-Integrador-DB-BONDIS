import { PedidoPendiente } from "../dominio/pedidoPendiente"

export const pendientesRegistrados: PedidoPendiente[] = [
    new PedidoPendiente(
        'Monitor',
        1,
        '6531',
        'Paulo',
        'Longchamps',
        'Monitor 4K',
        'Sin asignar',
        new Date(2026, 9, 16),
    ),
    new PedidoPendiente(
        'Teclado',
        2,
        '2343',
        'Papu',
        'Monte Chingolo',
        'Teclado gamer',
        'Sin asignar',
        new Date(2026, 9, 17),
    )
]
export const PedidoPendienteService = {
    async getPedidosPendientes() {
        return pendientesRegistrados
    },
    async getPedidoPendienteByID(id: number) {
        const pedido = pendientesRegistrados.find((pedido) => pedido.id === id)
        return pedido
    }
}