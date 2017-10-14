class Product < ActiveRecord::Base
mount_uploader :pic, ImageUploader
end
