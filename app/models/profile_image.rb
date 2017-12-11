class ProfileImage < ApplicationRecord

  validates :user_profile_id, presence: true
  belongs_to :user_profile

  has_attached_file :image, default_url: "app/assets/images/default_profile_pic.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
