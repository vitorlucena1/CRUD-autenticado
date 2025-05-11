curl --request POST \
  --url 'https://crud-autenticado.vercel.app/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "email": "joao.silva@example.com",
    "password": "securepassword123"
  }'
