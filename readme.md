# ShareFood
Artan yemekleri ihtiyaç sahipleriyle buluşturuyoruz.

---
## Development
### Install Repository
```git
git clone https://github.com/si-hesteg/si-hesteg-backend
```

### config.json setup
```json
{
    "mongodb": "ENTER MONGODB URL"
}
```

### Run Project
Install node modules and run project.
```js
npm install
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
| /search? | GET | city, district, neighborhood, page, limit | Get restaurants |
| /cities | GET | page, limit | Get cities with restaurants |
| /neighborhoods | GET | city, district, page, limit | Get neighborhoods with restaurants |
| /restaurant/RESTAURANT_ID | GET | - | Get restaurant |
| /restaurant/RESTAURANT_ID/food | GET | page, limit | Get foods of restaurant |
| /restaurant/upload | POST | - | Upload a food |
| /restaurant/delete | POST | - | Delete a food |
| /login | POST | - | Login |
| /register | POST | - | Register |

---

### Data pagination (page, limit parameters):
Its brings a limited number of data in one request.

for example: `localhost:3000/cities?page=2&limit=10` its brings data between 11th and 20th.
