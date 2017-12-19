@ratings.each do |rating|
  json.set! rating.rated_id do
    json.id rating.id
    json.rated_id rating.rated_id
    json.rater_id rating.rater_id
    json.rating rating.rating
  end
end
