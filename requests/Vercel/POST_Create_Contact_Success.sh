curl --request POST \
  --url 'https://crud-autenticado.vercel.app/contacts' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer <TOKEN>' \
  --data '{
    "name": "Maria Oliveira",
    "phone": "+5511987654321",
    "email": "maria.oliveira@example.com",
    "address": "Rua das Flores, 456, Rio de Janeiro, RJ",
    "notes": "Cliente VIP"
  }'
