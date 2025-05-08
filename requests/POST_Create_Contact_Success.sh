curl --request POST \
  --url 'http://localhost:3000/contacts' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWNkZTcwNTFiYTRhNzM3YzI4NDgxYyIsImlhdCI6MTc0NjcyMjQyNSwiZXhwIjoxNzQ2NzI2MDI1fQ.epgJa-PIGRiomqxHkJ8rCvHH5-IZWAa0HC9iubJgDgc' \
  --data '{
    "name": "Maria Oliveira",
    "phone": "+5511987654321",
    "email": "maria.oliveira@example.com",
    "address": "Rua das Flores, 456, Rio de Janeiro, RJ",
    "notes": "Cliente VIP"
  }'
