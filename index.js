import express from "express";

const PORT = 5000;

const app = express()

app.use(express.json())

app.post('/', (req, res) => {

	res.status(200).json('Сервер работает123')
})

app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))