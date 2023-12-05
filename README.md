# NYU Eatz
## [Deployed Site on Vercel](https://ait-project-public.vercel.app/) 

## Overview


NYU meal plans are terrible. Freshmen often find themselves with wayyy too many swipes, while upperclassmen abandon the system entirely and are forced to scavenge the city for food. Swipe it Forward provided a partial solution to the issue, but it still had its flaws, and has since been completely ruined with new rules about donations and redemptions. 

NYU Eatz helps clear the overegulated meal swipe market by allowing students to buy and resell meal swipes below the NYU-set prices. When buyers log on to my app, they can create an order for one of the three mobile-order dining locations on campus. Then, sellers can purchase the meal with their meal swipe, share the confirmation info, and receive financial compensation. Find a cheap meal, or exchange surplus swipes for a bit of change: it's a win-win! 

## Data Model


The application will store Users and Orders.

Users will log in and can place or fulfill.


An Example Seller:

```javascript
{
  username: "mmmfood"
  email: abc123@nyu.edu
  password: password
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


## [Link to Commented First Draft Schema](/models) 


## Wireframes


![landing page and buyer](documentation/landing_buyer.png)

![seller](documentation/seller.png)

## Site map


Here's a [complex example from wikipedia](https://upload.wikimedia.org/wikipedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a buyer, I can place an order
4. as a seller, I can fullfil an order


## Research Topics

(__TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed)

* (6 points) Next.JS
	* I want to be able to easily port this app to mobile, where I think it will be better for users
	* Eventually, I want to work with the Solito libray (NextJS naviagtion with React Native screens), but that was too much for this project
	* For now, I will just learn React and NextJS routing patterns
* (4 points) Deploying on Vercel
	* I hope this app will actually get used, so I will deploy it on Vercel in anticipation of a finished version
* (2 points) Next-Auth
  * I will use next-auth to handle my authentication needs
  * I think this is probably the simplest and easiest way to handle authenticaiton, sessions, and protected routes in NextJS


## [Link to Initial Main Project File](pages/index.tsx)

## Annotations / References Used
https://next-auth.js.org/
https://nextjs.org/docs
https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
https://www.youtube.com/watch?v=2kgqPvs0j_I&t=447s
https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose
https://github.com/EBEREGIT/nextjs-nextauth-tut/blob/main/page_router_tutorial
https://stackoverflow.com/questions/70409219/get-user-id-from-session-in-next-auth-client
