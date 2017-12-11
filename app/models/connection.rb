class Connection < ApplicationRecord

  validates :user_id, :requester_id, :status, presence: true

end
