friends = {}
you_requested = {}
requested_you = {}

@connections.each do |connection|

  if connection.status == 'Accepted'
    friends[connection.requested_id] = {
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
    requested_you[connection.requested_id] = {
      id: connection.id,
      requested_id: connection.requested_id,
      status: connection.status
    }
  end

end

json.friends friends
json.you_requested you_requested
json.requested_you requested_you
