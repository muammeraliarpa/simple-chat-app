# Node.js resmi imajını kullan
FROM node:20

# Çalışma dizinini oluştur
WORKDIR /app

# package.json ve package-lock.json'ı kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Tüm backend dosyalarını kopyala
COPY . .

# Server portunu expose et
EXPOSE 5000

# Server'ı başlat
CMD ["node", "server.js"]
