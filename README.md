# hotel
El Hotel ofrece servicios de alojamiento, este dispone de diferentes tipos de habitaciones
los clientes pueden realizar sus reservas de manera fácil y rápida. Las reservas incluyen la fecha de entrada, la fecha de salida. Cada habitación cuenta con un archivo de fotos que permite a los huéspedes visualizar los espacios antes de realizar una reserva.
los usuarios del sistema con diferentes roles tienen un rol asignado, con permisos específicos que les permiten acceder solo a las funciones necesarias para sus tareas diarias.
Cada cliente puede realizar pagos por su estancia, que están vinculados a sus reservas.
el control de inventario, que incluye todos los artículos y recursos utilizados en el hotel, desde muebles hasta productos de limpieza, asignados a diferentes habitaciones o áreas del hotel. Esto nos permite mantener un seguimiento constante del uso y estado de cada artículo.

Entidades y Atributos

    tipo_habitaciones(id_tipo_habitacion,tipo,precio)

    habitaciones(id_habitacion, numero_habitacion, id_tipo_habitacion, en_mantenimiento,
     fecha_ultimo_mantenimiento, detalle_mantenimiento, id_empleado_mantenimiento)

    fotos_habitaciones(id_foto, id_habitacion, url_foto)

    reservas(id_reserva, id_habitacion, id_cliente, fecha_reserva, fecha_checkin, fecha_checkout)

    usuarios(id_usuario,  nombre_usuario, contraseña, id_rol)

    roles(id_rol, nombre_rol)

    clientes(id_cliente, nombre, apellido, direccion, telefono, correo)

    pagos(id_pago, id_cliente, id_reserva, monto,  fecha_pago, metodo_pago, fecha_factura,
     numero_factura, detalle_factura, total_factura )

    inventario(id_inventario, nombre_item, cantidad, ubicacion, id_habitacion)

    empleados(id_empleado, nombre, apellido, cargo,  fecha_contratacion)