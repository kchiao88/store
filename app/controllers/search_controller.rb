class SearchController < ApplicationController

    def index
       if params[:query].present?
          #@products = Product.search(params[:query])
          puts(params[:query])
          @products = Product.where(title: params[:query])   
        else
          @products = Product.all
        end
    end
end