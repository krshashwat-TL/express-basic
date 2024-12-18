const express = require('express');

const app = express();

//  middleware
app.use(express.json());

// routing
app.use('/posts', require('./routes/posts'));

app.get('/', (req, res) => {
  res.status(200).json({msg: "Home Route", errors: null});
});

app.get('/api/health', (req, res) => {
  res.status(200).json({msg: "Health check: All good", errors: null});
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});