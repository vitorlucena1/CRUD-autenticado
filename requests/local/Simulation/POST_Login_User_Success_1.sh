curl --request POST \
  --url 'http://localhost:3000/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "email": "usuario1@email.com",
    "password": "senha123"
  }'
