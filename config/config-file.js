module.exports = {
  APP_PORT: 4117, // 服务端口
  APP_KEY: 'test.ariport', // Appkey
  CAT_PROJECT: 'test.ariport', // 
  LOGGER_TOPIC: '', // 
  PROJECTS_DIR: 'projects-prod', // 生产环境的项目根路径
  PROJECT_CONFIG: './config/project-config.json', // 项目配置文件路径
  PROJECT_MIDDLEWARE: 'middleware.js', // 项目中间件配置文件路径
  PROJECT_REWRITE: 'rewrite.js', // 项目 rewrite 规则配置文件路径
  PROJECT_DYNAMIC_ROUTES_DIR: 'dynamic-routes', // 项目动态路由根目录
  PROJECT_STATIC_ROUTES_DIR: './projects/project1/static-routes', // 项目静态路由根目录
  PROJECT_HOOK_BEFORE_STARTUP: 'before-startup.js', // 服务启动前的全局钩子函数
  PROJECT_HOOK_BEFORE_QUIT: 'before-quit.js' // 服务退出前的全局钩子函数
};
