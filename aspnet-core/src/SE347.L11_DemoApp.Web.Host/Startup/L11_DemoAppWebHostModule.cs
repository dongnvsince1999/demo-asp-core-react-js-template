using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using SE347.L11_DemoApp.Configuration;

namespace SE347.L11_DemoApp.Web.Host.Startup
{
    [DependsOn(
       typeof(L11_DemoAppWebCoreModule))]
    public class L11_DemoAppWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public L11_DemoAppWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(L11_DemoAppWebHostModule).GetAssembly());
        }
    }
}
