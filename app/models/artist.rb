class Artist < ApplicationRecord
    has_many :songs
    has_many :albums, through: :songs
    
    validates :name, presence: true
    

  
end
