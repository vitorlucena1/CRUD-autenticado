curl --request POST \
  --url 'http://localhost:3000/contacts' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer VALID_TOKEN_HERE' \
  --data '{
    "name": "",
    "phone": ""
  }'
