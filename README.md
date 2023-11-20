The content below is an example project proposal / requirements document. Replace the text below the lines marked "__TODO__" with details specific to your project. Remove the "TODO" lines.

(__TODO__: your project name)

# NYU Eatz 

## Overview

(__TODO__: a brief one or two paragraph, high-level description of your project)

NYU meal plans are terrible. Freshmen often find themselves with wayyy too many swipes, while upperclassmen abandon the system entirely and are forced to scavenge the city for food. Swipe it Forward provided a partial solution to the issue, but it still had its flaws, and has since been completely ruined with new rules about donations and redemptions. 

NYU Eatz helps clear the overegulated meal swipe market by allowing students to buy and resell meal swipes below the NYU-set prices. When buyers log on to my app, they can create an order for one of the three mobile-order dining locations on campus. Then, sellers can purchase the meal with their meal swipe, share the confirmation info, and receive financial compensation. Find a cheap meal, or exchange surplus swipes for a bit of change: it's a win-win! 

## Data Model

(__TODO__: a description of your application's data and their relationships to each other) 

The application will store Buyers, Sellers and Orders.

Buyers and Sellers will both log in (sellers will have to link their GrubHub acct).
Buyers will place orders, which will then be assigned to available sellers.

(__TODO__: sample documents)

An Example Seller:

```javascript
{
  username: "mmmfood"
  email: abc123@nyu.edu
  token: // GrubHub oauth token
  status: offline //sellers will check in when they are available to fulfill orders
  orders: //list of past and present orders
}
```

An Example Buyer:

```javascript
{
  username: "mmmfood"
  email: abc123@nyu.edu
  password: //buyers can use password hash, but oauth recommended
  token: // GrubHub oauth token
  status: offline //sellers will check in when they are available to fulfill orders
  orders: //list of past and present orders
}
```

An Example Order:

```javascript
{
  buyer: // a reference to the Buyer object that placed the order
  location: //palladium, upstein, or mercer
  items: [
    ["Cluckstein", "Spicy Crispy Chicken Tenders & Fries Basket", {quantity: 1}, {side: "Classic Waffle Fries"}],
    ["Global Eats", "Pasta", {sauce: "Alfredo"}, {customize: "Sauce on the Side"}]
  ], //each item will contain the info necessary to add an item to the GrubHub cart
  createdAt: // timestamp
}
```


## [Link to Commented First Draft Schema](db.mjs) 

(__TODO__: create a first draft of your Schemas in db.mjs and link to it)

## Wireframes

(__TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

![landing page and buyer](documentation/landing_buyer.png)

![seller](documentation/seller.png)

## Site map

(__TODO__: draw out a site map that shows how pages are related to each other)

Here's a [complex example from wikipedia](https://upload.wikimedia.org/wikipedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

## User Stories or Use Cases

(__TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://en.wikipedia.org/wiki/Use_case))

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a buyer, I can place an order
4. as a seller, I can accept an order and upload confirmation


## Research Topics

(__TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed)

* (5 points) NextJS
	* I want to be able to easily port this app t mobile, where I think it will be better for users
	* Eventually, I will try to use NextJS with React Native screens, but I quickly found this was too much new technology
    to learn in a limited time, so I am starting by focusing on NextJS (and React and TypeScript) to get a feel for the
    syntax, navigation, etc.
* (4 points) Deploying on Vercel
	* I hope this app will actually get used, so I will deploy it on Vercel in anticipation of a finished version
* (3 points) tRPC
  * I want to learn how I can use tRPC for my API
  * The creator of Solito recommended this to me as a way to connect with a database for both web and mobiles
* (4 points) Integrating payment
	* This is probably a stretch, but if I can integrate a payment API such as Stripe before the deadline I will


## [Link to Initial Main Project File](app/layout.js)

(__TODO__: create a skeleton Express application with a package.json, app.mjs, views folder, etc. ... and link to your initial app.mjs)

## Annotations / References Used

(__TODO__: list any tutorials/references/etc. that you've based your code off of)
https://github.com/vercel/next.js/tree/canary/examples/with-react-native-web
https://nextjs.org/learn/dashboard-app
https://nextjs.org/learn/react-foundations
https://necolas.github.io/react-native-web/
https://nextjs.org/learn-pages-router/basics/create-nextjs-app
https://reactnative.dev/docs/getting-started
https://www.dripsy.xyz/usage/overview
https://github.com/Zabatly/website
https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
https://medium.com/courtly-intrepid/environmental-variables-in-next-js-with-dotenv-599c5bbfdf74
https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
