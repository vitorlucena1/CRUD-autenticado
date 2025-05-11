curl --request POST \
  --url 'http://localhost:3000/contacts' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer INVALID_TOKEN_HERE' \
  --data '{
    "name": "João Token Inválido",
    "phone": "+5511999999999"
  }'
