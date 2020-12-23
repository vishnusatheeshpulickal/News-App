const express = require('express');
const router = express.Router()
const axios = require('axios')
require('dotenv').config()
const Joi = require('joi');
const facts = require("../../contents/interestingfacts");

const lang="en";

router.get('/',async(req,res)=>{
    try{
         const newsAPI = await axios.get(`https://gnews.io/api/v4/top-headlines?&lang=${lang}&token=${process.env.APIKEY}`) 
         
        
         await res.render('usernews',{ news : newsAPI.data,facts })
    }catch(err){
      if(err) return res.status(404).render('404error')
    if(err) return res.status(500).render('500error')
    if(err) return res.status(429).render('429error')
      if(err.response){
        res.render('usernews',{ news : null })
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
      }else if(err.request){
        res.render('usernews',{ news : null })
          console.log(err.request)
      }else{
          console.log('Error',err.message)
      }
    }
});

// sports news
router.get('/news/sports',async(req,res)=>{
  try{
       const newsAPI = await axios.get(`https://gnews.io/api/v4/top-headlines?&token=${process.env.APIKEY}&topic=sports&lang=${lang}`) 
       console.log(newsAPI.data)
       await res.render('usernews',{ news : newsAPI.data,facts })
  }catch(err){
    if(err) return res.status(404).render('404error')
  if(err) return res.status(500).render('500error')
  if(err) return res.status(429).render('429error')
    if(err.response){
      res.render('usernews',{ news : null })
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    }else if(err.request){
      res.render('usernews',{ news : null })
        console.log(err.request)
    }else{
        console.log('Error',err.message)
    }
  }
});

// business news
router.get('/news/business',async(req,res)=>{
  try{
       const newsAPI = await axios.get(`https://gnews.io/api/v4/top-headlines?&token=${process.env.APIKEY}&topic=business&lang=${lang}`) 
       console.log(newsAPI.data)
       await res.render('usernews',{ news : newsAPI.data,facts })
  }catch(err){
    if(err) return res.status(404).render('404error')
  if(err) return res.status(500).render('500error')
  if(err) return res.status(429).render('429error')
    if(err.response){
      res.render('usernews',{ news : null })
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    }else if(err.request){
      res.render('usernews',{ news : null })
        console.log(err.request)
    }else{
        console.log('Error',err.message)
    }
  }
});

// entertainment
router.get('/news/entainment',async(req,res)=>{
  try{
       const newsAPI = await axios.get(`https://gnews.io/api/v4/top-headlines?&token=${process.env.APIKEY}&topic=entertainment&lang=${lang}`) 
       console.log(newsAPI.data)
       await res.render('usernews',{ news : newsAPI.data,facts })
  }catch(err){
    if(err) return res.status(404).render('404error')
  if(err) return res.status(500).render('500error')
  if(err) return res.status(429).render('429error')
    if(err.response){
      res.render('usernews',{ news : null })
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    }else if(err.request){
      res.render('usernews',{ news : null })
        console.log(err.request)
    }else{
        console.log('Error',err.message)
    }
  }
});

//technology
router.get('/news/technology',async(req,res)=>{
  try{
       const newsAPI = await axios.get(`https://gnews.io/api/v4/top-headlines?&token=${process.env.APIKEY}&topic=technology&lang=${lang}`) 
       console.log(newsAPI.data)
       await res.render('usernews',{ news : newsAPI.data,facts })
  }catch(err){
    if(err) return res.status(404).render('404error')
  if(err) return res.status(500).render('500error')
  if(err) return res.status(429).render('429error')
    if(err.response){
      res.render('usernews',{ news : null })
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    }else if(err.request){
      res.render('usernews',{ news : null })
        console.log(err.request)
    }else{
        console.log('Error',err.message)
    }
  }
});

// health
router.get('/news/health',async(req,res)=>{
  try{
       const newsAPI = await axios.get(`https://gnews.io/api/v4/top-headlines?&token=${process.env.APIKEY}&topic=health&lang=${lang}`) 
       console.log(newsAPI.data)
       await res.render('usernews',{ news : newsAPI.data,facts })
  }catch(err){
    if(err) return res.status(404).render('404error')
  if(err) return res.status(500).render('500error')
  if(err) return res.status(429).render('429error')
    if(err.response){
      res.render('usernews',{ news : null })
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    }else if(err.request){
      res.render('usernews',{ news : null })
        console.log(err.request)
    }else{
        console.log('Error',err.message)
    }
  }
});

// science
router.get('/news/science',async(req,res)=>{
  try{
       const newsAPI = await axios.get(`https://gnews.io/api/v4/top-headlines?&token=${process.env.APIKEY}&topic=science&lang=${lang}`) 
       console.log(newsAPI.data)
       await res.render('usernews',{ news : newsAPI.data,facts })
  }catch(err){
    if(err) return res.status(404).render('404error')
  if(err) return res.status(500).render('500error')
  if(err) return res.status(429).render('429error')
    if(err.response){
      res.render('usernews',{ news : null })
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    }else if(err.request){
      res.render('usernews',{ news : null })
        console.log(err.request)
    }else{
        console.log('Error',err.message)
    }
  }
});

// world
router.get('/news/world',async(req,res)=>{
  try{
       const newsAPI = await axios.get(`https://gnews.io/api/v4/top-headlines?&token=${process.env.APIKEY}&topic=world&lang=${lang}`) 
       console.log(newsAPI.data)
       await res.render('usernews',{ news : newsAPI.data,facts })
  }catch(err){
    if(err) return res.status(404).render('404error')
  if(err) return res.status(500).render('500error')
  if(err) return res.status(429).render('429error')
    if(err.response){
      res.render('usernews',{ news : null })
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    }else if(err.request){
      res.render('usernews',{ news : null })
        console.log(err.request)
    }else{
        console.log('Error',err.message)
    }
  }
});

// nation
router.get('/news/nation',async(req,res)=>{
  try{
       const newsAPI = await axios.get(`https://gnews.io/api/v4/top-headlines?&token=${process.env.APIKEY}&topic=nation&lang=${lang}`) 
       console.log(newsAPI.data)
       await res.render('usernews',{ news : newsAPI.data,facts })
  }catch(err){
    if(err) return res.status(404).render('404error')
  if(err) return res.status(500).render('500error')
  if(err) return res.status(429).render('429error')
    if(err.response){
      res.render('usernews',{ news : null })
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    }else if(err.request){
      res.render('usernews',{ news : null })
        console.log(err.request)
    }else{
        console.log('Error',err.message)
    }
  }
});

// breaking news
router.get('/news/breaking-news',async(req,res)=>{
  try{
       const newsAPI = await axios.get(`https://gnews.io/api/v4/top-headlines?&token=${process.env.APIKEY}&topic=breaking-news&lang=${lang}`) 
       console.log(newsAPI.data)
       await res.render('usernews',{ news : newsAPI.data,facts })
  }catch(err){
    if(err) return res.status(404).render('404error')
  if(err) return res.status(500).render('500error')
  if(err) return res.status(429).render('429error')
    if(err.response){
      res.render('usernews',{ news : null })
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    }else if(err.request){
      res.render('usernews',{ news : null })
        console.log(err.request)
    }else{
        console.log('Error',err.message)
    }
  }
});

// entertainments
router.get('/news/entertainment',async(req,res)=>{
  try{
       const newsAPI = await axios.get(`https://gnews.io/api/v4/top-headlines?&token=${process.env.APIKEY}&topic=entertainment&lang=${lang}`) 
       console.log(newsAPI.data)
       await res.render('usernews',{ news : newsAPI.data,facts })
  }catch(err){
    if(err) return res.status(404).render('404error')
  if(err) return res.status(500).render('500error')
  if(err) return res.status(429).render('429error')
    if(err.response){
      res.render('usernews',{ news : null })
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    }else if(err.request){
      res.render('usernews',{ news : null })
        console.log(err.request)
    }else{
        console.log('Error',err.message)
    }
  }
});

//search
router.post("/news/search",async(req,res)=>{
  try{
    const newsAPI = await axios.get(`https://gnews.io/api/v4/search?q="${req.body.search}"&token=${process.env.APIKEY}&lang=${lang}`)  
    console.log(newsAPI.data)
    await res.render('usernews',{ news : newsAPI.data,facts })
}catch(err){
 if(err) return res.status(404).render('404error')
if(err) return res.status(500).render('500error')
if(err) return res.status(429).render('429error')
 if(err.response){
   res.render('usernews',{ news : null })
     console.log(err.response.data)
     console.log(err.response.status)
     console.log(err.response.headers)
 }else if(err.request){
   res.render('usernews',{ news : null })
     console.log(err.request)
 }else{
     console.log('Error',err.message)
 }
}
});

// language
router.get("/news/lang",(req,res)=>{
console.log(req.body.lang)
})

// signup
router.get("/user/signup",(req,res)=>{
  res.render("signup")
   const{name,email,password,cpassword}=req.body;
   const {error}=signupValidation(req.body);
   
})


// signup validation
function signupValidation(signup){
  const schema = Joi.object({
   name:Joi.string().min(3).max(30).required(),
   email:Joi.string().pattern(new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)).required(),
   password:Joi.string().min(6).max(20).required(),
   cpassword:Joi.string().equal(Joi.ref('password')).message("password doesn't match")
  })
}

module.exports = router;



 