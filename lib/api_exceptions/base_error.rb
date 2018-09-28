module ApiExceptions
  class BaseError < StandardError

    attr_reader :status, :message

    def initialize(message = "Base error", status = 500)
      @message = message
      @status = status
    end
  end
end
