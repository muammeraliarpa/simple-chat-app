# Hafif web sunucusu olarak nginx kullanacağız
FROM nginx:alpine

# Frontend dosyalarını nginx'in default web dizinine kopyala
COPY . /usr/share/nginx/html

# Nginx portunu expose et
EXPOSE 80

# Nginx'i foreground modda çalıştır
CMD ["nginx", "-g", "daemon off;"]
