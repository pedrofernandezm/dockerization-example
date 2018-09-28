FactoryGirl.define do
  factory :session do
    user
    expires_at { Time.now + 20.minutes }
  end
end
