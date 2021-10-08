# Sound

Turn Up The Volume, Turn Down The Prices

## Project Overview

Sound is a app where the user can sell or purchase audio tech. The user will be able to see available products and their details. Once the user creates an account, they can sell their own audio products by adding them to the app. 

## Dependencies 
<b>Back-End:</b>
Express
MongoDB
Bcrypt

<b>Front-End:</b>
React
React Router
React-Router-Dom
Axios

## [Team Expectations](https://docs.google.com/document/d/1Bn4YaElpcLGPLhebpjtfwx3JY8-ktIi10z4a12WZJCw/edit)

## Wireframes

[Wireframes](https://www.figma.com/file/ClP5JIzhkLCLUwU3MgjqBS/SOUND?node-id=0%3A1)

Home Screen
![Home](https://res.cloudinary.com/dfryxohde/image/upload/v1633664867/SOUND/Home_ul7f72.png)

Products Page
![Products](https://res.cloudinary.com/dfryxohde/image/upload/v1633664867/SOUND/Products_dvoiuh.png)

Product Details Page
![Product Details](https://res.cloudinary.com/dfryxohde/image/upload/v1633664866/SOUND/Details_bzyxwr.png)

Create Account
![Create Account](https://res.cloudinary.com/dfryxohde/image/upload/v1633664866/SOUND/CreateAccount_yuk0o4.png)

Sign In
![Sign In](https://res.cloudinary.com/dfryxohde/image/upload/v1633664866/SOUND/SignIn_mc8vhm.png)

Home Screen When Logged In
![Home Screen When Logged In](https://res.cloudinary.com/dfryxohde/image/upload/v1633664867/SOUND/LoggedInHome_hebytu.png)

Create Product
![Create Product](https://res.cloudinary.com/dfryxohde/image/upload/v1633664866/SOUND/CreateProduct_xe42wm.png)

Edit Product
![Edit Product](https://res.cloudinary.com/dfryxohde/image/upload/v1633664867/SOUND/EditProduct_rleviu.png)

## Flowchart

[Whimsical Flowchart](https://whimsical.com/sound-9o94b77oTeUwTsQo83mibC)
![Whimsical Flowchart](https://res.cloudinary.com/dfryxohde/image/upload/v1633701359/SOUND/Screen_Shot_2021-10-08_at_8.55.34_AM_b8z6fm.png)

## Schemas

<b>Product:</b>
```
const Product = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    details: { type: String, required: true },
    imgURL: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
)
```

<b>User:</b>
```
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
)
```

## [GitHub Project Board](https://github.com/Bri-Gonzalez/Sound/projects/1)
