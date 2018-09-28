require 'rails_helper'

RSpec.describe Reply, type: :model do

  it { should belong_to(:user) }
  it { should belong_to(:ticket) }

  it { should validate_presence_of(:message) }


end
