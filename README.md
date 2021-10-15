# Sound

Turn Up The Volume

## Project Overview

Sound is a app where the user can sell or purchase audio tech. The user will be able to see available products and their details. Once the user creates an account, they can sell their own audio products by adding them to the app.

## Dependencies

<b>Back-End:</b>

- Express
- MongoDB
- Bcrypt

<b>Front-End:</b>

- React
- React Router
- React-Router-Dom
- Axios

## [Team Expectations](https://docs.google.com/document/d/1Bn4YaElpcLGPLhebpjtfwx3JY8-ktIi10z4a12WZJCw/edit)

## [Wireframes](https://www.figma.com/file/ClP5JIzhkLCLUwU3MgjqBS/SOUND?node-id=0%3A1)

Home Screen
![Home](https://res.cloudinary.com/dfryxohde/image/upload/v1634270021/SOUND/Home_rkutbs.png)

Products Page
![Products](https://res.cloudinary.com/dfryxohde/image/upload/v1634270021/SOUND/Products_npumjc.png)

Product Details Page
![Product Details](https://res.cloudinary.com/dfryxohde/image/upload/v1634270021/SOUND/ProductDetails_clxqqt.png)

Create Account
![Create Account](https://res.cloudinary.com/dfryxohde/image/upload/v1634270020/SOUND/CreateAccount_a7qwxc.png)

Sign In
![Sign In](https://res.cloudinary.com/dfryxohde/image/upload/v1634270020/SOUND/SignIn_rsd6we.png)

Home Screen When Logged In
![Home Screen When Logged In](https://res.cloudinary.com/dfryxohde/image/upload/v1634270021/SOUND/LoggedInHome_hrspbj.png)

Add Product
![Add Product](https://res.cloudinary.com/dfryxohde/image/upload/v1634272628/SOUND/AddProduct_yjmtu8.png)

Edit Product
![Edit Product](https://res.cloudinary.com/dfryxohde/image/upload/v1634272628/SOUND/EditProduct_gmjpcs.png)

## [Component Hierarchy](https://whimsical.com/sound-9o94b77oTeUwTsQo83mibC)

![Whimsical Flowchart](https://res.cloudinary.com/dfryxohde/image/upload/v1633712293/SOUND/ComponentHierarchy_eosb9s.png)

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
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
)
```

## [GitHub Project Board](https://github.com/Bri-Gonzalez/Sound/projects/1)
