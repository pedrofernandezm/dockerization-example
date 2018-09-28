class Session < ApplicationRecord

  DURATION_SECONDS = 1200

  has_secure_token :token
  has_secure_token :uuid

  belongs_to :user

  validates :user_id, presence: true
  validates :expires_at, presence: true

  def access_token
    Token.encode(user_id: user_id, token: token, expires_at: expires_at, type: user.type)
  end

end
