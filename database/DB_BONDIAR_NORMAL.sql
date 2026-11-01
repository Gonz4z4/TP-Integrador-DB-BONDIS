
-- BONDI BOX - NORMALIZACION 3FN
-- Grupo 9 - UNSAM

DROP DATABASE IF EXISTS bondibox_normalizada_v2;

CREATE DATABASE bondibox_normalizada_v2
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE bondibox_normalizada_v2;

-- TABLA LINEAS

CREATE TABLE lineas (
    id_linea INT NOT NULL PRIMARY KEY,
    numero VARCHAR(20) NOT NULL UNIQUE,
    jurisdiccion VARCHAR(50) NOT NULL,
    camara VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- TABLA TERMINALES

CREATE TABLE terminales (
    id_terminal INT NOT NULL PRIMARY KEY,
    descripcion VARCHAR(250) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- TABLA RAMALES

CREATE TABLE ramales (
    id_ramal INT NOT NULL PRIMARY KEY,
    id_linea INT NOT NULL,
    letra VARCHAR(10) NOT NULL,
    modalidad VARCHAR(50) NOT NULL,

    UNIQUE (id_linea, letra),

    FOREIGN KEY (id_linea)
    REFERENCES lineas(id_linea)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- TABLA RECORRIDOS

CREATE TABLE recorridos_sentido (
    id_recorrido INT NOT NULL PRIMARY KEY,
    id_ramal INT NOT NULL,
    sentido VARCHAR(10) NOT NULL,
    id_terminal_origen INT NOT NULL,
    id_terminal_destino INT NOT NULL,

    UNIQUE (id_ramal, sentido),

    FOREIGN KEY (id_ramal)
    REFERENCES ramales(id_ramal),

    FOREIGN KEY (id_terminal_origen)
    REFERENCES terminales(id_terminal),

    FOREIGN KEY (id_terminal_destino)
    REFERENCES terminales(id_terminal),

    CHECK (sentido IN ('IDA', 'VUELTA'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- TABLA OPINIONES
-- Cada opinion pertenece a una linea

CREATE TABLE opiniones (
    id_opinion INT NOT NULL PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    id_linea INT NOT NULL,
    nota INT NOT NULL,
    comentario TEXT NOT NULL,
    fecha DATETIME NOT NULL,

    FOREIGN KEY (id_linea)
    REFERENCES lineas(id_linea)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- CARGA DE LINEAS

INSERT INTO lineas
(id_linea, numero, jurisdiccion, camara) VALUES
(1, '004', 'CABA', 'ACTA'),
(2, '007', 'CABA', 'CETUBA'),
(3, '012', 'CABA', 'CETUBA'),
(4, '025', 'CABA', 'CETUBA'),
(5, '026', 'CABA', 'CETUBA'),
(6, '034', 'CABA', 'CETUBA'),
(7, '039', 'CABA', 'CEAP'),
(8, '042', 'CABA', 'CETUBA'),
(9, '044', 'CABA', 'CETUBA'),
(10, '047', 'CABA', 'CEAP'),
(11, '050', 'CABA', 'CETUBA'),
(12, '064', 'CABA', 'CEAP'),
(13, '065', 'CABA', 'AAETA'),
(14, '068', 'CABA', 'CETUBA'),
(15, '076', 'CABA', 'CETUBA'),
(16, '084', 'CABA', 'CETUBA'),
(17, '099', 'CABA', 'CETUBA'),
(18, '102', 'CABA', 'CEAP'),
(19, '106', 'CABA', 'CETUBA'),
(20, '107', 'CABA', 'CETUBA'),
(21, '108', 'CABA', 'CETUBA'),
(22, '109', 'CABA', 'CETUBA'),
(23, '118', 'CABA', 'CEAP'),
(24, '132', 'CABA', 'CETUBA'),
(25, '151', 'CABA', 'AAETA'),
(26, 'EBUS', 'CABA', 'CETUBA');

-- CARGA DE TERMINALES

INSERT INTO terminales
(id_terminal, descripcion) VALUES
(1, 'LOMAS DEL MIRADOR (PARTIDO DE LA MATANZA - PROVINCIA DE BUENOS AIRES)'),
(2, 'PLAZA ROMA (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(3, 'DARSENA SUR (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(4, 'RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(5, 'PARQUE NICOLAS AVELLANEDA (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(6, 'BARRIO SAMORE (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(7, 'PUENTE PUEYRREDON (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(8, 'PLAZA FALUCHO (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(9, 'PLAZA DE LA CONSTITUCION (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(10, 'PI Y MARGALL y AVENIDA ALMIRANTE BROWN (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(11, 'AVENIDA SENADOR BENITO FERRO y GENERAL LAS HERAS (PARTIDO DE TRES DE FEBERERO - PROVINCIA DE BUENOS AIRES)'),
(12, 'BARRIO RIVADAVIA (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(13, 'PALERMO (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(14, 'ESTACION LINIERS (LINEA SARMIENTO - CIUDAD AUTONOMA DE BUENOS AIRES)'),
(15, 'CIUDAD UNIVERSITARIA (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(16, 'AEROPARQUE JORGE NEWBERY (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(17, 'BARRACAS (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(18, 'CHACARITA (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(19, 'PUENTE ALSINA (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(20, 'ESTACION BELGRANO C (LINEA MITRE - CIUDAD AUTONOMA DE BUENOS AIRES)'),
(21, 'ESTACION FEDERICO LACROZE (LINEA URQUIZA - CIUDAD AUTONOMA DE BUENOS AIRES)'),
(22, 'AUTODROMO OSCAR ANTONIO GALVEZ (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(23, 'LA BOCA (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(24, 'CENTRO DE TRANSBORDO AREA PLAZA CONSTITUCION (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(25, 'ESTACION AVELLANEDA (LINEA ROCA - PARTIDO DE AVELLANEDA - PROVINCIA DE BUENOS AIRES)'),
(26, 'PLAZA DE MISERERE (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(27, 'ESTACION DE TRANSFERENCIA DE TRANSPORTE PUBLICO DE PASAJEROS DE CORTA Y MEDIA DISTANCIA DE VICENTE LOPEZ (PARTIDO DE VICENTE LOPEZ - PROVINCIA DE BUENOS AIRES)'),
(28, 'PUENTE SAAVEDRA (PARTIDO DE VICENTE LOPEZ - PROVINCIA DE BUENOS AIRES)'),
(29, 'NUEVA POMPEYA (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(30, 'SAAVEDRA (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(31, 'VILLA DEL PARQUE (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(32, 'LINIERS (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(33, 'PREDIO DE REGULACION PUERTO DE BUENOS AIRES (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(34, 'ESTACION LINIERS (LINEA DOMINGO FAUSTINO SARMIENTO - CIUDAD AUTONOMA DE BUENOS AIRES)'),
(35, 'ESTACION TERMINAL DE OMNIBUS RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(36, 'CROACIA y BERGAMINI (PARTIDO DE TRES DE FEBRERO   PROVINCIA DE BUENOS AIRES)'),
(37, 'PARQUE PATRICIOS (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(38, 'PREDIO DE REGULACION BARRANCAS DE BELGRANO (CABA)'),
(39, 'CEMENTERIO DE FLORES (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(40, 'AVENIDA SAN JUAN BAUTISTA DE LA SALLE y AVENIDA EVA PERON (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(41, 'AVENIDA EVA PERON y colectora Este AVENIDA GENERAL PAZ (CIUDAD AUTONOMA DE BUENOS AIRES)'),
(42, 'PLAYA DE REGULACIÓN SUBTERRÁNEA CORREO CENTRAL (CIUDAD AUTÓNOMA DE BUENOS AIRES)'),
(43, 'HOSPITAL GARRAHAN (CIUDAD AUTÓNOMA DE BUENOS AIRES)'),
(44, 'TERMINAL DELLEPIANE (CIUDAD AUTÓNOMA DE BUENOS AIRES)'),
(45, 'BARRIO 21-24'),
(46, 'PREDIO DE REGULACION AREA PLAZA CONSTITUCION'),
(47, 'BARRIO 21- 24'),
(48, 'ESTACIÓN DE TRANSFERENCIA DE TRANSPORTE PÚBLICO DE PASAJEROS DE CORTA Y MEDIA DISTANCIA DE VICENTE LÓPEZ (PARTIDO DE VICENTE LÓPEZ – PROVINCIA DE BUENOS AIRES)'),
(49, 'CONCEPCION ARENAL Y ALVAREZ THOMAS'),
(50, 'PLAZA MISERERE'),
(51, 'ESTACION LISANDRO DE LA TORRE'),
(52, 'BARRACAS'),
(53, 'CONSTITUCION'),
(54, 'PREDIO LEZAMA'),
(55, 'TERMINAL DE CRUCEROS'),
(56, 'NUEVA POMPEYA'),
(57, 'CIUDAD UNIVERSITARIA'),
(58, 'PARQUE DE LOS NIÑOS');

-- CARGA DE RAMALES

INSERT INTO ramales
(id_ramal, id_linea, letra, modalidad) VALUES
(1, 1, 'A', 'COMUN'),
(2, 1, 'B', 'COMUN'),
(3, 2, 'A', 'COMUN'),
(4, 2, 'B', 'COMUN'),
(5, 3, 'A', 'COMUN'),
(6, 3, 'B', 'COMUN'),
(7, 3, 'C', 'COMUN'),
(8, 4, 'A', 'COMUN'),
(9, 5, 'A', 'COMUN'),
(10, 6, 'A', 'COMUN'),
(11, 6, 'B', 'COMUN'),
(12, 6, 'C', 'COMUN'),
(13, 7, 'A', 'COMUN'),
(14, 7, 'B', 'COMUN'),
(15, 7, 'C', 'COMUN'),
(16, 7, 'D', 'COMUN'),
(17, 7, 'E', 'COMUN'),
(18, 7, 'F', 'COMUN'),
(19, 8, 'A', 'COMUN'),
(20, 8, 'B', 'COMUN'),
(21, 8, 'C', 'COMUN'),
(22, 9, 'A', 'COMUN'),
(23, 10, 'A', 'COMUN'),
(24, 10, 'B', 'COMUN'),
(25, 11, 'A', 'COMUN'),
(26, 11, 'B', 'COMUN'),
(27, 11, 'C', 'COMUN'),
(28, 12, 'A', 'COMUN'),
(29, 12, 'B', 'COMUN'),
(30, 13, 'A', 'COMUN'),
(31, 13, 'B', 'COMUN'),
(32, 14, 'A', 'COMUN'),
(33, 14, 'B', 'EXPRESO'),
(34, 15, 'A', 'COMUN'),
(35, 15, 'B', 'COMUN'),
(36, 16, 'A', 'COMUN'),
(37, 17, 'A', 'COMUN'),
(38, 18, 'A', 'COMUN'),
(39, 18, 'B', 'COMUN'),
(40, 19, 'A', 'COMUN'),
(41, 20, 'A', 'COMUN'),
(42, 20, 'B', 'COMUN'),
(43, 21, 'A', 'COMUN'),
(44, 22, 'A', 'COMUN'),
(45, 22, 'B', 'EXPRESO'),
(46, 23, 'A', 'COMUN'),
(47, 23, 'B', 'COMUN'),
(48, 23, 'C', 'COMUN'),
(49, 24, 'A', 'COMUN'),
(50, 24, 'B', 'COMUN'),
(51, 24, 'C', 'COMUN'),
(52, 25, 'A', 'COMUN'),
(53, 25, 'B', 'COMUN'),
(54, 25, 'C', 'COMUN'),
(55, 25, 'D', 'COMUN'),
(56, 26, 'A', 'NORMAL');

-- CARGA DE RECORRIDOS IDA Y VUELTA

INSERT INTO recorridos_sentido
(id_recorrido, id_ramal, sentido, id_terminal_origen, id_terminal_destino)
VALUES
(1, 1, 'IDA', 1, 2),
(2, 1, 'VUELTA', 2, 1),
(3, 2, 'IDA', 1, 3),
(4, 2, 'VUELTA', 3, 1),
(5, 3, 'IDA', 4, 5),
(6, 3, 'VUELTA', 5, 4),
(7, 4, 'IDA', 4, 6),
(8, 4, 'VUELTA', 6, 4),
(9, 5, 'IDA', 7, 8),
(10, 5, 'VUELTA', 8, 7),
(11, 6, 'IDA', 9, 8),
(12, 6, 'VUELTA', 8, 9),
(13, 8, 'IDA', 10, 11),
(14, 8, 'VUELTA', 11, 10),
(15, 9, 'IDA', 4, 12),
(16, 9, 'VUELTA', 12, 4),
(17, 10, 'IDA', 13, 14),
(18, 10, 'VUELTA', 14, 13),
(19, 11, 'IDA', 15, 14),
(20, 11, 'VUELTA', 14, 15),
(21, 12, 'IDA', 16, 14),
(22, 12, 'VUELTA', 14, 16),
(23, 13, 'IDA', 17, 18),
(24, 13, 'VUELTA', 18, 17),
(25, 14, 'IDA', 17, 18),
(26, 14, 'VUELTA', 18, 17),
(27, 15, 'IDA', 17, 18),
(28, 15, 'VUELTA', 18, 17),
(29, 16, 'IDA', 9, 18),
(30, 16, 'VUELTA', 18, 9),
(31, 17, 'IDA', 9, 18),
(32, 17, 'VUELTA', 18, 9),
(33, 18, 'IDA', 9, 18),
(34, 18, 'VUELTA', 18, 9),
(35, 22, 'IDA', 19, 20),
(36, 22, 'VUELTA', 20, 19),
(37, 23, 'IDA', 21, 22),
(38, 23, 'VUELTA', 22, 21),
(39, 24, 'IDA', 21, 22),
(40, 24, 'VUELTA', 22, 21),
(41, 28, 'IDA', 23, 20),
(42, 28, 'VUELTA', 20, 23),
(43, 29, 'IDA', 23, 20),
(44, 29, 'VUELTA', 20, 23),
(45, 30, 'IDA', 24, 20),
(46, 30, 'VUELTA', 20, 24),
(47, 31, 'IDA', 25, 20),
(48, 31, 'VUELTA', 20, 25),
(49, 32, 'IDA', 26, 27),
(50, 32, 'VUELTA', 27, 26),
(51, 33, 'IDA', 26, 28),
(52, 33, 'VUELTA', 28, 26),
(53, 34, 'IDA', 29, 30),
(54, 34, 'VUELTA', 30, 29),
(55, 35, 'IDA', 29, 30),
(56, 35, 'VUELTA', 30, 29),
(57, 36, 'IDA', 24, 31),
(58, 36, 'VUELTA', 31, 24),
(59, 37, 'IDA', 32, 33),
(60, 37, 'VUELTA', 33, 32),
(61, 40, 'IDA', 34, 35),
(62, 40, 'VUELTA', 35, 34),
(63, 43, 'IDA', 4, 36),
(64, 43, 'VUELTA', 36, 4),
(65, 44, 'IDA', 14, 33),
(66, 44, 'VUELTA', 33, 14),
(67, 45, 'IDA', 14, 33),
(68, 45, 'VUELTA', 33, 14),
(69, 46, 'IDA', 37, 38),
(70, 46, 'VUELTA', 38, 37),
(71, 47, 'IDA', 26, 38),
(72, 47, 'VUELTA', 38, 26),
(73, 49, 'IDA', 39, 35),
(74, 49, 'VUELTA', 35, 39),
(75, 50, 'IDA', 39, 35),
(76, 50, 'VUELTA', 35, 39),
(77, 51, 'IDA', 26, 35),
(78, 51, 'VUELTA', 35, 26),
(79, 41, 'IDA', 40, 15),
(80, 41, 'VUELTA', 15, 40),
(81, 42, 'IDA', 40, 15),
(82, 42, 'VUELTA', 15, 40),
(83, 25, 'VUELTA', 41, 42),
(84, 25, 'IDA', 42, 41),
(85, 26, 'VUELTA', 41, 43),
(86, 26, 'IDA', 43, 41),
(87, 27, 'IDA', 42, 44),
(88, 27, 'VUELTA', 44, 42),
(89, 48, 'IDA', 45, 26),
(90, 48, 'VUELTA', 26, 45),
(91, 7, 'IDA', 7, 8),
(92, 7, 'VUELTA', 8, 7),
(93, 52, 'IDA', 46, 27),
(94, 52, 'VUELTA', 27, 46),
(95, 53, 'IDA', 47, 48),
(96, 53, 'VUELTA', 48, 47),
(97, 54, 'IDA', 46, 49),
(98, 54, 'VUELTA', 49, 46),
(99, 55, 'IDA', 46, 50),
(100, 55, 'VUELTA', 50, 46),
(101, 38, 'IDA', 51, 52),
(102, 38, 'VUELTA', 52, 51),
(103, 39, 'IDA', 51, 53),
(104, 39, 'VUELTA', 53, 51),
(105, 56, 'IDA', 54, 55),
(106, 56, 'VUELTA', 55, 54),
(107, 20, 'IDA', 56, 57),
(108, 19, 'IDA', 56, 57),
(109, 19, 'VUELTA', 57, 56),
(110, 20, 'VUELTA', 57, 56),
(111, 21, 'IDA', 56, 58),
(112, 21, 'VUELTA', 58, 56);

-- OPINIONES ASOCIADAS A LINEAS

INSERT INTO opiniones
(id_opinion, usuario, id_linea, nota, comentario, fecha)
VALUES
(1, 'Gonza', 16, 10,
'Gran bondi me gusta cuando me deja en el lugar indicado. Siempre que voy en este bondi me siento bien, el limite de caracteres no se siente un problema cuando viajo.',
'2026-10-10 00:00:00'),

(2, 'Bian', 26, 2,
'Es un bondi electrico, de las peores bestias de los porteños. Si la ñ rompe el programa o la base va a estar divertido.',
'2025-01-30 00:00:00'),

(3, 'July', 1, 5,
'Un viaje hasta pilar por favor',
'2021-06-30 00:00:00');

-- COMPROBAR REGISTROS

SELECT 'lineas' AS tabla, COUNT(*) AS cantidad FROM lineas
UNION ALL
SELECT 'ramales', COUNT(*) FROM ramales
UNION ALL
SELECT 'recorridos_sentido', COUNT(*) FROM recorridos_sentido
UNION ALL
SELECT 'terminales', COUNT(*) FROM terminales
UNION ALL
SELECT 'opiniones', COUNT(*) FROM opiniones;

-- MOSTRAR RECORRIDOS

SELECT
    l.numero AS linea,
    r.letra AS ramal,
    rs.sentido,
    r.modalidad,
    origen.descripcion AS desde,
    destino.descripcion AS hasta
FROM recorridos_sentido AS rs
JOIN ramales AS r
    ON rs.id_ramal = r.id_ramal
JOIN lineas AS l
    ON r.id_linea = l.id_linea
JOIN terminales AS origen
    ON rs.id_terminal_origen = origen.id_terminal
JOIN terminales AS destino
    ON rs.id_terminal_destino = destino.id_terminal
ORDER BY l.numero, r.letra, rs.sentido;

-- MOSTRAR OPINIONES CON SU LINEA

SELECT
    o.id_opinion,
    l.numero AS linea,
    o.usuario,
    o.nota,
    o.comentario,
    o.fecha
FROM opiniones AS o
JOIN lineas AS l
    ON o.id_linea = l.id_linea
ORDER BY o.id_opinion;
