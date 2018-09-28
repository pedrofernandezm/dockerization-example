FactoryGirl.define do
  factory :ticket do
    subject Faker::Lorem.sentence
    description Faker::Lorem.paragraph
    customer
    aasm_state "opened"
  end
end
