friends = {}
not_friends = {}
you_requested = {}
requested_you = {}

@connections.each do |connection|

  if connection.status == 'Accepted'
    friends[connection.requested_id] = {
      id: connection.id,
      requested_id: connection.requested_id,
      status: connection.status
    }
  elsif connection.status == 'Denied'
    not_friends[connection.requested_id] = {
      id: connection.id,
      requested_id: connection.requested_id,
      status: connection.status
    }
  elsif connection.user_id == current_user.id
    you_requested[connection.requested_id] = {
      id: connection.id,
      requested_id: connection.requested_id,
      status: connection.status
    }
  elsif connection.requested_id == current_user.id
    requested_you[connection.user_id] = {
      id: connection.id,
      user_id: connection.user_id,
      requested_id: connection.requested_id,
      status: connection.status
    }
  end

end

json.friends friends
json.not_friends not_friends
json.you_requested you_requested
json.requested_you requested_you
