require 'rails_helper'

RSpec.describe Ticket, type: :model do

  it { should belong_to(:customer) }
  it { should have_many(:replies) }

  it { should validate_presence_of(:subject) }
  it { should validate_presence_of(:description) }


end
