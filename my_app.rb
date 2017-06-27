require 'sinatra'
require "sinatra/reloader" if development?


# 创建一个存放静态文件的目录，主要存放css、js、font、image等文件
set :public_folder, File.dirname(__FILE__) + '/static'

# 在任何路由代码块或过滤器抛出异常时，会调用 error 处理器。 但注意在开发环境下只有将 show exceptions 项设置为 :after_handler 时，才会生效。
set :show_exceptions, :after_handler if development?


get '/' do
  'Hello world!'
end


# 登录页面路由    ---------------   开始  ----------------

# 领导的欢迎页面
get '/welcome/manager' do
  erb :'welcome/manager'
end

# 运营商管理人员的欢迎页面
get '/welcome/staff' do
  erb :'welcome/staff'
end

# 代维人员的欢迎页面
get '/welcome/operator' do
  erb :'welcome/operator'
end


# 登录页面路由    ---------------   结束  ----------------


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
