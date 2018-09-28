FactoryGirl.define do
  factory :user do
    email Faker::Internet.email
    password "Secret!"

  end
  factory :customer do
    email Faker::Internet.email
    password "Secret!"
    type "Customer"
  end

  factory :agent do
    email Faker::Internet.email
    password "Secret!"
    type "Agent"
  end
end
