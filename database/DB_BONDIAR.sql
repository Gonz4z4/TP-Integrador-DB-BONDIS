USE [BONDIAR]
GO
/****** Object:  Table [dbo].[opiniones]    Script Date: 09/10/2026 19:26:54 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[opiniones](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Usuario] [nvarchar](50) NOT NULL,
	[ID_bondi] [int] NOT NULL,
	[Nota] [int] NOT NULL,
	[Opinion] [text] NOT NULL,
	[Fecha] [datetime] NOT NULL,
 CONSTRAINT [PK_comentarios] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[recorridos_colectivos]    Script Date: 09/10/2026 19:26:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[recorridos_colectivos](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[linea] [varchar](20) NOT NULL,
	[recorrido] [char](1) NOT NULL,
	[sentido] [varchar](20) NOT NULL,
	[modalidad] [varchar](50) NOT NULL,
	[jurisdiccion] [varchar](50) NOT NULL,
	[camara] [varchar](50) NOT NULL,
	[desde] [text] NOT NULL,
	[hasta] [text] NOT NULL,
 CONSTRAINT [PK__recorrid__3214EC2746ACCB0B] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[opiniones] ON 
GO
INSERT [dbo].[opiniones] ([ID], [Usuario], [ID_bondi], [Nota], [Opinion], [Fecha]) VALUES (1, N'Gonza', 57, 10, N'Gran bondi me gusta cuando me deja en el lugar indicado.  Siempre que voy en este bondi me siento bien, el limite de caracteres no se siente un problema cuando viajo.', CAST(N'2026-10-10T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[opiniones] ([ID], [Usuario], [ID_bondi], [Nota], [Opinion], [Fecha]) VALUES (2, N'Bian', 106, 2, N'Es un bondi electrico, de las peores bestias de los porteños. Si la ñ rompe el programa o la base va a estar divertido.', CAST(N'2025-01-30T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[opiniones] ([ID], [Usuario], [ID_bondi], [Nota], [Opinion], [Fecha]) VALUES (3, N'July', 1, 5, N'Un viaje hasta pilar por favor', CAST(N'2021-06-30T00:00:00.000' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[opiniones] OFF
GO
SET IDENTITY_INSERT [dbo].[recorridos_colectivos] ON 
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (1, N'004', N'A', N'IDA', N'COMUN', N'CABA', N'ACTA', N'LOMAS DEL MIRADOR (PARTIDO DE LA MATANZA - PROVINCIA DE BUENOS AIRES)', N'PLAZA ROMA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (2, N'004', N'A', N'VUELTA', N'COMUN', N'CABA', N'ACTA', N'PLAZA ROMA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'LOMAS DEL MIRADOR (PARTIDO DE LA MATANZA - PROVINCIA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (3, N'004', N'B', N'IDA', N'COMUN', N'CABA', N'ACTA', N'LOMAS DEL MIRADOR (PARTIDO DE LA MATANZA - PROVINCIA DE BUENOS AIRES)', N'DARSENA SUR (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (4, N'004', N'B', N'VUELTA', N'COMUN', N'CABA', N'ACTA', N'DARSENA SUR (CIUDAD AUTONOMA DE BUENOS AIRES)', N'LOMAS DEL MIRADOR (PARTIDO DE LA MATANZA - PROVINCIA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (5, N'007', N'A', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)', N'PARQUE NICOLAS AVELLANEDA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (6, N'007', N'A', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'PARQUE NICOLAS AVELLANEDA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (7, N'007', N'B', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)', N'BARRIO SAMORE (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (8, N'007', N'B', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'BARRIO SAMORE (CIUDAD AUTONOMA DE BUENOS AIRES)', N'RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (9, N'012', N'A', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'PUENTE PUEYRREDON (CIUDAD AUTONOMA DE BUENOS AIRES)', N'PLAZA FALUCHO (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (10, N'012', N'A', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'PLAZA FALUCHO (CIUDAD AUTONOMA DE BUENOS AIRES)', N'PUENTE PUEYRREDON (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (11, N'012', N'B', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'PLAZA DE LA CONSTITUCION (CIUDAD AUTONOMA DE BUENOS AIRES)', N'PLAZA FALUCHO (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (12, N'012', N'B', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'PLAZA FALUCHO (CIUDAD AUTONOMA DE BUENOS AIRES)', N'PLAZA DE LA CONSTITUCION (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (13, N'025', N'A', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'PI Y MARGALL y AVENIDA ALMIRANTE BROWN (CIUDAD AUTONOMA DE BUENOS AIRES)', N'AVENIDA SENADOR BENITO FERRO y GENERAL LAS HERAS (PARTIDO DE TRES DE FEBERERO - PROVINCIA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (14, N'025', N'A', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'AVENIDA SENADOR BENITO FERRO y GENERAL LAS HERAS (PARTIDO DE TRES DE FEBERERO - PROVINCIA DE BUENOS AIRES)', N'PI Y MARGALL y AVENIDA ALMIRANTE BROWN (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (15, N'026', N'A', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)', N'BARRIO RIVADAVIA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (16, N'026', N'A', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'BARRIO RIVADAVIA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (17, N'034', N'A', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'PALERMO (CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION LINIERS (LINEA SARMIENTO - CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (18, N'034', N'A', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'ESTACION LINIERS (LINEA SARMIENTO - CIUDAD AUTONOMA DE BUENOS AIRES)', N'PALERMO (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (19, N'034', N'B', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'CIUDAD UNIVERSITARIA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION LINIERS (LINEA SARMIENTO - CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (20, N'034', N'B', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'ESTACION LINIERS (LINEA SARMIENTO - CIUDAD AUTONOMA DE BUENOS AIRES)', N'CIUDAD UNIVERSITARIA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (21, N'034', N'C', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'AEROPARQUE JORGE NEWBERY (CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION LINIERS (LINEA SARMIENTO - CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (22, N'034', N'C', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'ESTACION LINIERS (LINEA SARMIENTO - CIUDAD AUTONOMA DE BUENOS AIRES)', N'AEROPARQUE JORGE NEWBERY (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (23, N'039', N'A', N'IDA', N'COMUN', N'CABA', N'CEAP', N'BARRACAS (CIUDAD AUTONOMA DE BUENOS AIRES)', N'CHACARITA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (24, N'039', N'A', N'VUELTA', N'COMUN', N'CABA', N'CEAP', N'CHACARITA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'BARRACAS (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (25, N'039', N'B', N'IDA', N'COMUN', N'CABA', N'CEAP', N'BARRACAS (CIUDAD AUTONOMA DE BUENOS AIRES)', N'CHACARITA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (26, N'039', N'B', N'VUELTA', N'COMUN', N'CABA', N'CEAP', N'CHACARITA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'BARRACAS (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (27, N'039', N'C', N'IDA', N'COMUN', N'CABA', N'CEAP', N'BARRACAS (CIUDAD AUTONOMA DE BUENOS AIRES)', N'CHACARITA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (28, N'039', N'C', N'VUELTA', N'COMUN', N'CABA', N'CEAP', N'CHACARITA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'BARRACAS (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (29, N'039', N'D', N'IDA', N'COMUN', N'CABA', N'CEAP', N'PLAZA DE LA CONSTITUCION (CIUDAD AUTONOMA DE BUENOS AIRES)', N'CHACARITA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (30, N'039', N'D', N'VUELTA', N'COMUN', N'CABA', N'CEAP', N'CHACARITA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'PLAZA DE LA CONSTITUCION (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (31, N'039', N'E', N'IDA', N'COMUN', N'CABA', N'CEAP', N'PLAZA DE LA CONSTITUCION (CIUDAD AUTONOMA DE BUENOS AIRES)', N'CHACARITA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (32, N'039', N'E', N'VUELTA', N'COMUN', N'CABA', N'CEAP', N'CHACARITA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'PLAZA DE LA CONSTITUCION (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (33, N'039', N'F', N'IDA', N'COMUN', N'CABA', N'CEAP', N'PLAZA DE LA CONSTITUCION (CIUDAD AUTONOMA DE BUENOS AIRES)', N'CHACARITA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (34, N'039', N'F', N'VUELTA', N'COMUN', N'CABA', N'CEAP', N'CHACARITA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'PLAZA DE LA CONSTITUCION (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (35, N'044', N'A', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'PUENTE ALSINA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION BELGRANO C (LINEA MITRE - CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (36, N'044', N'A', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'ESTACION BELGRANO C (LINEA MITRE - CIUDAD AUTONOMA DE BUENOS AIRES)', N'PUENTE ALSINA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (37, N'047', N'A', N'IDA', N'COMUN', N'CABA', N'CEAP', N'ESTACION FEDERICO LACROZE (LINEA URQUIZA - CIUDAD AUTONOMA DE BUENOS AIRES)', N'AUTODROMO OSCAR ANTONIO GALVEZ (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (38, N'047', N'A', N'VUELTA', N'COMUN', N'CABA', N'CEAP', N'AUTODROMO OSCAR ANTONIO GALVEZ (CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION FEDERICO LACROZE (LINEA URQUIZA - CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (39, N'047', N'B', N'IDA', N'COMUN', N'CABA', N'CEAP', N'ESTACION FEDERICO LACROZE (LINEA URQUIZA - CIUDAD AUTONOMA DE BUENOS AIRES)', N'AUTODROMO OSCAR ANTONIO GALVEZ (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (40, N'047', N'B', N'VUELTA', N'COMUN', N'CABA', N'CEAP', N'AUTODROMO OSCAR ANTONIO GALVEZ (CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION FEDERICO LACROZE (LINEA URQUIZA - CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (41, N'064', N'A', N'IDA', N'COMUN', N'CABA', N'CEAP', N'LA BOCA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION BELGRANO C (LINEA MITRE - CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (42, N'064', N'A', N'VUELTA', N'COMUN', N'CABA', N'CEAP', N'ESTACION BELGRANO C (LINEA MITRE - CIUDAD AUTONOMA DE BUENOS AIRES)', N'LA BOCA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (43, N'064', N'B', N'IDA', N'COMUN', N'CABA', N'CEAP', N'LA BOCA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION BELGRANO C (LINEA MITRE - CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (44, N'064', N'B', N'VUELTA', N'COMUN', N'CABA', N'CEAP', N'ESTACION BELGRANO C (LINEA MITRE - CIUDAD AUTONOMA DE BUENOS AIRES)', N'LA BOCA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (45, N'065', N'A', N'IDA', N'COMUN', N'CABA', N'AAETA', N'CENTRO DE TRANSBORDO AREA PLAZA CONSTITUCION (CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION BELGRANO C (LINEA MITRE - CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (46, N'065', N'A', N'VUELTA', N'COMUN', N'CABA', N'AAETA', N'ESTACION BELGRANO C (LINEA MITRE - CIUDAD AUTONOMA DE BUENOS AIRES)', N'CENTRO DE TRANSBORDO AREA PLAZA CONSTITUCION (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (47, N'065', N'B', N'IDA', N'COMUN', N'CABA', N'AAETA', N'ESTACION AVELLANEDA (LINEA ROCA - PARTIDO DE AVELLANEDA - PROVINCIA DE BUENOS AIRES)', N'ESTACION BELGRANO C (LINEA MITRE - CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (48, N'065', N'B', N'VUELTA', N'COMUN', N'CABA', N'AAETA', N'ESTACION BELGRANO C (LINEA MITRE - CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION AVELLANEDA (LINEA ROCA - PARTIDO DE AVELLANEDA - PROVINCIA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (49, N'068', N'A', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'PLAZA DE MISERERE (CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION DE TRANSFERENCIA DE TRANSPORTE PUBLICO DE PASAJEROS DE CORTA Y MEDIA DISTANCIA DE VICENTE LOPEZ (PARTIDO DE VICENTE LOPEZ - PROVINCIA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (50, N'068', N'A', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'ESTACION DE TRANSFERENCIA DE TRANSPORTE PUBLICO DE PASAJEROS DE CORTA Y MEDIA DISTANCIA DE VICENTE LOPEZ (PARTIDO DE VICENTE LOPEZ - PROVINCIA DE BUENOS AIRES)', N'PLAZA DE MISERERE (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (51, N'068', N'B', N'IDA', N'EXPRESO', N'CABA', N'CETUBA', N'PLAZA DE MISERERE (CIUDAD AUTONOMA DE BUENOS AIRES)', N'PUENTE SAAVEDRA (PARTIDO DE VICENTE LOPEZ - PROVINCIA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (52, N'068', N'B', N'VUELTA', N'EXPRESO', N'CABA', N'CETUBA', N'PUENTE SAAVEDRA (PARTIDO DE VICENTE LOPEZ - PROVINCIA DE BUENOS AIRES)', N'PLAZA DE MISERERE (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (53, N'076', N'A', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'NUEVA POMPEYA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'SAAVEDRA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (54, N'076', N'A', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'SAAVEDRA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'NUEVA POMPEYA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (55, N'076', N'B', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'NUEVA POMPEYA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'SAAVEDRA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (56, N'076', N'B', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'SAAVEDRA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'NUEVA POMPEYA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (57, N'084', N'A', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'CENTRO DE TRANSBORDO AREA PLAZA CONSTITUCION (CIUDAD AUTONOMA DE BUENOS AIRES)', N'VILLA DEL PARQUE (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (58, N'084', N'A', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'VILLA DEL PARQUE (CIUDAD AUTONOMA DE BUENOS AIRES)', N'CENTRO DE TRANSBORDO AREA PLAZA CONSTITUCION (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (59, N'099', N'A', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'LINIERS (CIUDAD AUTONOMA DE BUENOS AIRES)', N'PREDIO DE REGULACION PUERTO DE BUENOS AIRES (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (60, N'099', N'A', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'PREDIO DE REGULACION PUERTO DE BUENOS AIRES (CIUDAD AUTONOMA DE BUENOS AIRES)', N'LINIERS (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (61, N'106', N'A', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'ESTACION LINIERS (LINEA DOMINGO FAUSTINO SARMIENTO - CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION TERMINAL DE OMNIBUS RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (62, N'106', N'A', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'ESTACION TERMINAL DE OMNIBUS RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION LINIERS (LINEA DOMINGO FAUSTINO SARMIENTO - CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (63, N'108', N'A', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)', N'CROACIA y BERGAMINI (PARTIDO DE TRES DE FEBRERO   PROVINCIA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (64, N'108', N'A', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'CROACIA y BERGAMINI (PARTIDO DE TRES DE FEBRERO   PROVINCIA DE BUENOS AIRES)', N'RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (65, N'109', N'A', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'ESTACION LINIERS (LINEA SARMIENTO - CIUDAD AUTONOMA DE BUENOS AIRES)', N'PREDIO DE REGULACION PUERTO DE BUENOS AIRES (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (66, N'109', N'A', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'PREDIO DE REGULACION PUERTO DE BUENOS AIRES (CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION LINIERS (LINEA SARMIENTO - CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (67, N'109', N'B', N'IDA', N'EXPRESO', N'CABA', N'CETUBA', N'ESTACION LINIERS (LINEA SARMIENTO - CIUDAD AUTONOMA DE BUENOS AIRES)', N'PREDIO DE REGULACION PUERTO DE BUENOS AIRES (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (68, N'109', N'B', N'VUELTA', N'EXPRESO', N'CABA', N'CETUBA', N'PREDIO DE REGULACION PUERTO DE BUENOS AIRES (CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION LINIERS (LINEA SARMIENTO - CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (69, N'118', N'A', N'IDA', N'COMUN', N'CABA', N'CEAP', N'PARQUE PATRICIOS (CIUDAD AUTONOMA DE BUENOS AIRES)', N'PREDIO DE REGULACION BARRANCAS DE BELGRANO (CABA)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (70, N'118', N'A', N'VUELTA', N'COMUN', N'CABA', N'CEAP', N'PREDIO DE REGULACION BARRANCAS DE BELGRANO (CABA)', N'PARQUE PATRICIOS (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (71, N'118', N'B', N'IDA', N'COMUN', N'CABA', N'CEAP', N'PLAZA DE MISERERE (CIUDAD AUTONOMA DE BUENOS AIRES)', N'PREDIO DE REGULACION BARRANCAS DE BELGRANO (CABA)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (72, N'118', N'B', N'VUELTA', N'COMUN', N'CABA', N'CEAP', N'PREDIO DE REGULACION BARRANCAS DE BELGRANO (CABA)', N'PLAZA DE MISERERE (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (73, N'132', N'A', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'CEMENTERIO DE FLORES (CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION TERMINAL DE OMNIBUS RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (74, N'132', N'A', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'ESTACION TERMINAL DE OMNIBUS RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)', N'CEMENTERIO DE FLORES (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (75, N'132', N'B', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'CEMENTERIO DE FLORES (CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION TERMINAL DE OMNIBUS RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (76, N'132', N'B', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'ESTACION TERMINAL DE OMNIBUS RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)', N'CEMENTERIO DE FLORES (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (77, N'132', N'C', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'PLAZA DE MISERERE (CIUDAD AUTONOMA DE BUENOS AIRES)', N'ESTACION TERMINAL DE OMNIBUS RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (78, N'132', N'C', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'ESTACION TERMINAL DE OMNIBUS RETIRO (CIUDAD AUTONOMA DE BUENOS AIRES)', N'PLAZA DE MISERERE (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (79, N'107', N'A', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'AVENIDA SAN JUAN BAUTISTA DE LA SALLE y AVENIDA EVA PERON (CIUDAD AUTONOMA DE BUENOS AIRES)', N'CIUDAD UNIVERSITARIA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (80, N'107', N'A', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'CIUDAD UNIVERSITARIA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'AVENIDA SAN JUAN BAUTISTA DE LA SALLE y AVENIDA EVA PERON (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (81, N'107', N'B', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'AVENIDA SAN JUAN BAUTISTA DE LA SALLE y AVENIDA EVA PERON (CIUDAD AUTONOMA DE BUENOS AIRES)', N'CIUDAD UNIVERSITARIA (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (82, N'107', N'B', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'CIUDAD UNIVERSITARIA (CIUDAD AUTONOMA DE BUENOS AIRES)', N'AVENIDA SAN JUAN BAUTISTA DE LA SALLE y AVENIDA EVA PERON (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (83, N'050', N'A', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'AVENIDA EVA PERON y colectora Este AVENIDA GENERAL PAZ (CIUDAD AUTONOMA DE BUENOS AIRES)', N'PLAYA DE REGULACIÓN SUBTERRÁNEA CORREO CENTRAL (CIUDAD AUTÓNOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (84, N'050', N'A', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'PLAYA DE REGULACIÓN SUBTERRÁNEA CORREO CENTRAL (CIUDAD AUTÓNOMA DE BUENOS AIRES)', N'AVENIDA EVA PERON y colectora Este AVENIDA GENERAL PAZ (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (85, N'050', N'B', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'AVENIDA EVA PERON y colectora Este AVENIDA GENERAL PAZ (CIUDAD AUTONOMA DE BUENOS AIRES)', N'HOSPITAL GARRAHAN (CIUDAD AUTÓNOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (86, N'050', N'B', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'HOSPITAL GARRAHAN (CIUDAD AUTÓNOMA DE BUENOS AIRES)', N'AVENIDA EVA PERON y colectora Este AVENIDA GENERAL PAZ (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (87, N'050', N'C', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'PLAYA DE REGULACIÓN SUBTERRÁNEA CORREO CENTRAL (CIUDAD AUTÓNOMA DE BUENOS AIRES)', N'TERMINAL DELLEPIANE (CIUDAD AUTÓNOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (88, N'050', N'C', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'TERMINAL DELLEPIANE (CIUDAD AUTÓNOMA DE BUENOS AIRES)', N'PLAYA DE REGULACIÓN SUBTERRÁNEA CORREO CENTRAL (CIUDAD AUTÓNOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (89, N'118', N'C', N'IDA', N'COMUN', N'CABA', N'CEAP', N'BARRIO 21-24', N'PLAZA DE MISERERE (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (90, N'118', N'C', N'VUELTA', N'COMUN', N'CABA', N'CEAP', N'PLAZA DE MISERERE (CIUDAD AUTONOMA DE BUENOS AIRES)', N'BARRIO 21-24')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (91, N'012', N'C', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'PUENTE PUEYRREDON (CIUDAD AUTONOMA DE BUENOS AIRES)', N'PLAZA FALUCHO (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (92, N'012', N'C', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'PLAZA FALUCHO (CIUDAD AUTONOMA DE BUENOS AIRES)', N'PUENTE PUEYRREDON (CIUDAD AUTONOMA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (93, N'151', N'A', N'IDA', N'COMUN', N'CABA', N'AAETA', N'PREDIO DE REGULACION AREA PLAZA CONSTITUCION', N'ESTACION DE TRANSFERENCIA DE TRANSPORTE PUBLICO DE PASAJEROS DE CORTA Y MEDIA DISTANCIA DE VICENTE LOPEZ (PARTIDO DE VICENTE LOPEZ - PROVINCIA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (94, N'151', N'A', N'VUELTA', N'COMUN', N'CABA', N'AAETA', N'ESTACION DE TRANSFERENCIA DE TRANSPORTE PUBLICO DE PASAJEROS DE CORTA Y MEDIA DISTANCIA DE VICENTE LOPEZ (PARTIDO DE VICENTE LOPEZ - PROVINCIA DE BUENOS AIRES)', N'PREDIO DE REGULACION AREA PLAZA CONSTITUCION')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (95, N'151', N'B', N'IDA', N'COMUN', N'CABA', N'AAETA', N'BARRIO 21- 24', N'ESTACIÓN DE TRANSFERENCIA DE TRANSPORTE PÚBLICO DE PASAJEROS DE CORTA Y MEDIA DISTANCIA DE VICENTE LÓPEZ (PARTIDO DE VICENTE LÓPEZ – PROVINCIA DE BUENOS AIRES)')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (96, N'151', N'B', N'VUELTA', N'COMUN', N'CABA', N'AAETA', N'ESTACIÓN DE TRANSFERENCIA DE TRANSPORTE PÚBLICO DE PASAJEROS DE CORTA Y MEDIA DISTANCIA DE VICENTE LÓPEZ (PARTIDO DE VICENTE LÓPEZ – PROVINCIA DE BUENOS AIRES)', N'BARRIO 21- 24')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (97, N'151', N'C', N'IDA', N'COMUN', N'CABA', N'AAETA', N'PREDIO DE REGULACION AREA PLAZA CONSTITUCION', N'CONCEPCION ARENAL Y ALVAREZ THOMAS')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (98, N'151', N'C', N'VUELTA', N'COMUN', N'CABA', N'AAETA', N'CONCEPCION ARENAL Y ALVAREZ THOMAS', N'PREDIO DE REGULACION AREA PLAZA CONSTITUCION')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (99, N'151', N'D', N'IDA', N'COMUN', N'CABA', N'AAETA', N'PREDIO DE REGULACION AREA PLAZA CONSTITUCION', N'PLAZA MISERERE')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (100, N'151', N'D', N'VUELTA', N'COMUN', N'CABA', N'AAETA', N'PLAZA MISERERE', N'PREDIO DE REGULACION AREA PLAZA CONSTITUCION')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (101, N'102', N'A', N'IDA', N'COMUN', N'CABA', N'CEAP', N'ESTACION LISANDRO DE LA TORRE', N'BARRACAS')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (102, N'102', N'A', N'VUELTA', N'COMUN', N'CABA', N'CEAP', N'BARRACAS', N'ESTACION LISANDRO DE LA TORRE')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (103, N'102', N'B', N'IDA', N'COMUN', N'CABA', N'CEAP', N'ESTACION LISANDRO DE LA TORRE', N'CONSTITUCION')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (104, N'102', N'B', N'VUELTA', N'COMUN', N'CABA', N'CEAP', N'CONSTITUCION', N'ESTACION LISANDRO DE LA TORRE')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (105, N'EBUS', N'A', N'IDA', N'NORMAL', N'CABA', N'CETUBA', N'PREDIO LEZAMA', N'TERMINAL DE CRUCEROS')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (106, N'EBUS', N'A', N'VUELTA', N'NORMAL', N'CABA', N'CETUBA', N'TERMINAL DE CRUCEROS', N'PREDIO LEZAMA')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (107, N'042', N'B', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'NUEVA POMPEYA', N'CIUDAD UNIVERSITARIA')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (108, N'042', N'A', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'NUEVA POMPEYA', N'CIUDAD UNIVERSITARIA')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (109, N'042', N'A', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'CIUDAD UNIVERSITARIA', N'NUEVA POMPEYA')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (110, N'042', N'B', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'CIUDAD UNIVERSITARIA', N'NUEVA POMPEYA')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (111, N'042', N'C', N'IDA', N'COMUN', N'CABA', N'CETUBA', N'NUEVA POMPEYA', N'PARQUE DE LOS NIÑOS')
GO
INSERT [dbo].[recorridos_colectivos] ([ID], [linea], [recorrido], [sentido], [modalidad], [jurisdiccion], [camara], [desde], [hasta]) VALUES (112, N'042', N'C', N'VUELTA', N'COMUN', N'CABA', N'CETUBA', N'PARQUE DE LOS NIÑOS', N'NUEVA POMPEYA')
GO
SET IDENTITY_INSERT [dbo].[recorridos_colectivos] OFF
GO
