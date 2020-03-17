
curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "cell": {
        "index": 3,
        "value": "O"
      },
      "over": false
    }
  }'

echo
