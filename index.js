import express from 'express';

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.json({ message: 'Server is Healthy v3.1 , mode : Github Actions' });
}); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


    