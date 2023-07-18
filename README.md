# stockTask

To run this project run below command:

1. Install node packages
```npm install```

2. Start server
```npm run start```

3. Open postman and pass below payload and set POST method with below url.
```http://localhost:3000/stock```

request payload: 
{
    "sku": "NAX148363/42/24"
}

response payload:
{
    "sku": "NAX148363/42/24",
    "stock": 7707
}
