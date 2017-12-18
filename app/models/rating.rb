class Rating < ApplicationRecord

  validates :rater_id, :rated_id, :rating, presence: true

  belongs_to :rater,
    class_name: 'User',
    foreign_key: :rater_id

  belongs_to :rated,
    class_name: 'User',
    foreign_key: :rated_id

end
