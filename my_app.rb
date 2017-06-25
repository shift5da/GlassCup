require 'sinatra'

set :public_folder, File.dirname(__FILE__) + '/static'

# 在任何路由代码块或过滤器抛出异常时，会调用 error 处理器。 但注意在开发环境下只有将 show exceptions 项设置为 :after_handler 时，才会生效。
set :show_exceptions, :after_handler

configure do
  set :foo, 'bar'
end

get '/' do
  'Hello world!'
end


# 登录页面路由    ---------------   开始  ----------------

# 领导的欢迎页面
get '/welcome/manager' do
  erb :'welcome/manager'
end


# 登录页面路由    ---------------   结束  ----------------
