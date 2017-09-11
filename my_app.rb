require 'sinatra'
require "sinatra/reloader" if development?
require "sinatra/activerecord"


# 创建一个存放静态文件的目录，主要存放css、js、font、image等文件
set :public_folder, File.dirname(__FILE__) + '/static'

# 在任何路由代码块或过滤器抛出异常时，会调用 error 处理器。 但注意在开发环境下只有将 show exceptions 项设置为 :after_handler 时，才会生效。
set :show_exceptions, :after_handler if development?

set :database, {adapter: "sqlite3", database: "GlassCup.sqlite3"}

enable :sessions
set :session_secret, "My session secret"


# -----------------------------------------------
# models
# -----------------------------------------------

class Occ < ActiveRecord::Base
end


# -----------------------------------------------
# data
# -----------------------------------------------

$occ_data = [{:name=>'徐汇光交GJ101', :lng=>'121.441788',:lat=>'31.206199'},{:name=>'徐汇光交GJ102', :lng=>'121.44123',:lat=>'31.201757'},{:name=>'徐汇光交GJ103', :lng=>'121.437668',:lat=>'31.200436'}]
$manhole_data = [{:name=>'徐汇人井RJ101', :lng=>'121.442045',:lat=>'31.205795'},{:name=>'徐汇人井RJ102', :lng=>'121.446551',:lat=>'31.201097'},{:name=>'徐汇人井RJ103', :lng=>'121.445135',:lat=>'31.200473'}]


# -----------------------------------------------
# controllers
# -----------------------------------------------


get '/' do
  erb :'login', :layout => :layout_login
end

post '/' do
  session[:current_menu] = 'home'
  erb :'welcome/manager'
end

get '/welcome/map' do
  session[:current_menu] = 'home'
  erb :'welcome/map'
end

get '/welcome' do
  session[:current_menu] = 'home'
  erb :'welcome/index', :layout => :layout_blank
end

get '/welcome/district/:district_name' do
  session[:current_menu] = 'home'
  @district_name = params[:district_name]

  case @district_name
  when "changning"

  when "hongkou"
    @msg = {district_name_cn: '虹口区', data1: '41239', data2: '5123', data3: '48', data4: '97.4', data5: '541'}
  when "huangpu"
    @msg = {district_name_cn: '黄浦区', data1: '38761', data2: '6123', data3: '43', data4: '96.8', data5: '761'}
  when "jingan"
    @msg = {district_name_cn: '静安区', data1: '27612', data2: '2198', data3: '47', data4: '98.5', data5: '236'}
  when "putuo"
    @msg = {district_name_cn: '普陀区', data1: '38619', data2: '7612', data3: '52', data4: '98.9', data5: '871'}
  when "xuhui"
    @msg = {district_name_cn: '徐汇区', data1: '43198', data2: '7621', data3: '41', data4: '97.3', data5: '529'}
  when "yangpu"
    @msg = {district_name_cn: '杨浦区', data1: '23548', data2: '3218', data3: '46', data4: '96.2', data5: '241'}
  end

  erb :'welcome/district', :layout => :layout_blank
end


get '/home' do
  session[:current_menu] = 'home'
  erb :'home', :layout => :layout_blank
end


get '/dashboard' do
  session[:current_menu] = 'dashboard'
  erb :'dashboard/index'
end

get '/dashboard/construction' do
  erb :'dashboard/construction', :layout => :layout_blank
end

get '/dashboard/alert' do
  erb :'dashboard/alert', :layout => :layout_blank
end


# 登录页面路由    ---------------   开始  ----------------

# 领导的欢迎页面
get '/welcome/manager' do
  session[:current_menu] = 'home'
  erb :'welcome/manager'
end

# 运营商管理人员的欢迎页面
get '/welcome/staff' do
  session[:current_menu] = 'home'
  erb :'welcome/staff'
end

# 代维人员的欢迎页面
get '/welcome/operator' do
  session[:current_menu] = 'home'
  erb :'welcome/operator'
end


# 登录页面路由    ---------------   结束  ----------------


# 资产管理页面    ---------------   开始  ----------------

get '/asset' do
  session[:current_menu] = 'asset'
  erb :'asset/index'
end

post '/asset/search' do
  session[:current_menu] = 'asset'
  key = params[:key]
  @result = {type: 'occ'}.merge $occ_data[1]
  erb :'asset/index'
end

get '/asset/occs/:id' do
  erb :'asset/occ_detail', layout: :layout_blank
end

get '/asset/manholes/:id' do
  erb :'asset/manhole'
end

get '/asset/map' do
  erb :'asset/map'
end

# 资产管理页面    ---------------   结束  ----------------


get '/monitor/asset-status' do
  session[:current_menu] = 'monitor'
  erb :'monitor/asset_status'
end



# 小区信息查询页面    ---------------   开始  ----------------


get '/community' do
  session[:current_menu] = 'community'
  erb :'community/index'
end

get '/community/detail' do
  erb :'community/detail'
end


# 小区信息查询页面    ---------------   结束  ----------------



# 家宽业务    ---------------   开始  ----------------

get '/broadband-family' do
  session[:current_menu] = 'broadband-family'
  erb :'broadband-family/index'
end

get '/broadband-family/map' do
  erb :'broadband-family/map'
end

get '/broadband-family/overview' do
  erb :'broadband-family/overview', :layout => :layout_blank
end

get '/broadband-family/utilization' do
  erb :'broadband-family/utilization'
end

get '/broadband-family/family-detail' do
  erb :'broadband-family/family-detail', layout: :layout_blank
end

get '/broadband-family/community-detail' do
  session[:current_menu] = 'broadband-family'
  erb :'broadband-family/community-detail', layout: :layout_blank
end

# 家宽业务    ---------------   结束  ----------------




# 巡检管理    ---------------   开始  ----------------
get '/inspection' do
  session[:current_menu] = 'inspection'
  erb :'inspection/index'
end

get '/inspection/pipe' do
  erb :'inspection/pipe'
end

# 巡检管理    ---------------   结束  ----------------


# 全平台信息检索    ---------------   开始  ----------------

get '/search' do
  session[:current_menu] = 'search'
  erb :'search/index'
end

# 全平台信息检索    ---------------   结束  ----------------
