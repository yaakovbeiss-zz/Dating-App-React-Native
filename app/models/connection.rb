class Connection < ApplicationRecord

  validates :user_id, :requested_id, :status, presence: true

  belongs_to :user

  belongs_to :requested, :class_name => "User"

end
