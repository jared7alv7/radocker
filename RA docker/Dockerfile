# Imagen base oficial de Node
FROM node:18-alpine

# Crear carpeta dentro del contenedor
WORKDIR /app

# CREAR el package.json
COPY app/package*.json ./

# Instalar dependencias (no hay muchas)
RUN npm install

# Copiar el resto del código
COPY app/ .

# Exponer el puerto
EXPOSE 8080

# Comando para iniciar la aplicación
CMD ["npm", "start"]
