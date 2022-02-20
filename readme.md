# ShareFood
Artan yemekleri ihtiyaç sahipleriyle buluşturuyoruz.

---
## Development
### Install Repository
```git
git clone https://github.com/si-hesteg/si-hesteg-backend
```

### config.json Setup
```json
{
    "mongodb": "ENTER MONGODB URL"
}
```

### Install Node Modules
```js
npm install
```

### Run Project
```js
npm run dev // start with nodemon
npm start
```

### Finish
```
Your project is running on https://localhost:3000.
```
---
## REQUESTS

| Path | Method | Params |Description |
| ----------- | ----------- | ----------- | ----------- |
| /search? | GET | city, district, neighborhood | Get restaurants |
| /cities | GET | - | Get cities with restaurants |
| /districts | GET | - | Get districts with restaurants |
| /neighborhoods | GET | city, district | Get neighborhoods with restaurants |
| /restaurant/RESTAURANT_ID | GET | - | Get restaurant |
| /restaurant/RESTAURANT_ID/food | GET | - | Get foods of restaurant |
| /restaurant/upload | POST | - | Upload a food |
| /restaurant/delete | POST | - | Delete a food |
| /login | POST | - | Login |
| /register | POST | - | Register |