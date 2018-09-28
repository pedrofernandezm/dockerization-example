class Ticket < ApplicationRecord
  include AASM

  aasm do
    state :opened, initial: true
    state :closed

    event :close do
      transitions from: :opened, to: :closed
    end
  end

  has_secure_token :uuid

  belongs_to :customer

  has_many :replies

  validates :subject, presence: true
  validates :description, presence: true

end
