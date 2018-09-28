require 'rails_helper'

RSpec.describe Agents::TicketsController, type: :api do

  before(:all) do
    @session = create(:session, user: create(:agent))
    header "Content-Type", "application/json"
    header "Authorization", "Bearer #{@session.access_token}"
  end

  describe "GET #index" do
    it "responds successfully with an HTTP 200 status code" do
      get '/api/agents/tickets'
      expect(last_response.successful?).to be_truthy
      expect(last_response.status).to eq(200)
    end

    it "returns the list of tickets" do
      3.times { create(:ticket) }
      get '/api/agents/tickets'
      expect(response_as_json["data"].size).to eq(3)
    end
  end
end
