class ResultsController < ApplicationController
  def index
    results = (1..6).to_a.shuffle
    render json: { results: results }
  end
end
