class Song < ApplicationRecord
    belongs_to :artist
    belongs_to :album
    validates :title, presence: true


end
