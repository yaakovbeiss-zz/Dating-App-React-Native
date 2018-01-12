i_suggested = {}
suggested_to_me = {}
computer_suggested = current_user.suggest_matches_through_ratings

@matches.each do |match|
  if match.matchmaker_id == current_user.id
    i_suggested[match.recipient_id] = match.recipient
  elsif match.recipient_id == current_user.id
    suggested_to_me[match.suggested_id] = match.suggested
  end

end

json.i_suggested i_suggested
json.suggested_to_me suggested_to_me
json.computer_suggested computer_suggested
