curl --request POST \
  --url 'http://localhost:3000/contacts' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "João Sem Token",
    "phone": "+5511999999999"
  }'
