ticket_states = %w(opened closed)
password = "Secret!"

Admin.create(
  email: "admin@tickets.com",
  password: password
)

2.times do
  Customer.create(
    email: Faker::Internet.email,
    password: password
  )
end

2.times do
  Agent.create(
    email: Faker::Internet.email,
    password: password
  )
end

Agent.create(
  email: "agent@tickets.com",
  password: password
)

Customer.create(
  email: "customer@tickets.com",
  password: password
)

20.times do
  Ticket.create(
    subject: Faker::Lorem.sentence,
    description: Faker::Lorem.paragraph,
    customer_id: Customer.all.sample.id,
    aasm_state: ticket_states.sample
  )
end

20.times do
  Reply.create(
    message: Faker::Lorem.sentence,
    user_id: User.all.sample.id,
    ticket_id: Ticket.all.sample.id
  )
end
