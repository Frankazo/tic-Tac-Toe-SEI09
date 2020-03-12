

curl "https://tic-tac-toe-wdi.herokuapp.com/games/1486" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \


echo
