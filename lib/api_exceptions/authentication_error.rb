module ApiExceptions
  class AuthenticationError < ApiExceptions::BaseError

    def initialize(message = "Authentication failed", status = 401)
      @message = message
      @status = status
    end
  end
end
