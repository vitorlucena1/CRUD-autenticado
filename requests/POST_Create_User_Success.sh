curl --request POST \
  --url 'http://localhost:3000/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "joaosilva",
    "email": "joao.silva@example.com",
    "password": "securepassword123"
  }'
