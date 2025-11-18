# Bd-Electronics

A modern electronics e-commerce frontend built using **React.js**, **Tailwind CSS**, **Clerk Authentication**, **axios**, **react-slick carousel**, and **react-toastify**.

---
view link= https://6917794d114926f86c691eae--serene-jalebi-00a5de.netlify.app/
versel=https://bd-electronics-1.vercel.app/products
## 🚀 Features

### ✅ Authentication (Clerk.com)

* Sign In / Sign Up using Clerk
* User metadata support
* Store and display user location

### ✅ API & Data Handling

* axios instance for API requests
* Home page carousel data (FakeStore API / mock JSON)
* Product listing, Product details
* Local / external product image files support

### ✅ UI / UX

* Tailwind CSS responsive design
* react-slick image carousel
* react-toastify notifications
* React Router for page navigation

---

## 📦 Tech Stack

* **React.js** (Vite recommended)
* **Tailwind CSS**
* **axios**
* **react-slick** + **slick-carousel**
* **react-toastify**
* **react-router-dom**
* **@clerk/clerk-react**

---

## 📁 Project Setup

### 1️⃣ Clone Project

```bash
git clone <your-repo-url>
cd bd-electronics
```

### 2️⃣ Install Dependencies

```bash
npm install
```

4. Wrap app in ClerkProvider

```jsx
import { ClerkProvider } from '@clerk/clerk-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
    <App />
  </ClerkProvider>
);
```

---

## 🌍 User Location

Use:

* Clerk metadata **OR**
* Browser geolocation API

Example:

```js
navigator.geolocation.getCurrentPosition((pos) => {
  console.log(pos.coords.latitude, pos.coords.longitude);
});
```

---

## 🎠 Home Page Carousel (react-slick)

Install:

```bash
npm install react-slick slick-carousel
```

Import slick styles inside component:

```css
@import 'slick-carousel/slick/slick.css';
@import 'slick-carousel/slick/slick-theme.css';
```

Basic usage:

```jsx
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
};

<Slider {...settings}>
  {items.map(i => (
    <img key={i.id} src={i.image} />
  ))}
</Slider>
```

---

## 🔔 Toast Notifications

```jsx
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

<ToastContainer />

toast.success("Added to cart");
```

---

##

```
```

---

## 🛠 Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## 🔮 Future Enhancements

* Admin dashboard
* Payment integration (Stripe)
* Cloud image upload
* Product search & filtering

---

## 📜 License

This project is free to use for learning and development.
