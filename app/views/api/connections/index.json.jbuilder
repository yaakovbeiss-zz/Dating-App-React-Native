@connections.each do |connection|
  json.set! connection.requester_id do
    json.requester_id connection.requester_id
    json.status connection.status
  end
end
