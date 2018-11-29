class Message < ApplicationRecord
  belongs_to :group
  belongs_to :group

  validates :content, presence: true, unless: :image?
end
