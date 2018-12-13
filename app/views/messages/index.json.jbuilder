json.array! @new_messages do |message|
  json.id message.id
  json.content message.content
  json.name message.user.name
  json.date message.created_at
  json.image message.image
end
