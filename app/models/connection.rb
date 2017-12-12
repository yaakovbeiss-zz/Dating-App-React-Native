class Connection < ApplicationRecord

  validates :user_id, :requested_id, :status, presence: true

  belongs_to :user

end
