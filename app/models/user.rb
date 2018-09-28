class User < ApplicationRecord

  has_secure_password

  has_secure_token :uuid

  has_many :replies

  validates :email, presence: true

end
