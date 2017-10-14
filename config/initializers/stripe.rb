Rails.configuration.stripe = {
  #:publishable_key => ENV['PUBLISHABLE_KEY'],
  :publishable_key => "pk_test_sj0CzBdgne9bNi5p5YFgz1S2",
  :secret_key      => "sk_test_MbcbLINFgOODUNd6jjVO7zcf"
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]