class User < ApplicationRecord
    has_many :reviews
    has_many :albums, through: :reviews
    validates :username, presence: true
    has_secure_password
end
