
curl "https://tic-tac-toe-wdi.herokuapp.com/games/1350" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "cell": {
        "index": 6,
        "value": "x"
      },
      "over": false
    }
  }'

echo
