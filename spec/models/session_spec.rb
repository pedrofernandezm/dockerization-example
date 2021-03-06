require 'rails_helper'

RSpec.describe Session, type: :model do

  it { should belong_to(:user) }

  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:expires_at) }

end
