curl --request POST \
  --url 'https://crud-autenticado.vercel.app/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "joaosilva",
    "email": "joao.silva@example.com",
    "password": "securepassword123"
  }'
