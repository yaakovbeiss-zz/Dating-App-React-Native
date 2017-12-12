friends = {}
friend_requests = {}

@connections.each do |connection|

  if connection.status == 'Accepted'
    friends[connection.requested_id] = {
      id: connection.id,
      requested_id: connection.requested_id,
      status: connection.status
    }
  else
    friend_requests[connection.requested_id] = {
      id: connection.id,
      requested_id: connection.requested_id,
      status: connection.status
    }
  end

end

json.friends friends
json.friend_requests friend_requests
