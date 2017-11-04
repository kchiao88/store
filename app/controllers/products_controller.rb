class ProductsController < ApplicationController
  before_action :authenticate_user!, only: [:new]
  def index
    @products = Product.where(:popular => true)
  end
  def show
    @product = Product.find(params[:id])
    session[:productid] = @product.id  
  end
  
  def all
    @products = Product.all
  end
  
  def new
  end
  
  
  
  def create
    @user ||= User.find(session[:id]) if session[:id]
    if is_admin?
      @product = Product.new(products_params)
      @product.save
      redirect_to @product
    else
      
      redirect_to root_path
    end
    
  end
  
  private
  def products_params
      params.require(:product).permit(:title, :pic, :price, :desc)
  end
  
  def is_admin?
    signed_in? ? current_user.admin : false
  end
end
