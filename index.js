const express = require('express');
const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.get('/populerfood', (req, res) => {
  res.sendFile(__dirname + '/jsons/populer_food.json')
});
app.get('/recommendatfood', (req, res) => {
  res.sendFile(__dirname + '/jsons/recomended_food.json')
});

app.get('/download/hospital', (req, res) => {
  // Set the file path and name
 
  const filePath = __dirname + '/doc/LearnQuran.apk';
  const fileName = 'LearnQuran.apk';

  // Use res.download() to download the file
  res.download(filePath, fileName, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File downloaded successfully');
    }
  });

});

app.use((req, res, next) => {
  res.status(404).redirect('/');
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
