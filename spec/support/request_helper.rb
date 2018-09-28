module Requests
  module JsonHelpers
    def response_as_json
      JSON.parse(last_response.body)
    end
  end
end
