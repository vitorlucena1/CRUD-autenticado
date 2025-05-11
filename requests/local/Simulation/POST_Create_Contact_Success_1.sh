curl --request POST \
  --url 'http://localhost:3000/contacts' \
  --header 'Authorization: Bearer <TOKEN>' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Contato 1",
    "phone": "123456789",
    "email": "contato1@email.com"
  }'