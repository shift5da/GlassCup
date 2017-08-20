require 'sinatra'
require "sinatra/reloader" if development?
require "sinatra/activerecord"


# 创建一个存放静态文件的目录，主要存放css、js、font、image等文件
set :public_folder, File.dirname(__FILE__) + '/static'

# 在任何路由代码块或过滤器抛出异常时，会调用 error 处理器。 但注意在开发环境下只有将 show exceptions 项设置为 :after_handler 时，才会生效。
set :show_exceptions, :after_handler if development?

set :database, {adapter: "sqlite3", database: "GlassCup.sqlite3"}

enable :sessions


# -----------------------------------------------
# models
# -----------------------------------------------

class Occ < ActiveRecord::Base
end



# -----------------------------------------------
# controllers
# -----------------------------------------------


get '/' do
  session['current_menu'] = 'community'
  erb :'community/index'
end

get '/dashboard' do
  session['current_menu'] = 'dashboard'
  erb :'dashboard/index', :layout => :layout_blank
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
  session['current_menu'] = 'home'
  erb :'welcome/manager'
end

# 运营商管理人员的欢迎页面
get '/welcome/staff' do
  session['current_menu'] = 'home'
  erb :'welcome/staff'
end

# 代维人员的欢迎页面
get '/welcome/operator' do
  session['current_menu'] = 'home'
  erb :'welcome/operator'
end


# 登录页面路由    ---------------   结束  ----------------


# 资产管理页面    ---------------   开始  ----------------

get '/asset' do
  erb :'asset/index'
end

get '/asset/occs/:id' do
  erb :'asset/occ'
end

get '/asset/manholes/:id' do
  erb :'asset/manhole'
end

# 资产管理页面    ---------------   结束  ----------------


# 小区信息查询页面    ---------------   开始  ----------------


get '/community' do
  erb :'community/index'
end

get '/community/detail' do
  erb :'community/detail'
end


# 小区信息查询页面    ---------------   结束  ----------------


# 全平台信息检索    ---------------   开始  ----------------

get '/search' do
  erb :'search/index'
end

# 全平台信息检索    ---------------   结束  ----------------
