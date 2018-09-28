require 'rails_helper'

RSpec.describe Agent, type: :model do

  describe "when quering tickets" do

    it "should return all the tickets" do
      3.times { create(:ticket) }
      agent = build(:agent)
      expect(agent.tickets.size).to eq(3)
    end

  end
end
