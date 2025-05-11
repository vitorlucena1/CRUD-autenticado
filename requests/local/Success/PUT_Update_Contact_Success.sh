curl --request PUT \
  --url 'http://localhost:3000/contacts/CONTACT_ID_HERE' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer VALID_TOKEN_HERE' \
  --data '{
    "name": "Maria Oliveira Atualizada",
    "phone": "+5511987654322"
  }'
