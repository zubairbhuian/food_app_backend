const express= require('express')
const serverless=require('serverless-http')
const app =express()

const router =express.Router()

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))
app.use(express.json())




router.get('/',(req,res)=>{
//   res.sendFile(__dirname+'/./views/index.html')
res.json({
    'name':'Zubair'
})


})

router.get('/api/food/populer',(req,res)=>{
//   res.sendFile(__dirname+'/./jsons/populer_food.json')
res.json([
    {
      "id": 1,
      "name": "Nutritious fruit meal in china",
      "description": "This five red bases, two are dedicated to salami (fennel and regular), and there s a classic capricciosa or beef carpaccio. Blanco options include a mushroom, and a four-cheese extravaganza featuring great lobes of a tangy fior di latte they make in house every day (more on this later). Classic, precise, good.I think it s still better to think of this venue not as a pizzeria, but as Pizza, by Di Stasio.Rinaldo Di Stasio and Mallory Wall s empire, including the original restaurant and bar in St Kilda, Citta and now Carlton, is a designer label for dining.",
      "price": 12,
      "stars": 4,
      "img": "images/populer_images/food_page_body1.jpg",
      "location": "Canada, British Columbia",
      "created_at": "2021-11-17 10:09:08",
      "updated_at": "2022-05-16 11:48:53",
      "type_id": 2
    },
    {
      "id": 2,
      "name": "Sweet Dessert",
      "description": "The best sweet dessertThe quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city. The thick galleria walls of the restaurant s three distinct areas are cast in gentle neon so that even your worst wine-fuelled photos turn into atmospheric still lifes. The art, typically, lands a gut punch.From the Bill Henson portraits at the St Kilda restaurant to Shaun Gladwell s beautiful video artworks at Citta, Di Stasio doesn t use pieces to decorate but to provoke. On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city. The thick galleria walls of the restaurant s three distinct areas are cast in gentle neon so that even your worst wine-fuelled photos turn into atmospheric still lifes. The art, typically, lands a gut punch.From the Bill Henson portraits at the St Kilda restaurant to Shaun Gladwell s beautiful video artworks at Citta, Di Stasio doesn t use pieces to decorate but to provoke. On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city. The thick galleria walls of the restaurant s three distinct areas are cast in gentle neon so that even your worst wine-fuelled photos turn into atmospheric still lifes. The art, typically, lands a gut punch.From the Bill Henson portraits at the St Kilda restaurant to Shaun Gladwell s beautiful video artworks at Citta, Di Stasio doesn t use pieces to decorate but to provoke. On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.",
      "price": 21,
      "stars": 5,
      "img": "images/populer_images/food_page_body2.jpg",
      "location": "Icefields, Alberta",
      "created_at": "2021-11-17 10:10:43",
      "updated_at": "2022-05-16 11:49:07",
      "type_id": 2
    },
    {
      "id": 3,
      "name": "Cuban Fufu",
      "description": "The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city. The thick galleria walls of the restaurant s three distinct areas are cast in gentle neon so that even your worst wine-fuelled photos turn into atmospheric still lifes. The art, typically, lands a gut punch.From the Bill Henson portraits at the St Kilda restaurant to Shaun Gladwell s beautiful video artworks at Citta, Di Stasio doesn t use pieces to decorate but to provoke. On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.",
      "price": 10,
      "stars": 5,
      "img": "images/populer_images/food_page_body3.jpg",
      "location": "Cuba",
      "created_at": "2021-12-23 15:04:49",
      "updated_at": "2022-01-01 08:56:45",
      "type_id": 2
    },
    {
      "id": 4,
      "name": "Chicken biriani",
      "description": "Chicken Biryani Served in a Bowl Close Up Photo. Indian Food, Indian Style Rice and Chicken. #Biryani #ChickenBiryani #IndianFood #StockPhoto",
      "price": 12,
      "stars": 4,
      "img": "images/populer_images/food_page_body4.jpg",
      "location": "china",
      "created_at": "2021-12-27 06:29:47",
      "updated_at": "2022-01-01 08:56:33",
      "type_id": 2
    },
    {
      "id": 5,
      "name": "Hilsha fish",
      "description": "Ilish Mach aka Hilsa fish is in the season and needless to say, I cooked it a few times this year as well. This year, however, I have used Ilish mach to make simple delicacies mostly. Ilish Beguner Jhol is probably the simplest of the lot, well, after Ilish Mach Bhaja.Ilish Mach aka Hilsa fish is in the season and needless to say, I cooked it a few times this year as well. This year, however, I have used Ilish mach to make simple delicacies mostly. Ilish Beguner Jhol is probably the simplest of the lot, well, after Ilish Mach Bhaja.Ilish Mach aka Hilsa fish is in the season and needless to say, I cooked it a few times this year as well. This year, however, I have used Ilish mach to make simple delicacies mostly. Ilish Beguner Jhol is probably the simplest of the lot, well, after Ilish Mach Bhaja.",
      "price": 12,
      "stars": 5,
      "img": "images/populer_images/food_page_body5.jpg",
      "location": "china",
      "created_at": "2021-12-27 06:35:34",
      "updated_at": "2022-01-01 08:56:22",
      "type_id": 2
    },
    {
      "id": 6,
      "name": "Creole Rice Side Dish Recipe",
      "description": "The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city. The thick galleria walls of the restaurant s three distinct areas are cast in gentle neon so that even your worst wine-fuelled photos turn into atmospheric still lifes. The art, typically, lands a gut punch.From the Bill Henson portraits at the St Kilda restaurant to Shaun Gladwell s beautiful video artworks at Citta, Di Stasio doesn t use pieces to decorate but to provoke. On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.",
      "price": 18,
      "stars": 4,
      "img": "images/populer_images/food_page_body6.jpg",
      "location": "china",
      "created_at": "2021-12-23 15:03:24",
      "updated_at": "2022-01-21 10:28:04",
      "type_id": 2
    },
    {
      "id": 7,
      "name": "Creole Rice Side Dish Recipe",
      "description": "The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city. The thick galleria walls of the restaurant s three distinct areas are cast in gentle neon so that even your worst wine-fuelled photos turn into atmospheric still lifes. The art, typically, lands a gut punch.From the Bill Henson portraits at the St Kilda restaurant to Shaun Gladwell s beautiful video artworks at Citta, Di Stasio doesn t use pieces to decorate but to provoke. On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.",
      "price": 18,
      "stars": 4,
      "img": "images/populer_images/food_page_body7.jpg",
      "location": "china",
      "created_at": "2021-12-23 15:03:24",
      "updated_at": "2022-01-21 10:28:04",
      "type_id": 2
    },
    {
      "id": 8,
      "name": "Creole Rice Side Dish Recipe",
      "description": "The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city. The thick galleria walls of the restaurant s three distinct areas are cast in gentle neon so that even your worst wine-fuelled photos turn into atmospheric still lifes. The art, typically, lands a gut punch.From the Bill Henson portraits at the St Kilda restaurant to Shaun Gladwell s beautiful video artworks at Citta, Di Stasio doesn t use pieces to decorate but to provoke. On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.",
      "price": 18,
      "stars": 4,
      "img": "images/populer_images/food_page_body8.jpg",
      "location": "china",
      "created_at": "2021-12-23 15:03:24",
      "updated_at": "2022-01-21 10:28:04",
      "type_id": 2
    }
  ])

})

router.get('/api/food/recomended',(req,res)=>{
//   res.sendFile(__dirname+'/./jsons/recomended_food.json')
res.json([
    {
      "id": 1,
      "name": "Kung Pao chicken",
      "description": "This five red bases, two are dedicated to salami (fennel and regular), and there s a classic capricciosa or beef carpaccio. Blanco options include a mushroom, and a four-cheese extravaganza featuring great lobes of a tangy fior di latte they make in house every day (more on this later). Classic, precise, good.I think it s still better to think of this venue not as a pizzeria, but as Pizza, by Di Stasio.Rinaldo Di Stasio and Mallory Wall s empire, including the original restaurant and bar in St Kilda, Citta and now Carlton, is a designer label for dining.The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city. The thick galleria walls of the restaurant s three distinct areas are cast in gentle neon so that even your worst wine-fuelled photos turn into atmospheric still lifes. The art, typically, lands a gut punch.From the Bill Henson portraits at the St Kilda restaurant to Shaun Gladwell s beautiful video artworks at Citta, Di Stasio doesn t use pieces to decorate but to provoke. On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning.",
      "price": 12,
      "stars": 4,
      "img": "images/reco_images/recoimage1.jpg",
      "location": "Canada, British Columbia",
      "created_at": "2021-11-17 10:09:08",
      "updated_at": "2022-05-16 11:48:53",
      "type_id": 2
    },
    {
      "id": 2,
      "name": "Turkish Sub",
      "description": "The best sweet dessertThe quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city. The thick galleria walls of the restaurant s three distinct areas are cast in gentle neon so that even your worst wine-fuelled photos turn into atmospheric still lifes. The art, typically, lands a gut punch.From the Bill Henson portraits at the St Kilda restaurant to Shaun Gladwell s beautiful video artworks at Citta, Di Stasio doesn t use pieces to decorate but to provoke. On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.",
      "price": 21,
      "stars": 5,
      "img": "images/reco_images/recoimage2.jpg",
      "location": "Icefields, Alberta",
      "created_at": "2021-11-17 10:10:43",
      "updated_at": "2022-05-16 11:49:07",
      "type_id": 2
    },
    {
      "id": 3,
      "name": "Cuban Fufu",
      "description": "The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city. The thick galleria walls of the restaurant s three distinct areas are cast in gentle neon so that even your worst wine-fuelled photos turn into atmospheric still lifes. The art, typically, lands a gut punch.From the Bill Henson portraits at the St Kilda restaurant to Shaun Gladwell s beautiful video artworks at Citta, Di Stasio doesn t use pieces to decorate but to provoke.The best sweet dessertThe quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city. The thick galleria walls of the restaurant s three distinct areas are cast in gentle neon so that even  titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.",
      "price": 10,
      "stars": 5,
      "img": "images/reco_images/recoimage3.jpg",
      "location": "Cuba",
      "created_at": "2021-12-23 15:04:49",
      "updated_at": "2022-01-01 08:56:45",
      "type_id": 2
    },
    {
      "id": 4,
      "name": "Peking Duck",
      "description": "Chicken Biryani Served in a Bowl Close Up Photo. Indian Food, Indian Style Rice and Chicken. The best sweet dessertThe quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city. The thick galleria walls of the restaurant s three distinct areas are cast in gentle neon so that even your worst wine-fuelled photos turn into atmospheric still lifes. The art, typically, lands a gut punch.From the Bill Henson portraits at the St Kilda restaurant to Shaun Gladwell s beautiful video artworks at Citta, Di Stasio doesn t use pieces to decorate but to provoke. On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.",
      "price": 12,
      "stars": 4,
      "img": "images/reco_images/recoimage4.jpg",
      "location": "china",
      "created_at": "2021-12-27 06:29:47",
      "updated_at": "2022-01-01 08:56:33",
      "type_id": 2
    },
    {
      "id": 5,
      "name": "Turkish Style Pizza",
      "description": "Ilish Mach aka Hilsa fish is in the season and needless to say, I cooked it a few times this year as well. TThe best sweet dessertThe quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city. The thick galleria walls of the restaurant s three distinct areas are cast in gentle neon so that even your worst wine-fuelled photos turn into atmospheric still lifes. The art, typically, lands a gut punch.From the Bill Henson portraits at the St Kilda restaurant to Shaun Gladwell s beautiful video artworks at Citta, Di Stasio doesn t use pieces to decorate but to provoke. On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city..",
      "price": 12,
      "stars": 5,
      "img": "images/reco_images/recoimage5.jpg",
      "location": "china",
      "created_at": "2021-12-27 06:35:34",
      "updated_at": "2022-01-01 08:56:22",
      "type_id": 2
    },
    {
      "id": 6,
      "name": "Turk's Meatballs",
      "description": "The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city. The thick galleria walls of the restaurant s three distinct areas are cast in gentle neon so that even your worst wine-fuelled photos turn into atmospheric still lifes. The art, typically, The best sweet dessertThe quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city. The thick galleria walls of the restaurant s three distinct areas are cast in gentle neon so that even your worst wine-fuelled photos turn into atmospheric still lifes. The art, typically, lands a gut punch.From the Bill Henson portraits at the St Kilda restaurant to Shaun Gladwell s beautiful video artworks at Citta, Di Stasio doesn t use pieces to decorate but to provoke. On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city..",
      "price": 18,
      "stars": 4,
      "img": "images/reco_images/recoimage6.jpg",
      "location": "china",
      "created_at": "2021-12-23 15:03:24",
      "updated_at": "2022-01-21 10:28:04",
      "type_id": 2
    },
    {
      "id": 7,
      "name": "Soy egg",
      "description": "The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city. The thick galleria walls of the restaurant s three distinct areas are cast in gentle neon so that even your worst wine-fuelled photos turn into atmospheric still lifes. The art, typically, lands a gut punch.The best sweet dessertThe quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city. The thick galleria walls of the restaurant s three distinct areas are cast in gentle neon so that even your worst wine-fuelled photos turn into atmospheric still lifes. The art, typically, lands a gut punch.From the Bill Henson portraits at the St Kilda restaurant to Shaun Gladwell s beautiful video artworks at Citta, Di Stasio doesn t use pieces to decorate but to provoke. On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.On entry, a bronze cast of Di Stasio s hands jutt out of the wall, immortalised in the sign of the bull – equal parts a rock star welcome and a warning. A trio of powerful works by Kamilaroi artist Reko Rennie, titled Genesis, goes straight for the jugular of unceded sovereignty.The quality and craftsmanship is on full show. The waiters  signature white tunics are of loosely rumpled linen here versus the crisp whites of the city.",
      "price": 18,
      "stars": 4,
      "img": "images/reco_images/recoimage7.jpg",
      "location": "china",
      "created_at": "2021-12-23 15:03:24",
      "updated_at": "2022-01-21 10:28:04",
      "type_id": 2
    }
 
  ]
  )
}) 

router.get('/download/learnquran',(req,res)=>{
  res.download('./doc/LearnQuran.apk')
})


router.use((req,res,next)=>{
    res.status(404).json({
     message:'rout not found'
    })
  })
  router.use((err,req,res,next)=>{
    res.status(500).json({
     message:'Some thing broke'
    })
  })
  
app.use("/.netlify/functions/api",router)
module.exports.handler=serverless(app);
