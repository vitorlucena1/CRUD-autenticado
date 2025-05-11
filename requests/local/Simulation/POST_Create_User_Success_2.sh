curl --request POST \
  --url 'http://localhost:3000/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "teste2",
    "email": "usuario2@email.com",
    "password": "senha123"
  }'