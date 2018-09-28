module Token
  extend self

  def encode(payload)
    ::JWT.encode(payload, secret, algorithm)
  end

  def verify!(token)
    ::JWT.decode(token, secret, true, { algorithm: algorithm })
  rescue ::JWT::DecodeError
    false
  end

  def decode(token)
    ::JWT.decode(token, secret, true)
  rescue ::JWT::ExpiredSignature
    { message: 'Token has expired' }
  end

  private

  def secret
    Rails.application.secrets.secret_key_base
  end

  def algorithm
    'HS256'
  end
end
