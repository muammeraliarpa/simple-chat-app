const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo-service:27017/simplechat', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB bağlandı'));

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

app.listen(5000, () => console.log('Server 5000 portunda çalışıyor'));
