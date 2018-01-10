class Match < ApplicationRecord

  validates :matchmaker_id, :recipient_id, :suggested_id, presence: true

  belongs_to :matchmaker,
    class_name: 'User',
    foreign_key: :matchmaker_id

  belongs_to :recipient,
    class_name: 'User',
    foreign_key: :recipient_id

  belongs_to :suggested,
    class_name: 'User',
    foreign_key: :suggested_id


end
