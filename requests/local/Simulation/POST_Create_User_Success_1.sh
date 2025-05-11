curl --request POST \
  --url 'http://localhost:3000/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "teste1",
    "email": "usuario1@email.com",
    "password": "senha123"
  }'