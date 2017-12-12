class User < ApplicationRecord

  attr_reader :password

  validates :email, :password_digest, :first_name, :last_name, :gender, :birthday, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_one :user_settings
  has_one :user_profile

  has_many :connections

  has_many :accepted_connections, -> { where status: 'Accepted' },
    class_name: "Connection",
    foreign_key: :user_id

  has_many :pending_connections, -> { where status: 'Pending' },
    class_name: "Connection",
    foreign_key: :user_id

  has_many :friends,
    through: :accepted_connections,
    source: :user


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  def age
    dob = self.birthday
    now = Time.now.utc.to_date
    now.year - dob.year - ((now.month > dob.month || (now.month == dob.month && now.day >= dob.day)) ? 0 : 1)
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
