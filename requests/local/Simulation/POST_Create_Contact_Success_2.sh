curl --request POST \
  --url 'http://localhost:3000/contacts' \
  --header 'Authorization: Bearer <TOKEN>' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Contato 2",
    "phone": "987654321",
    "email": "contato2@email.com"
  }'