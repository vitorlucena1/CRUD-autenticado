curl --request PUT \
  --url 'http://localhost:3000/contacts/ID_DO_CONTATO_USUARIO_1' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer TOKEN_USUARIO_2' \
  --data '{
    "name": "Tentativa de Atualização Indevida"
  }'