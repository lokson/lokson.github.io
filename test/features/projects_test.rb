require 'test_helper.rb'

class ProjectsTest < ActiveSupport::TestCase
  test 'a project duration is presented in a human format' do
    use_projects :one_month
    visit '/'
    assert page.find('.projects').has_content? '1 month'

    use_projects :half_year
    visit '/'
    assert page.find('.projects').has_content? '6 months'

    use_projects :year
    visit '/'
    wait
    assert page.find('.projects').has_content? '1 year'

    use_projects :year_and_half
    visit '/'
    assert page.find('.projects').has_content? '1 year 6 months'
  end

  # test 'searching hides projects without searched skill' do
  #   use_projects :one_month, :year
  #   visit '/'
  #   assert page.find('.projects').has_content? @@fixtures['one_month']['name']
  # end
end
