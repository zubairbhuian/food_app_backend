const express = require('express');
const app = express();
const port =process.env.PORT || 3000;

app.use(express.static('public'));          
app.use(express.static('downloads'));          





// ! ================Web Page Route =============
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});




// ! ================(API) Food App Route =============
app.get('/populerfood', (req, res) => {
  res.sendFile(__dirname + '/jsons/populer_food.json')
});
app.get('/recommendatfood', (req, res) => {
  res.sendFile(__dirname + '/jsons/recomended_food.json')
});




// ! ================ App Download Route =============

// hospital app
app.get('/apps/hospital/download', (req, res) => {
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

//  Todo app app
app.get('/apps/todoapp/download', (req, res) => {
  const filePath = __dirname + '/doc/TodoApp.apk';
  const fileName = 'TodoApp.apk';

  // Use res.download() to download the file
  res.download(filePath, fileName, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File downloaded successfully');
    }
  });
});
//  Todo app app
app.get('/cv/download', (req, res) => {
  const filePath = __dirname + "/doc/zubair'sCV.pdf";
  const fileName = "zubair'sCV.pdf";

  // Use res.download() to download the file
  res.download(filePath, fileName, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File downloaded successfully');
    }
  });
});



// ! ================ Redirec Route =============
app.use((req, res, next) => {
  res.status(404).redirect('/');
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`http://localhost:${port}/`);
});
