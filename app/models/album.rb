class Album < ApplicationRecord
  has_many :songs
  has_many :artists, through: :songs

  has_many :reviews
  has_many :albums, through: :reviews
end
